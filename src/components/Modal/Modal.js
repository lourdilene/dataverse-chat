import { getApiKey, setApiKey } from "../../lib/apiKey.js";

const Modal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal__container");
  modal.id = "modal__container";

  modal.innerHTML = `
  <div id="modal">
  <a id="modal__close">X</a>
    <div class="modal__content">
      <p>API KEY ChatGPT</p>
        <div class="modal__input-container">
          <input type="text" name="question" value="" id="modal__input" class="input-field"/>
          <button id="modal__button" class="green-button">Salvar</button>
        </div>
    </div>
  </div>
  `;

  const closeModalButton = modal.querySelector("#modal__close");
  closeModalButton.addEventListener("click", () => {
    // modal.style.display = "none";
    const modalContainer = document.querySelector("#modal__container");
    modalContainer.remove();
    // console.log(modalContainer);
  });

  const inputModal = modal.querySelector("#modal__input");
  inputModal.value = getApiKey();

  const saveButton = modal.querySelector("#modal__button");
  saveButton.addEventListener("click", () => {
    const newApiKey = inputModal.value;
    setApiKey(newApiKey);
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      const modalContainer = document.querySelector("#modal__container");
      modalContainer.remove();
    }
  });

  return modal;
};

export default Modal;
