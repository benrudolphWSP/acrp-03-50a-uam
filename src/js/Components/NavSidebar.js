const SidebarToggle = {
  setup: function () {
    SidebarToggle.setElements();
  },
  setElements: function () {
    SidebarToggle.menu = document.getElementById("mainNav");
    SidebarToggle.mobileToggle = document.getElementById("mobileNavToggle");
    SidebarToggle.mobileToggleText = document.querySelector(
      ".nav-mobile__toggle-text"
    );
    SidebarToggle.menu.setAttribute("aria-hidden", true);
    SidebarToggle.menu.setAttribute("hidden", "");
    SidebarToggle.expanded = false;
    document.addEventListener("click", SidebarToggle.clickHandler);
  },
  clickHandler: function (event) {
    if (!event.target.closest("#mobileNavToggle")) return;
    SidebarToggle.toggleSidebar();
  },
  toggleSidebar: function () {
    if (!SidebarToggle.expanded) {
      SidebarToggle.mobileToggle.setAttribute("aria-expanded", true);
      SidebarToggle.mobileToggle.classList.add("is-active");
      SidebarToggle.menu.setAttribute("aria-hidden", false);
      SidebarToggle.menu.removeAttribute("hidden");
      SidebarToggle.expanded = true;
    } else {
      SidebarToggle.mobileToggle.setAttribute("aria-expanded", false);
      SidebarToggle.mobileToggle.classList.remove("is-active");
      SidebarToggle.menu.setAttribute("aria-hidden", true);
      SidebarToggle.menu.setAttribute("hidden", "");
      SidebarToggle.expanded = false;
    }
  },
};

export default SidebarToggle;
