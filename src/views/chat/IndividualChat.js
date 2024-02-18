import data from "../../data/dataset.js";
// import { communicateWithOpenAI } from "../lib/openAIApi.js";

const IndividualChat = ({ id }) => {
  const persona = data.find((persona) => persona.id === parseInt(id));
  const viewEl = document.createElement("main");
  // const personaDescriptionToChat = `Você é um: ${persona.name}.${persona.shortDescription}`;

  viewEl.innerHTML = `
      <div class="persona">
        <img src="${persona.imageUrl}" alt="image persona" style="width: 50px; height: 50px;">
        <div class="persona-description">
          <h3>${persona.name}</h3>
          <p>${persona.shortDescription}</p>
        </div>
      </div>
      <div id="chat">
        <div id="messages"></div>
      </div>
      <div class="input-content">
        <div class="input__chat">
          <input type="text" name="question" value="" id="input__chat"/>
          <button id="btn__modal">ENVIAR</button>
        </div>
      </div>
  `;

  // const inputChat = viewEl.querySelector("#input__chat");
  // const btnEnviar = viewEl.querySelector("#btn__modal");
  // const messagesChat = viewEl.querySelector("#messages");

  // communicateWithOpenAI(personaDescriptionToChat)
  //   .then((aiResponse) => {
  //     messagesChat.innerHTML += `<div class="ai-message">${aiResponse}</div>`;
  //   })
  //   .catch((error) => {
  //     console.error("Erro ao se comunicar com a OpenAI", error);
  //     messagesChat.innerHTML += `<div class="error-message">Erro ao se comunicar com a OpenAI</div>`;
  //   });

  // btnEnviar.addEventListener("click", async () => {
  //   const sendMessage = inputChat.value;

  //   inputChat.value = "";

  //   messagesChat.innerHTML += `<div class="user-message">${sendMessage}</div>`;

  //   try {
  //     const response = await communicateWithOpenAI(sendMessage);
  //     messagesChat.innerHTML += `<div class="ai-message">${response}</div>`;
  //   } catch (error) {
  //     console.error("Erro ao se comunicar com a OpenAI", error);
  //     messagesChat.innerHTML += `<div class="error-message">Erro ao se comunicar com a OpenAI</div>`;
  //   }
  // });

  return viewEl;
};

export default IndividualChat;
