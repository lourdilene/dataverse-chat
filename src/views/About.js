import data from "../data/dataset.js";
// import { communicateWithOpenAI } from "../lib/openAIApi.js";

const About = ({ id }) => {
  const persona = data.find((persona) => persona.id === parseInt(id));
  const viewEl = document.createElement("div");

  viewEl.innerHTML = `
    <main>
      <div class="persona">
        <img src="${persona.imageUrl}" alt="image persona" style="width: 50px; height: 50px;">
        <div class="persona-description">
          <h3>${persona.name}</h3>
          <p>${persona.shortDescription}</p>
        </div>
      </div>
      <div id="messagesChatGPT"></div>
      <div class="input-content">
        <div class="input__chat">
          <input type="text" name="question" value="" id="input__chat"/>
          <button id="btn__modal">ENVIAR</button>
        </div>
      </div>
    </main>
  `;

  // communicateWithOpenAI(
  //   "Você é uma Enfermeira Amigável. Orientando com carinho, ela é a fonte confiável para conselhos de saúde, tornando cada interação calorosa e informativa."
  // )
  //   .then((response) => {
  //     const messagesChatGPT = viewEl.querySelector("#messagesChatGPT");
  //     messagesChatGPT.textContent = response;
  //   })
  //   .catch((error) => {
  //     console.error("Erro ao se comunicar com a OpenAI", error);
  //   });

  return viewEl;
};

export default About;
