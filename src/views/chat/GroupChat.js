// GroupChat.js
import data from "../../data/dataset.js";
import { renderHeader } from "../../components/Header/Header.js";
import { renderPersona } from "../../components/Persona.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";

const headerData = {
  img: {
    class: "image__persona",
    src: "../../images/ccm.png",
    alt: "Image persona",
  },
  description: {
    title: "Comunidade Criativa",
    subTitle: "24 membros, 24 online",
  },
};

const GroupChat = () => {
  const viewEl = document.createElement("main");
  viewEl.classList.add("chat");

  const personas = data;

  viewEl.innerHTML = `
      <div class="mobile-content">
        <div id="chat">
          <div id="messages"></div>
        </div>
        <div class="input-content">
          <div id="typing"></div>
          <div class="input__chat">
            <input type="text" name="question" value="" id="input__chat"/>
            <button id="btn__modal">ENVIAR</button>
          </div>
        </div>
      </div>
      <div class="desktop-content">
        <div id="personas-group"></div>
      </div>
  `;

  const parentElement = document.getElementById("root");

  const headerElement = document.createElement("header");
  headerElement.appendChild(renderHeader(headerData));
  parentElement.insertAdjacentElement("beforebegin", headerElement);

  const inputChat = viewEl.querySelector("#input__chat");
  const btnEnviar = viewEl.querySelector("#btn__modal");
  const messagesChat = viewEl.querySelector("#messages");
  const typing = viewEl.querySelector("#typing");

  const conversationHistories = [];

  personas.forEach((persona) => {
    conversationHistories.push([
      {
        role: "system",
        content: `Aja como se fosse um: ${persona.name}`,
      },
    ]);
  });

  const addMessageToPersona = (message, personaIndex) => {
    conversationHistories[personaIndex].push(message);
  };

  const showMessageByPersona = (message, personaIndex) => {
    messagesChat.innerHTML += `<div class="${message.role}-message">${personas[personaIndex].name}: ${message.content}</div>`;
  };

  const showMessageByUser = (message) => {
    messagesChat.innerHTML += `<div class="${message.role}-message">${message.content}</div>`;
  };

  (async () => {
    try {
      const aiResponses = await Promise.all(
        personas.map(async (persona) => {
          const response = await communicateWithOpenAI(
            conversationHistories[persona.id - 1]
          );
          typing.innerHTML = `${persona.name} está digitando...`;
          return response;
        })
      );

      aiResponses.forEach((aiResponse, index) => {
        typing.innerHTML = "";
        const message = { role: "assistant", content: aiResponse };
        addMessageToPersona(message, index);
        showMessageByPersona(message, index);
      });
    } catch (error) {
      console.error("Erro ao se comunicar com a OpenAI", error);
    }
  })();

  // Promise.all(
  //   personas.map(async (persona) => {
  //     const response = await communicateWithOpenAI(
  //       conversationHistories[persona.id - 1]
  //     );
  //     typing.innerHTML = `${persona.name} está digitando...`;
  //     return response;
  //   })
  // )
  //   .then((responses) => {
  //     responses.forEach((response, index) => {
  //       typing.innerHTML = "";
  //       const message = {
  //         role: "assistant",
  //         content: response,
  //       };
  //       addMessageToPersona(message, index);
  //       showMessageByPersona(message, index);
  //     });
  //   })
  //   .catch((error) => {
  //     console.error("Erro ao se comunicar com a OpenAI", error);
  //   });

  btnEnviar.addEventListener("click", async () => {
    const sendMessage = inputChat.value;
    const messageInput = { role: "user", content: sendMessage };
    personas.forEach((persona) => {
      addMessageToPersona(messageInput, persona.id - 1);
    });
    showMessageByUser(messageInput);

    inputChat.value = "";

    try {
      const aiResponses = await Promise.all(
        personas.map(async (persona) => {
          const response = await communicateWithOpenAI(
            conversationHistories[persona.id - 1]
          );
          typing.innerHTML = `${persona.name} está digitando...`;
          return response;
        })
      );

      aiResponses.forEach((aiResponse, index) => {
        typing.innerHTML = "";
        const message = { role: "assistant", content: aiResponse };
        addMessageToPersona(message, index);
        showMessageByPersona(message, index);
      });
    } catch (error) {
      console.error("Erro ao se comunicar com a OpenAI", error);
    }
  });

  const cardElement = renderPersona(data);
  viewEl.querySelector("#personas-group").appendChild(cardElement);

  return viewEl;
};

export default GroupChat;
