import Home from "./views/Home.js";
import About from "./views/About.js";
import data from "./data/dataset.js";
import { renderFooter } from "./components/Footer.js";
import { renderHeader } from "./components/Header.js";
import { sortData, filterData } from "./lib/dataFunctions.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";
import { renderCardUl } from "./components/CardUl.js";
let processedData = [];

const routes = {
  "/": Home,
  "/about": About,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const headerElement = document.getElementById("header");
  const footerElement = document.getElementById("footer");

  headerElement.appendChild(renderHeader());
  footerElement.appendChild(renderFooter());

  setRootEl(rootElement);

  rootElement.appendChild(Home(data));

  const filterSelectElement = rootElement.querySelector("#filters");
  filterSelectElement.addEventListener("change", function () {
    console.log("Valor selecionado:", filterSelectElement.value);
    processedData = filterData(
      data,
      filterSelectElement.name,
      filterSelectElement.value
    );
    rootElement.querySelector("#cards").innerHTML = "";
    console.log(rootElement.querySelector("#cards"));
    rootElement
      .querySelector("#cards")
      .appendChild(renderCardUl(processedData));
  });
});
