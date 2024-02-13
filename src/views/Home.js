import { renderFooter } from "../components/Footer.js";
import { renderHeader } from "../components/Header.js";
import { renderFiltros } from "../components/Filtros.js";
import { renderCardUl } from "../components/CardUl.js";
// import data from "../data/dataset.js";
// import { renderModal } from "../components/Modal.js";

const Home = (data) => {
  console.log(data, "teste");
  const viewEl = document.createElement("div");
  const headerElement = renderHeader();
  const filtrosElement = renderFiltros();

  // const cardElement = document.createElement("div");
  // cardElement.id = "cards";
  const cardElement = renderCardUl(data);
  const footerElement = renderFooter();

  const mainElement = document.createElement("main");

  const sectionFiltros = document.createElement("section");
  const h2 = document.createElement("h2");

  //COMPONENT DE HEADER
  viewEl.appendChild(headerElement);

  //SECTIONS DE FILTROS
  sectionFiltros.appendChild(filtrosElement);
  mainElement.appendChild(sectionFiltros);

  //ELEMENTO DE H2
  h2.textContent =
    "Uma plataforma que reúne o Artista Expressivo, o Músico Melódico, o Observador de Aves, o Fashionista Elegante e outros. Os usuários podem compartilhar suas criações artísticas, músicas, fotos de aves, dicas de moda, receitas inspiradas na natureza e participar de desafios criativos. Um espaço onde diferentes formas de expressão se encontram. ";
  mainElement.appendChild(h2);

  //ESTRUTURA DE MAIN E CARDS
  mainElement.appendChild(cardElement);
  viewEl.appendChild(mainElement);

  // COMPONENT DE FOOTER
  viewEl.appendChild(footerElement);

  return viewEl;
};

export default Home;
