import "./polyfills.js"
import Promise from "promise-polyfill";
import whatInput from "what-input";
import SuperSimpleAccordions from "./Components/Accordion.js";
import ShowHide from "./Components/ShowHide.js";
import PageTabs from "./Components/Tabs";
import { flipListen } from "./Components/FlipCards";
import { dataListen, initElements } from "./Components/ToggleData";
import { menuListen } from "./Components/MenuToggle";
import ModalVideo from "modal-video";
import SidebarToggle from "./Components/NavSidebar";
import Swiper, { Navigation, A11y, Keyboard } from "swiper";
Swiper.use([Navigation, A11y, Keyboard]);


document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".accordion")) {
    const accordions = new SuperSimpleAccordions(".accordion", {
      iconsClass: "arrow",
      iconsSymbol: "arrow", // arrow or plus-minus
      iconsPosition: "right", // right or left
      expandAllBtn: true,
    });
  }

    // Navigation setup
  if (document.querySelector(".nav-mobile__toggle")) {
    SidebarToggle.setup();
  }
    // Home page tabs setup
  if (document.querySelector(".tabbed")) {
    PageTabs();
  }

  // Find show hide elements, if found run setup
  if (document.querySelector(".show-hide__toggle")) {
    ShowHide.setElelements();
  }

  // Find cards that flip
  if (document.querySelector(".details-card")) {
    flipListen();
  }

  // Find data-year, if found run setup
  if (document.querySelector("[data-year]")) {
    initElements();
    dataListen();
  }

  // Main Menu
  if (document.querySelector(".menu-toggle")) {
    menuListen();
  }

  //Swiper setup for home page
  if (document.querySelector(".swiper-container")) {
    let videoSwiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      autoHeight: true,
      init: false,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      a11y: {
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        itemRoleDescriptionMessage: "Slides",
        containerMessage: "Image slidehow",
        containerRoleDescriptionMessage: "slideshow",
      },
    });
    videoSwiper.on("init", function () {
      videoSwiper.slides.forEach(function (slide) {
        slide.setAttribute("tabindex", "0");
      });
      videoSwiper.slides.slice(1).forEach(function (slide) {
        slide.setAttribute("tabindex", "-1");
      });
    });
    videoSwiper.init();
    videoSwiper.on("slideChange", function () {
      videoSwiper.slides.forEach(function (slide) {
        slide.setAttribute("tabindex", "-1");
      });
      videoSwiper.slides[videoSwiper.activeIndex].setAttribute("tabindex", "0");
    });

    const clickHandler = function (event) {
      if (!event.target.closest("[data-hash]")) return;
      event.preventDefault();

      StopVideos();
      let element = event.target.closest("[data-hash]");
      let whichSlide = element.getAttribute("data-hash");
      videoSwiper.slideTo(whichSlide);
    };
    document.addEventListener("click", clickHandler, false);
  };

  var modalTriggers = document.querySelectorAll(
    "[data-video-id],[data-youtube-id]"
  );
  for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
  }

  new ModalVideo("[data-video-id]", {
    vimeo: {
      byline: false,
      title: false,
    },
  });
});
