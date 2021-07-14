const DropdownNav = function (event) {
  if (!event.target.closest('.menu-toggle')) return;
  const menuToggle = event.target.closest('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  mainNav.classList.toggle('block');
  mainNav.toggleAttribute('hidden');

  if (menuToggle.getAttribute('aria-expanded') === 'false') {
    menuToggle.setAttribute('aria-expanded', true);
  } else {
    menuToggle.setAttribute('aria-expanded', false);
  }
};

export function menuListen() {
  document.addEventListener('click', DropdownNav, false);
}
