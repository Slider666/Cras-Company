(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtnFooter: document.querySelector("[data-modal-open-footer]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnFooter.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
