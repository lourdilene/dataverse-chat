import data from "../data/dataset.js";

const About = ({ id }) => {
  const persona = data.find((persona) => persona.id === parseInt(id));
  const el = document.createElement("h1");
  el.textContent = persona.name;
  return el;
};

export default About;
