import Home from "./views/Home.js";
import IndividualChat from "./views/chat/IndividualChat.js";
import { renderHeader } from "./components/Header.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";

const routes = {
  "/": Home,
  "/individual-chat": IndividualChat,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const headerElement = document.querySelector("header");

  headerElement.appendChild(renderHeader());

  setRootEl(rootElement);
  onURLChange();
});
