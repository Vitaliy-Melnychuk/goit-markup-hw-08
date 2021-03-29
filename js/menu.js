(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    menu: document.querySelector('[data-menu]'),
    menuIcon: document.querySelector('[data-icon]'),
  };
  
  refs.openMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.menuIcon.classList.toggle('is-open');
    refs.openMenuBtn.classList.toggle('is-open');
  }
})();