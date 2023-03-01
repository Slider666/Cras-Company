const refs = {
  // Кнопки хедера
  openModalMobileMenuBtn: document.querySelector("[data-modal-mobile-menu-open]"),
  openModalRegisterBtn: document.querySelector("[data-modal-register-open]"),
  openModalEnterBtn: document.querySelector('[data-modal-enter-open]'),
  
  // Модальное окно мобилки
  modalMobileMenu: document.querySelector("[data-modal-mobile-menu]"),
  closeModalMobileMenuBtn: document.querySelector('[data-modal-mobile-menu-close]'),
  openModalRegisterMobileBtn: document.querySelector("[data-modal-register-open-mobile]"),
  openModalEnterMobileBtn: document.querySelector('[data-modal-enter-open-mobile]'),

  // Модальное окно регистрации
  modalRegister: document.querySelector("[data-modal-register]"),
  closeModalRegiserBtn: document.querySelector("[data-modal-register-close]"),

  // Модальное окно входа
  modalEnter: document.querySelector('[data-modal-enter]'),
  closeModalEnterBtn: document.querySelector('[data-modal-enter-close]'),

  // Кнопки футера
  openModalRegisterBtnFooter: document.querySelector("[data-modal-register-open-footer]"),
  openModalEnterBtnFooter: document.querySelector("[data-modal-enter-open-footer]"),
};

const html = document.documentElement;

function onEscKeyPress(event, modal) {
  if (event.code === 'Escape') {
    onCloseModal(modal);
  }
}

function onBackdropClick(event, modal) {
  if (event.target === event.currentTarget) {
    onCloseModal(modal)
  }
}

function onOpenModal(modal) {
  const marginSize = window.innerWidth - html.clientWidth;
  
  window.addEventListener('keydown', (event) => onEscKeyPress(event, modal));

  modal.addEventListener('click', (event) => onBackdropClick(event, modal));
  
  document.body.classList.add('modal-open');
  modal.classList.remove("is-hidden");

  if (marginSize) {
    html.style.marginRight = marginSize + "px";
  }
}

function onCloseModal(modal) {
  window.removeEventListener('keydown', (event) => onEscKeyPress(event, modal));
  modal.removeEventListener('click', (event) => onBackdropClick(event, modal));

  document.body.classList.remove('modal-open');
  modal.classList.add("is-hidden");

  html.style.marginRight = "";
}

// ===========================================================================
// Отрытие и закрытие модального окна мобилки
// ===========================================================================
  refs.openModalMobileMenuBtn.addEventListener("click", () => onOpenModal(refs.modalMobileMenu));
  refs.closeModalMobileMenuBtn.addEventListener("click", () => onCloseModal(refs.modalMobileMenu));

  function addClickHandler(openModalMobileBtn, modalMobileMenu, modalWindow) {
    openModalMobileBtn.addEventListener("click", () => {
      onCloseModal(modalMobileMenu);
      onOpenModal(modalWindow);
    });
  }

  addClickHandler(refs.openModalRegisterMobileBtn, refs.modalMobileMenu, refs.modalRegister);
  addClickHandler(refs.openModalEnterMobileBtn, refs.modalMobileMenu, refs.modalEnter);

// ===========================================================================
// Открытие и закрытие модального окна регистрации и входа
// ===========================================================================
refs.openModalRegisterBtn.addEventListener("click", () => onOpenModal(refs.modalRegister));
refs.openModalRegisterBtnFooter.addEventListener("click", () => onOpenModal(refs.modalRegister));
refs.closeModalRegiserBtn.addEventListener("click", () => onCloseModal(refs.modalRegister));

refs.openModalEnterBtn.addEventListener("click", () => onOpenModal(refs.modalEnter));
refs.openModalEnterBtnFooter.addEventListener("click", () => onOpenModal(refs.modalEnter));
refs.closeModalEnterBtn.addEventListener("click", () => onCloseModal(refs.modalEnter));
