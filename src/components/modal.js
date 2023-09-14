document.addEventListener("click", function(event) {
  const modal = document.querySelector(".wrky-modal");
  const card = document.querySelector(".wrky__card");

  const isModal = event.target.closest(".wrky-modal");
  const isTrigger = event.target.closest(".wrky-modal__trigger");
  const isClose = event.target.closest(".wrky-modal__close");

  if (!isModal && !isTrigger && modal.classList.contains("open")) {
    closeModal(modal, card);
  }

  if (isTrigger || isClose) {
    toggleModal(modal, card);
  }
});

document.addEventListener("keydown", function(event) {
  const modal = document.querySelector(".wrky-modal");
  const card = document.querySelector(".wrky__card");

  const isModal = event.target.closest(".wrky-modal");
  const isTrigger = event.target.closest(".wrky-modal__trigger");
  const isClose = event.target.closest(".wrky-modal__close");

  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal(modal, card);
  }

  if (isTrigger || isClose) {
    toggleModal(modal, card);
  }
});

function closeModal(modal, card) {
  modal.classList.remove("open");
  card.classList.remove("open");
}

function toggleModal(modal, card) {
  modal.classList.toggle("open");
  card.classList.toggle("open");
}



export default Modal;


