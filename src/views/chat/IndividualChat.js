import data from "../../data/dataset.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";

const IndividualChat = ({ id }) => {
  const persona = data.find((persona) => persona.id === parseInt(id));
  const viewEl = document.createElement("main");
  const personaDescriptionToChat = `Você é um: ${persona.name}.${persona.shortDescription}`;

  viewEl.innerHTML = `
      <div class="persona">
        <img src="${persona.imageUrlChat}" alt="image persona" style="width: 50px; height: 50px;">
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

  const inputChat = viewEl.querySelector("#input__chat");
  const btnEnviar = viewEl.querySelector("#btn__modal");
  const messagesChat = viewEl.querySelector("#messages");

  const conversationHistory = [
    { role: "system", content: `Você é um ${personaDescriptionToChat}` },
  ];

  const updateChat = (message) => {
    messagesChat.innerHTML += `<div class="${message.role}-message">${message.content}</div>`;
    conversationHistory.push(message);
  };

  communicateWithOpenAI(conversationHistory)
    .then((aiResponse) => {
      updateChat({ role: "assistant", content: aiResponse });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Erro ao se comunicar com a OpenAI", error);
      updateChat({
        role: "error",
        content: "Erro ao se comunicar com a OpenAI",
      });
    });

  btnEnviar.addEventListener("click", async () => {
    const sendMessage = inputChat.value;
    updateChat({ role: "user", content: sendMessage });

    inputChat.value = "";

    try {
      const aiResponse = await communicateWithOpenAI(conversationHistory);
      updateChat({ role: "assistant", content: aiResponse });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Erro ao se comunicar com a OpenAI", error);
      updateChat({
        role: "error",
        content: "Erro ao se comunicar com a OpenAI",
      });
    }
  });

  return viewEl;
};

export default IndividualChat;
