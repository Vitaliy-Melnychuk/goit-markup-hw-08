(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    menu: document.querySelector('[data-menu]'),
  };
  const icon = {
    closeIcon: document.querySelector('[close-icon]'),
    menuIcon: document.querySelector('[data-icon]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  icon.closeIcon.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    icon.menuIcon.classList.toggle('is-open');
  }
})();