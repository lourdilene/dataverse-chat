import { getApiKey, setApiKey } from "../../lib/apiKey.js";

const Modal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal__content">
      <h2 class="modal__title">API KEY ChatGPT</h2>
      <h3 class="modal__subtitle">Insira uma Chave API</h3>
      <div class="modal__input-container">
        <input type="text" id="input__modal" class="modal__input" />
        <button id="btn__modal" class="modal__button">SALVAR</button>
      </div>
    </div>
    <a id="close__modal" class="modal__close-button">X</a>
  `;

  const closeModalButton = modal.querySelector("#close__modal");
  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const inputModal = modal.querySelector("#input__modal");
  inputModal.value = getApiKey();

  const saveButton = modal.querySelector("#btn__modal");
  saveButton.addEventListener("click", () => {
    const newApiKey = inputModal.value;
    setApiKey(newApiKey);
  });

  return modal;
};

export default Modal;
