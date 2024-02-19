import data from "../../data/dataset.js";
import { communicateWithOpenAI } from "../../lib/openAIApi.js";

const GroupChat = () => {
  const viewEl = document.createElement("main");

  viewEl.innerHTML = `
    <div class="mobile-content">
      <div class="persona">
      <img src="" alt="image persona" style="width: 50px; height: 50px;">
      <div class="persona-description">
        <h3>Group Chat</h3>
        <p></p>
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
    </div>

    <div class="desktop-content">

    </div>
  `;

  const personas = data;

  const messages = personas.map((persona) => {
    return {
      role: "system",
      // name: persona.name,
      content: `Você é um: ${persona.name}. ${persona.shortDescription}`,
    };
  });

  Promise.all(
    messages.map((message) => {
      const newMessage = [{ role: message.role, content: message.content }];
      return communicateWithOpenAI(newMessage);
    })
  )
    .then((responses) => {
      responses.forEach((response, index) => {
        // eslint-disable-next-line no-console
        console.log(`Resposta para ${personas[index].name}: ${response}`);
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Erro ao se comunicar com a OpenAI", error);
    });

  return viewEl;
};

export default GroupChat;
