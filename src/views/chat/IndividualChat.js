import data from "../../data/dataset.js";
import { Header } from "../../components/Header/Header.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";

const bodyElement = document.querySelector("body");
bodyElement.classList.add("chat-page");

const IndividualChat = ({ id }) => {
  const persona = data.find((persona) => persona.id === parseInt(id));
  const viewEl = document.createElement("main");
  viewEl.classList.add("chat");
  const personaDescriptionToChat = `Você é um: ${persona.name}.${persona.shortDescription}`;

  const headerData = {
    img: {
      class: "image__persona",
      src: `${persona.imageUrlChat}`,
      alt: "Image persona",
    },
    description: {
      title: `${persona.name}`,
      subTitle: `${persona.quote}`,
    },
  };

  viewEl.innerHTML = `
    <div class="chat-content individual__chat-content">
      <div id="chat">
        <div id="messages"></div>
        <div id="messageError" class="error-message hide"></div>
      </div>
      <div class="input-content">
      <div id="typing"></div>
      <div class="input__chat">
        <input type="text" name="question" value="" id="input__chat" class="input-field"/>
        <button id="btn__modal" class="button color-green">Enviar</button>
      </div>
      </div>
    </div>
  `;
  const parentElement = document.getElementById("root");

  parentElement.insertAdjacentElement("beforebegin", Header(headerData));

  const inputChat = viewEl.querySelector("#input__chat");
  const btnEnviar = viewEl.querySelector("#btn__modal");
  const messagesChat = viewEl.querySelector("#messages");
  const typing = viewEl.querySelector("#typing");
  const messageError = viewEl.querySelector("#messageError");

  const conversationHistory = [
    { role: "system", content: `Você é um ${personaDescriptionToChat}` },
  ];

  const updateChat = (message) => {
    messagesChat.innerHTML += `<div class="${message.role}-message">${message.content}</div>`;
    conversationHistory.push(message);
  };

  (async () => {
    try {
      typing.innerHTML = `${persona.name} está digitando...`;
      const response = await communicateWithOpenAI(conversationHistory);
      updateChat({ role: "assistant", content: response });
      typing.innerHTML = "";
      return response;
    } catch (error) {
      typing.innerHTML = "";
      messageError.classList.add("show");
      messageError.innerHTML = error.message;
      console.error("Erro ao se comunicar com a OpenAI", error);
    }
  })();

  btnEnviar.addEventListener("click", async () => {
    const sendMessage = inputChat.value;
    updateChat({ role: "user", content: sendMessage });
    inputChat.value = "";

    typing.innerHTML = `${persona.name} está digitando...`;

    try {
      const aiResponse = await communicateWithOpenAI(conversationHistory);
      updateChat({ role: "assistant", content: aiResponse });
      typing.innerHTML = "";
    } catch (error) {
      typing.innerHTML = "";
      messageError.classList.add("show");
      messageError.innerHTML = error.message;
      console.error("Erro ao se comunicar com a OpenAI", error);
    }
  });

  return viewEl;
};

export default IndividualChat;
