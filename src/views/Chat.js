import { renderFooter } from "../components/Footer";
import { renderHeader } from "../components/Header";


const Chat = () => {
  const headerElement = renderHeader();
  const footerElement = renderFooter();
  //COMPONENTE DE HEADER
  viewEl.appendChild(headerElement);
  // COMPONENTE DE FOOTER
  viewEl.appendChild(footerElement);
  return elementoChat;
}

export default Chat;
