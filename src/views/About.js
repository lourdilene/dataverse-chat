import data from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

const About = ({ id }) => {
  const persona = data.find((persona) => persona.id === parseInt(id));
  communicateWithOpenAI("teste");

  const viewEl = document.createElement("div");

  viewEl.innerHTML = `
    <main>
      <img src="${persona.imageUrl}" alt="image persona" style="width: 50px; height: 50px;">
      <h3>${persona.name}</h3>
      <p>${persona.shortDescription}</p>
      <input name="question">
      <button name="save">Save</button>
    </main>
  `;
  return viewEl;
};

export default About;
