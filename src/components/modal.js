

// Cache modal-related elements
const modal = document.querySelector(".wrky-modal__overlay");
const card = document.querySelector(".wrky__card");
const toggler = document.querySelector(".wrky-modal__trigger");

document.addEventListener("click", function (event) {
  const isModal = event.target.closest(".wrky-modal__overlay");
  const isTrigger = event.target.closest(".wrky-modal__trigger");
  const isClose = event.target.closest(".wrky-modal__close");


  if (isTrigger || isClose) {
    toggleModal();
  } else if (!isModal && modal.classList.contains("open")) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("open");
  card.classList.remove("open");
  toggler.classList.remove("hidden");
}

function toggleModal() {
  modal.classList.toggle("open");
  card.classList.toggle("open");
  toggler.classList.toggle("hidden");
}



export default Modal;


