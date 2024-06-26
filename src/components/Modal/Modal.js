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
      <div id="modal__message"></div>
        <div class="modal__input-container">
          <input type="text" name="question" value="" id="modal__input" class="input-field"/>
          <button id="modal__button" value="save" class="button color-green">Salvar</button>
        </div>
    </div>
  </div>
  `;

  const modalMessage = modal.querySelector("#modal__message");
  const closeModalButton = modal.querySelector("#modal__close");
  closeModalButton.addEventListener("click", () => {
    const modalContainer = document.querySelector("#modal__container");
    modalContainer.remove();
  });

  const inputModal = modal.querySelector("#modal__input");
  const apiKey = getApiKey();

  if (apiKey) {
    const firstSix = apiKey.slice(0, 6);
    const lastSix = apiKey.slice(-6);
    const middleMaskLength = apiKey.length - firstSix.length - lastSix.length;
    const middleMasked = "*".repeat(middleMaskLength);
    inputModal.value = `${firstSix}${middleMasked}${lastSix}`;

    const modalButton = modal.querySelector("#modal__button");
    if (apiKey !== "") {
      modalButton.value = "delete";
      modalButton.textContent = "Excluir";
      modalButton.classList.remove("color-green");
      modalButton.classList.add("color-red");
    }

    modalButton.addEventListener("click", () => {
      if (modalButton.value === "save") {
        const newApiKey = inputModal.value;
        const oldApiKey = getApiKey();
        setApiKey(newApiKey);
        if (newApiKey !== oldApiKey) {
          modalMessage.innerHTML = "Chave salva com sucesso!";
          modalMessage.classList.add("color-green-text");
          modalButton.value = "delete";
          modalButton.textContent = "Excluir";
          modalButton.classList.remove("color-green");
          modalButton.classList.add("color-red");

          const apiKey = getApiKey();
          if (apiKey) {
            const firstSix = apiKey.slice(0, 6);
            const lastSix = apiKey.slice(-6);
            const middleMaskLength =
              apiKey.length - firstSix.length - lastSix.length;
            const middleMasked = "*".repeat(middleMaskLength);
            inputModal.readOnly = true;
            inputModal.value = `${firstSix}${middleMasked}${lastSix}`;
          }
        }
      } else if (modalButton.value === "delete") {
        setApiKey("");
        modalButton.value = "save";
        modalButton.textContent = "Salvar";
        modalButton.classList.remove("color-red");
        modalButton.classList.add("color-green");
        inputModal.readOnly = false;
        modalMessage.innerHTML = "Chave removida com sucesso!";
        inputModal.value = "";
      }
    });
  } else {
    // When apiKey is empty
    inputModal.value = "";
    const modalButton = modal.querySelector("#modal__button");

    modalButton.addEventListener("click", () => {
      if (modalButton.value === "save") {
        const newApiKey = inputModal.value;
        setApiKey(newApiKey);
        if (newApiKey) {
          modalMessage.innerHTML = "Chave salva com sucesso!";
          modalMessage.classList.add("color-green-text");
          modalButton.value = "delete";
          modalButton.textContent = "Excluir";
          modalButton.classList.remove("color-green");
          modalButton.classList.add("color-red");

          const apiKey = getApiKey();
          if (apiKey) {
            const firstSix = apiKey.slice(0, 6);
            const lastSix = apiKey.slice(-6);
            const middleMaskLength =
              apiKey.length - firstSix.length - lastSix.length;
            const middleMasked = "*".repeat(middleMaskLength);
            inputModal.readOnly = true;
            inputModal.value = `${firstSix}${middleMasked}${lastSix}`;
          }
        }
      }
    });
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      const modalContainer = document.querySelector("#modal__container");
      modalContainer.remove();
    }
  });

  return modal;
};

export default Modal;
