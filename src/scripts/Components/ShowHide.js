const ShowHide = {
  setElelements: function () {
    ShowHide.toggle = document.querySelectorAll(".show-hide__toggle");
    ShowHide.content = document.querySelectorAll(".show-hide__content");
    ShowHide.close = document.querySelectorAll(".show-hide__close");
    ShowHide.init();
  },
  timeoutSet: function (element) {
    setTimeout(function () {
      element.setAttribute("hidden", "")
    }, 300);
  },
  toggleShowHide: function (event) {
    if (
      event.target.closest(".show-hide__toggle") ||
      event.target.closest(".show-hide__close")
    ) {
      let ShowHideToggle = event.target
        .closest(".card")
        .querySelector(".show-hide__toggle");
      let ShowHideClose = event.target
        .closest(".card")
        .querySelector(".show-hide__close");
      let ShowHideContent = event.target
        .closest(".card")
        .querySelector(".show-hide__content");
      if (ShowHideToggle.getAttribute("aria-expanded") === "false") {
        ShowHideContent.removeAttribute("hidden");
        ShowHideToggle.setAttribute("aria-expanded", "true");
        ShowHideClose.setAttribute("aria-expanded", "true");
        ShowHideClose.focus();
        ShowHideContent.setAttribute("aria-hidden", "false");
      } else {
        ShowHideToggle.setAttribute("aria-expanded", "false");
        ShowHideToggle.focus();
        ShowHideClose.setAttribute("aria-expanded", "false");
        ShowHideContent.setAttribute("aria-hidden", "true");
        ShowHide.timeoutSet(ShowHideContent);
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
    });

    Array.prototype.forEach.call(ShowHide.content, (content) => {
      content.setAttribute("aria-hidden", "true");
      // content.setAttribute("hidden", "");
    });

    // document.addEventListener("keydown", (event) => {
    //   if (event.key === "Enter" || event.key === " ") {
    //     ShowHide.toggleShowHide(event);
    //   }
    // });
    document.addEventListener("click", ShowHide.toggleShowHide, false);
  },
};

export default ShowHide;
