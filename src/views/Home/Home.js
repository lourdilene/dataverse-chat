import { renderFooter } from "../../components/Footer/Footer.js";
import { renderHeader } from "../../components/Header/Header.js";
import { renderCardList } from "../../components/CardList/CardList.js";
import { sortData, filterData } from "../../lib/dataFunctions.js";
import data from "../../data/dataset.js";

const headerContent = {
  img: {
    class: "image__logo",
    src: "./images/logoDesktop.png",
    alt: "Logo DataverseChat",
  },
  description: "",
};

let processedData = [];
let sortedData = [];

const Home = () => {
  const mainElement = document.createElement("main");
  mainElement.classList.add("home");

  mainElement.innerHTML = `
    <div class="container__h1">
      <h1>Comunidade Criativa Multifacetada</h1>
    </div>
    <h2>Uma plataforma que reúne o Artista Expressivo, o Músico Melódico, o Observador de Aves, o Fashionista Elegante e outros. Os usuários podem compartilhar suas criações artísticas, músicas, fotos de aves, dicas de moda, receitas inspiradas na natureza e participar de desafios criativos. Um espaço onde diferentes formas de expressão se encontram.</h2>
    <section class="section-filters">
      <div class="filter">
        <label for="filters" class="filter__label">Filtrar por:</label>
        <select id="filters" name="pais-nascimento-persona" class="filter__select">
          <option value="Todos" hidden disabled></option>
          <option value="brasil">Brasil</option>
          <option value="italia">Itália</option>
          <option value="argentina">Argentina</option>
          <option value="eua">EUA</option>
        </select>
      </div>
      <div class="filter">
        <label for="order" class="filter__label">Ordenar por:</label>
        <select id="order" name="name" class="filter__select">
          <option value="todos" hidden disabled></option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
      <button id="btn-limpar" class="btn-limpar">
        Limpar Filtros
      </button>
    </section>
    <div id="cards" class="cards"></div>
  `;

  const rootElement = document.getElementById("root");

  const headerElement = document.createElement("header");
  headerElement.appendChild(renderHeader(headerContent));
  rootElement.insertAdjacentElement("beforebegin", headerElement);

  const footerElement = document.createElement("footer");
  footerElement.appendChild(renderFooter());
  rootElement.insertAdjacentElement("afterend", footerElement);

  const cardsContainer = mainElement.querySelector("#cards");
  cardsContainer.appendChild(renderCardList(data));

  const filterSelectElement = mainElement.querySelector("#filters");
  const orderSelectElement = mainElement.querySelector("#order");
  const clearButtonElement = mainElement.querySelector("#btn-limpar");

  const applyFilter = () => {
    processedData = filterData(
      data,
      filterSelectElement.name,
      filterSelectElement.value
    );

    sortedData = sortData(
      processedData,
      orderSelectElement.name,
      orderSelectElement.value
    );

    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(renderCardList(sortedData));
  };

  filterSelectElement.addEventListener("change", applyFilter);
  orderSelectElement.addEventListener("change", applyFilter);

  clearButtonElement.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    filterSelectElement.value = "Todos";
    orderSelectElement.value = "todos";
    cardsContainer.appendChild(renderCardList(data));
  });

  return mainElement;
};

export default Home;