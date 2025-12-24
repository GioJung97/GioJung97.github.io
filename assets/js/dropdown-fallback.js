document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.jQuery !== "undefined" && typeof window.jQuery.fn?.dropdown === "function") {
    return;
  }

  const dropdowns = document.querySelectorAll("#navbar .dropdown");

  const closeAll = () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");
      const menu = dropdown.querySelector(".dropdown-menu");
      if (menu) {
        menu.classList.remove("show");
      }
    });
  };

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!toggle || !menu) {
      return;
    }

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      const isOpen = dropdown.classList.contains("show");
      closeAll();
      if (!isOpen) {
        dropdown.classList.add("show");
        menu.classList.add("show");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#navbar .dropdown")) {
      closeAll();
    }
  });
});
