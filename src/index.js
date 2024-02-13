import Home from "./views/Home.js";
import About from "./views/About.js";
import data from "./data/dataset.js";
import { sortData, filterData } from "./lib/dataFunctions.js";
// import Api from "./views/Api.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";
import { renderCardUl } from "./components/CardUl.js";
// import filters from "./lib/filters.js";
// import { renderCardUl } from "./components/CardUl.js";
import { renderFiltros } from "./components/Filtros.js";
let processedData = [];

const routes = {
  "/": Home,
  "/about": About,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  setRootEl(rootElement);

  // const filtrosElement = renderFiltros();
  // rootElement.appendChild(filtrosElement);
  // console.log(rootElement.querySelector("#filters"));

  // onURLChange();
  // rootElement.innerHTML = "";
  // const homeElement = Home(data);
  rootElement.appendChild(Home(data));

  const filterSelectElement = rootElement.querySelector("#filters");
  filterSelectElement.addEventListener("change", function () {
    console.log("Valor selecionado:", filterSelectElement.value);
    processedData = filterData(
      data,
      filterSelectElement.name,
      filterSelectElement.value
    );
    rootElement.innerHTML = "";
    // const updatedHomeElement = Home(processedData);
    // rootElement.replaceChild(updatedHomeElement, homeElement);
    rootElement.appendChild(Home(processedData));
  });
});
