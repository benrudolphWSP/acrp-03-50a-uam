const ShowHide = {
  setElelements: function () {
    ShowHide.toggle = document.querySelectorAll('[data-showhide="toggle"]');
    ShowHide.content = document.querySelectorAll('[data-showhide="content"]');
    ShowHide.close = document.querySelectorAll('[data-showhide="close"]');
    ShowHide.init();
  },
  timeoutSet: function (element) {
    setTimeout(function () {
      element.style.height = "auto";
    }, 300);
  },
  toggleShowHide: function (event) {
    if (
      event.target.closest('[data-showhide="toggle"]') ||
      event.target.closest('[data-showhide="close"]')
    ) {
      let showHideToggle = event.target
        .closest(".alert")
        .querySelector('[data-showhide="toggle"]');
      let showHideClose = event.target
        .closest(".alert")
        .querySelector('[data-showhide="close"]');
      let showHideContent = event.target
        .closest(".alert")
        .querySelector('[data-showhide="content"]');
      if (showHideToggle.getAttribute("aria-expanded") === "false") {
        showHideToggle.setAttribute("aria-expanded", "true");
        showHideToggle.setAttribute("hidden", "");
        showHideClose.removeAttribute("hidden");
        showHideClose.setAttribute("aria-expanded", "true");
        showHideClose.focus();
        showHideContent.removeAttribute("hidden");
      } else {
        showHideToggle.removeAttribute("hidden");
        showHideToggle.setAttribute("aria-expanded", "false");
        showHideToggle.focus();
        showHideClose.setAttribute("aria-expanded", "false");
        showHideClose.setAttribute("hidden", "");
        showHideContent.setAttribute("aria-hidden", "true");
        showHideContent.setAttribute("hidden", "");
      }
    }
    return;
  },

  init: function () {
    // Add the type button to button so it's not mistaken for a form button
    Array.prototype.forEach.call(ShowHide.toggle, (toggle) => {
      toggle.setAttribute("aria-expanded", "false");
    });

    Array.prototype.forEach.call(ShowHide.close, (close) => {
      close.setAttribute("aria-expanded", "false");
      close.setAttribute("hidden", "");
    });

    Array.prototype.forEach.call(ShowHide.content, (content) => {
      content.setAttribute("hidden", "");
    });

    // document.addEventListener("keydown", (event) => {
    //   if (event.key === "Enter" || event.key === " ") {
    //     showHide.toggleShowHide(event);
    //   }
    // });
    document.addEventListener('click', ShowHide.toggleShowHide, false);
  },
};

export default ShowHide;
