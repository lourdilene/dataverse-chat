import Home from "./views/Home/Home.js";
import IndividualChat from "./views/Chat/IndividualChat.js";
import GroupChat from "./views/Chat/GroupChat.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";

const routes = {
  "/": Home,
  "/individual-chat": IndividualChat,
  "/group-chat": GroupChat,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");

  setRootEl(rootElement);
  onURLChange();
});
