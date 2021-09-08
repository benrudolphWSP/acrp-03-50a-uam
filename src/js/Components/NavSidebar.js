import debounce from '../helpers/debounce';

const SidebarToggle = {
  setup: function () {
    SidebarToggle.setElements();
    window.addEventListener('resize', SidebarToggle.resizeHandler);
  },
  getView: function () {
    return window.matchMedia('(max-width: 1023px)').matches
      ? 'mobile'
      : 'desktop';
  },
  setElements: function () {
    const deviceType = SidebarToggle.getView();
    SidebarToggle.menu = document.getElementById('mainNav');
    SidebarToggle.social = document.querySelector('.social-nav');
    SidebarToggle.mobileToggle = document.getElementById('mobileNavToggle');
    SidebarToggle.mobileToggleText = document.querySelector(
      '.nav-mobile__toggle-text'
    );
    if (deviceType === 'mobile' && !SidebarToggle.expanded) {
      SidebarToggle.menu.setAttribute('aria-hidden', true);
      SidebarToggle.menu.setAttribute('hidden', '');
      SidebarToggle.social.setAttribute('aria-hidden', true);
      SidebarToggle.social.setAttribute('hidden', '');
      SidebarToggle.expanded = false;
    }
    document.addEventListener('click', SidebarToggle.clickHandler);
  },
  clickHandler: function (event) {
    if (!event.target.closest('#mobileNavToggle')) return;
    SidebarToggle.toggleSidebar();
  },
  resizeHandler: debounce(function (event) {
    const deviceType = SidebarToggle.getView();
    SidebarToggle.viewportChange(deviceType);
  }),
  toggleSidebar: function () {
    if (!SidebarToggle.expanded) {
      SidebarToggle.mobileToggle.setAttribute('aria-expanded', true);
      SidebarToggle.mobileToggle.classList.add('is-active');
      SidebarToggle.menu.setAttribute('aria-hidden', false);
      SidebarToggle.menu.removeAttribute('hidden');
      SidebarToggle.social.setAttribute('aria-hidden', false);
      SidebarToggle.social.removeAttribute('hidden');
      SidebarToggle.expanded = true;
    } else {
      SidebarToggle.mobileToggle.setAttribute('aria-expanded', false);
      SidebarToggle.mobileToggle.classList.remove('is-active');
      SidebarToggle.menu.setAttribute('aria-hidden', true);
      SidebarToggle.menu.setAttribute('hidden', '');
      SidebarToggle.social.setAttribute('aria-hidden', true);
      SidebarToggle.social.setAttribute('hidden', '');
      SidebarToggle.expanded = false;
    }
  },
  viewportChange: function (deviceType) {
    if (deviceType === 'desktop') {
      SidebarToggle.mobileToggle.setAttribute('aria-expanded', false);
      SidebarToggle.mobileToggle.classList.remove('is-active');
      SidebarToggle.menu.setAttribute('aria-hidden', false);
      SidebarToggle.menu.removeAttribute('hidden');
      SidebarToggle.social.setAttribute('aria-hidden', false);
      SidebarToggle.social.removeAttribute('hidden');
      SidebarToggle.expanded = false;
    }
    if (deviceType === 'mobile' && !SidebarToggle.expanded) {
      SidebarToggle.mobileToggle.setAttribute('aria-expanded', false);
      SidebarToggle.mobileToggle.classList.remove('is-active');
      SidebarToggle.menu.setAttribute('aria-hidden', true);
      SidebarToggle.menu.setAttribute('hidden', '');
      SidebarToggle.social.setAttribute('aria-hidden', true);
      SidebarToggle.social.setAttribute('hidden', '');
      SidebarToggle.expanded = false;
    }
  },
};

export default SidebarToggle;
