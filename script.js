document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const refreshButton = document.getElementById("refreshButton");
  if (year) year.textContent = new Date().getFullYear();
  if (refreshButton) {
    refreshButton.addEventListener("click", () => window.location.reload());
  }
});
