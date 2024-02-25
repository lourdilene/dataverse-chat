import Home from "./views/Home/Home.js";
import PageNotFound from "./views/Error/404/PageNotFound.js";
import IndividualChat from "./views/Chat/IndividualChat.js";
import GroupChat from "./views/chat/GroupChat.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";

const routes = {
  "/": Home,
  "/individual-chat": IndividualChat,
  "/group-chat": GroupChat,
  "/page/404": PageNotFound,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  // const headerElement = document.getElementById("header");
  // const footerElement = document.getElementById("footer");

  // headerElement.appendChild(Header());

  setRootEl(rootElement);
  onURLChange();
});
