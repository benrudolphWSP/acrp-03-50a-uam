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
