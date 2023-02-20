(() => {
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

  // refs.openModalMobileMenuBtn.addEventListener("click", toggleModalMobileMenu);
  // refs.closeModalMobileMenuBtn.addEventListener("click", toggleModalMobileMenu);

  // function toggleModalMobileMenu() {
  //   refs.modalMobileMenu.classList.toggle("is-hidden");
  // }

  // refs.openModalRegisterMobileBtn.addEventListener("click", toggleModalRegister)
  // refs.openModalRegisterBtn.addEventListener("click", toggleModalRegister);
  // refs.closeModalRegiserBtn.addEventListener("click", toggleModalRegister);
  // refs.openModalRegisterBtnFooter.addEventListener("click", toggleModalRegister);

  // function toggleModalRegister() {
  //   refs.modalRegister.classList.toggle("is-hidden");
  // }

  // refs.openModalEnterMobileBtn.addEventListener("click", toggleModalEnter)
  // refs.openModalEnterBtn.addEventListener("click", toggleModalEnter);
  // refs.closeModalEnterBtn.addEventListener("click", toggleModalEnter);
  // refs.openModalEnterBtnFooter.addEventListener('click', toggleModalEnter);

  // function toggleModalEnter() {
  //   refs.modalEnter.classList.toggle("is-hidden");
  // }

  function toggleModal(modal) {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle("is-hidden");
  }

  // Отрытие и закрытие модального окна мобилки
  refs.openModalMobileMenuBtn.addEventListener("click", () => toggleModal(refs.modalMobileMenu));
  refs.closeModalMobileMenuBtn.addEventListener("click", () => toggleModal(refs.modalMobileMenu));

  function addClickHandler(openModalMobileBtn, modalMobileMenu, modalWindow) {
    openModalMobileBtn.addEventListener("click", () => {
      toggleModal(modalMobileMenu);
      toggleModal(modalWindow);
    });
  }

  addClickHandler(refs.openModalRegisterMobileBtn, refs.modalMobileMenu, refs.modalRegister);
  addClickHandler(refs.openModalEnterMobileBtn, refs.modalMobileMenu, refs.modalEnter);

  // Открытие и закрытие модального окна регистрации и входа
  refs.openModalRegisterBtn.addEventListener("click", () => toggleModal(refs.modalRegister));
  refs.closeModalRegiserBtn.addEventListener("click", () => toggleModal(refs.modalRegister));
  refs.openModalEnterBtn.addEventListener("click", () => toggleModal(refs.modalEnter));
  refs.closeModalEnterBtn.addEventListener("click", () => toggleModal(refs.modalEnter));
  
  refs.openModalRegisterBtnFooter.addEventListener("click", () => toggleModal(refs.modalRegister));
  refs.openModalEnterBtnFooter.addEventListener("click", () => toggleModal(refs.modalEnter));
})();
