/* eslint-disable indent */
import Modal from "../Modal/Modal.js";

const url = window.location.href;
const chatPage = url.split("?")[0].split("/").pop();

export const Header = (data = {}) => {
  const header = document.createElement("header");

  // const data = {
  //   img: {
  //     class: "image__logo",
  //     src: "./images/logoDesktop.png",
  //     alt: "Logo DataverseChat",
  //   },
  //   description: "",
  // };

  header.innerHTML = `
          <div class="header">
          <a href="/" class="header__link" id="logo">Home</a>
          <div id="headerContainer" class="header__logo-container">
          <img class="${data.img.class}" src="${data.img.src}" alt="${
    data.img.alt
  }"/>
          <div class="header__text">
          ${data.description.title ? `<p>${data.description.title}</p>` : ``}
          ${
            data.description.subTitle
              ? `<p>${data.description.subTitle}</p>`
              : ``
          }
          </div>
          <a id="mobile" href="#" class="header__toggle">
          <i class="fas fa-ellipsis-v header__toggle-icon"></i>
        </a>
        </div>
        <div class="header__links--desktop">
          ${
            chatPage === "group-chat"
              ? ``
              : `<a href="group-chat" class="header__link">Grupo Chat</a>`
          }
          <a id="abrirModalClick" href="#" class="header__link">Chave api</a>
        </div>
          </div>
          <div id="myLinks" class="header__mobile-links">
          <a href="group-chat" class="header__mobile-link">Grupo Chat</a>
          <a id="abrirModalClickMobile" href="#" class="header__mobile-link">Chave api</a>
        </div>
  `;

  const rootElement = document.getElementById("root");
  const abrirModalClick = header.querySelector("#abrirModalClick");
  const abrirModalClickMobile = header.querySelector("#abrirModalClickMobile");
  const mobileToggle = header.querySelector("#mobile");
  const mobileLinks = header.querySelector("#myLinks");

  if (chatPage === "group-chat" || chatPage === "individual-chat") {
    const headerContainer = header.querySelector("#headerContainer");
    headerContainer.classList.add("justify-content-center");
  }

  abrirModalClick.addEventListener("click", () => {
    rootElement.appendChild(Modal());
  });

  abrirModalClickMobile.addEventListener("click", () => {
    rootElement.appendChild(Modal());
  });

  mobileToggle.addEventListener("click", () => {
    mobileLinks.classList.toggle("header__mobile-links--show");
    rootElement.classList.toggle("mobile-menu-open");
  });

  return header;
};
