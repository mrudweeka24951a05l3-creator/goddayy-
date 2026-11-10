
document.addEventListener("DOMContentLoaded", () => {

  // Automatically update copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Refresh page button
  const refreshButton = document.getElementById("refreshButton");

  if (refreshButton) {
    refreshButton.addEventListener("click", () => {
      window.location.reload();
    });
  }

  // Protect Launchpad logo
  const logo = document.querySelector(".brand img");

  if (logo) {

    // Disable right-click menu
    logo.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    // Disable dragging
    logo.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    // Disable double-click selection/action
    logo.addEventListener("dblclick", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    // Disable image selection
    logo.addEventListener("selectstart", (event) => {
      event.preventDefault();
    });

    logo.setAttribute("draggable", "false");

  }

});
