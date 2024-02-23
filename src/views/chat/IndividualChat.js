import data from "../../data/dataset.js";
import { renderHeader } from "../../components/Header/Header.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";

const IndividualChat = ({ id }) => {
  const persona = data.find((persona) => persona.id === parseInt(id));
  const viewEl = document.createElement("main");
  viewEl.classList.add("chat");
  const personaDescriptionToChat = `Você é um: ${persona.name}.${persona.shortDescription}`;

  const header = {
    img: {
      class: "image__persona",
      src: `${persona.imageUrlChat}`,
      alt: "Image persona",
    },
    description: {
      title: `${persona.name}`,
      subTitle: "",
    },
  };

  viewEl.innerHTML = `
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

  const parentElement = document.getElementById("root");

  const headerElement = document.createElement("header");
  headerElement.appendChild(renderHeader(header));
  parentElement.insertAdjacentElement("beforebegin", headerElement);

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

  // const rootElement = document.getElementById("root");
  // const abrirModalClick = viewEl.querySelector("#abrirModalClick");
  // const abrirModalClickMobile = viewEl.querySelector("#abrirModalClickMobile");
  // const mobileToggle = viewEl.querySelector("#mobile");
  // const mobileLinks = viewEl.querySelector("#myLinks");

  // mobileToggle.addEventListener("click", () => {
  //   mobileLinks.classList.toggle("show");
  //   rootElement.classList.toggle("mobile-menu-open");
  // });

  return viewEl;
};

export default IndividualChat;
