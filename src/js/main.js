import './polyfills.js';
import whatInput from 'what-input';
import SuperSimpleAccordions from './Components/Accordion.js';
import ShowHide from './Components/ShowHide.js';
import PageTabs from './Components/Tabs';
import { flipListen } from './Components/FlipCards';
import { dataListen, initElements } from './Components/ToggleData';
import { menuListen } from './Components/DropdownNav';
import ModalVideo from 'modal-video';
import ExternaLinks from './Components/ExternalLinks';
import Swiper, { Navigation, A11y, Keyboard } from 'swiper';
Swiper.use([Navigation, A11y, Keyboard]);
import MicroModal from 'micromodal';


// Main Menu
if (document.querySelector("[data-nav='dropdown']")) {
  menuListen();
}

// Fullscreen Navigation setup
if (document.querySelector("[data-nav='fullscreen']")) {
  SidebarToggle.setup();
}

document.addEventListener('DOMContentLoaded', function () {

  if (document.querySelector('#modal-1')) {
    MicroModal.init();
  }

  if (document.querySelector('.accordion')) {
    const accordions = new SuperSimpleAccordions('.accordion', {
      iconsClass: 'arrow',
      iconsSymbol: 'arrow', // arrow or plus-minus
      iconsPosition: 'right', // right or left
      expandAllBtn: true,
    });
  }

  if (document.querySelector("[target='_blank']")) {
    ExternaLinks('[target="_blank"]');
  }

  // Home page tabs setup
  if (document.querySelector('.tabbed')) {
    PageTabs();
  }

  // Find show hide elements, if found run setup
  if (document.querySelector('.show-hide__toggle')) {
    ShowHide.setElelements();
  }

  // Find cards that flip
  if (document.querySelector('.details-card')) {
    flipListen();
  }

  // Find data-year, if found run setup
  if (document.querySelector('[data-year]')) {
    initElements();
    dataListen();
  }

  //Swiper setup for home page
  if (document.querySelector('.swiper')) {
    let videoSwiper = new Swiper('.swiper', {
      slidesPerView: 1,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      a11y: {
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        itemRoleDescriptionMessage: 'Slides',
        containerMessage: 'Image slidehow',
        containerRoleDescriptionMessage: 'slideshow',
      },
    });
    videoSwiper.on('init', function () {
      videoSwiper.slides.forEach(function (slide) {
        slide.setAttribute('tabindex', '0');
      });
      videoSwiper.slides.slice(1).forEach(function (slide) {
        slide.setAttribute('tabindex', '-1');
      });
    });
    videoSwiper.init();
    videoSwiper.on('slideChange', function () {
      videoSwiper.slides.forEach(function (slide) {
        slide.setAttribute('tabindex', '-1');
      });
      videoSwiper.slides[videoSwiper.activeIndex].setAttribute('tabindex', '0');
    });

    const clickHandler = function (event) {
      if (!event.target.closest('[data-hash]')) return;
      event.preventDefault();

      StopVideos();
      let element = event.target.closest('[data-hash]');
      let whichSlide = element.getAttribute('data-hash');
      videoSwiper.slideTo(whichSlide);
    };
    document.addEventListener('click', clickHandler, false);
  }

  var modalTriggers = document.querySelectorAll(
    '[data-video-id],[data-youtube-id]'
  );
  for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', function (e) {
      e.preventDefault();
    });
  }

  new ModalVideo('[data-video-id]', {
    vimeo: {
      byline: false,
      title: false,
    },
  });
});
