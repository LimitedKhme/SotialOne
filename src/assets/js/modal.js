const modalButtons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".modal_close");
const modals = document.querySelectorAll(".modal");
const burger = document.getElementById("burger")

modalButtons.forEach((item) => {
  item.addEventListener("click", (event) => {
    const modalId = item.dataset.modal;
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector(".modal_content");

    modal.classList.add("show");
    document.body.classList.add("no-scroll");

    setTimeout(() => {
      modalContent.style.transform = "none";
      modalContent.style.opacity = "1";
    }, 1);
  });
});

closeButtons.forEach((item) => {
  item.addEventListener("click", (event) => {
    const modal = item.closest(".modal");
    const modalContent = modal.querySelector(".modal_content");

    modalContent.removeAttribute("style");

    setTimeout(() => {
      modal.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }, 200);
  });
});

modals.forEach((item) => {
  item.addEventListener("click", (event) => {
    const modal = item.querySelector(".modal");
    const modalContent = item.querySelector(".modal_content");
    if (event.target.classList.contains("modal")) {
      modalContent.removeAttribute("style");

      setTimeout(() => {
        item.classList.remove("show");
        document.body.classList.remove("no-scroll");
      }, 200);
    }
  });
});


burger.addEventListener("click", (event) => {
  document.body.classList.toggle("show-sidebar");
});
  