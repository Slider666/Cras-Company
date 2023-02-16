(() => {
  const refs = {
    openModalRegisterBtn: document.querySelector("[data-modal-register-open]"),
    openModalEnterBtn: document.querySelector('[data-modal-enter-open]'),

    modalRegister: document.querySelector("[data-modal-register]"),
    modalEnter: document.querySelector('[data-modal-enter]'),

    openModalRegisterBtnFooter: document.querySelector("[data-modal-register-open-footer]"),
    openModalEnterBtnFooter: document.querySelector("[data-modal-enter-open-footer]"),

    closeModalBtn: document.querySelector("[data-modal-close]"),
    closeModalEnterBtn: document.querySelector('[data-modal-enter-close]'),
  };

  refs.openModalRegisterBtn.addEventListener("click", toggleModal);
  refs.openModalRegisterBtnFooter.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.openModalEnterBtn.addEventListener("click", toggleModalEnter);
  refs.openModalEnterBtnFooter.addEventListener('click', toggleModalEnter)
  refs.closeModalEnterBtn.addEventListener("click", toggleModalEnter);

  function toggleModal() {
    refs.modalRegister.classList.toggle("is-hidden");
  }

  function toggleModalEnter() {
    refs.modalEnter.classList.toggle("is-hidden");
  }
})();
