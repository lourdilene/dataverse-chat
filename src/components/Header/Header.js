/* eslint-disable indent */
import Modal from "../Modal/Modal.js";

const url = window.location.href;
const cleanUrl = url.split("#")[0];
const chatPage = cleanUrl.split("?")[0].split("/").pop();

export const Header = (data) => {
  const header = document.createElement("header");

  header.innerHTML = `
          <div class="header">
          <div id="headerContainer" class="header__logo-container justify-content-center">
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
          </div>
          <a id="mobile" href="#" class="header__toggle">
          <i class="fas fa-ellipsis-v header__toggle-icon"></i>
        </a>
        <div class="header__links--desktop">
        ${chatPage ? `<a href="/" class="header__link">Home</a>` : ``}
          ${
            chatPage === "group-chat"
              ? ``
              : `<a href="group-chat" class="header__link">Grupo</a>`
          }
          <a id="abrirModalClick" href="#" class="header__link">API</a>
        </div>
          </div>
          <div id="myLinks" class="header__mobile-links">
          ${chatPage ? `<a href="/" class="header__mobile-link">Home</a>` : ``}
          <a href="group-chat" class="header__mobile-link">Grupo</a>
          <a id="abrirModalClickMobile" href="#" class="header__mobile-link">API</a>
        </div>
  `;

  const rootElement = document.getElementById("root");
  const abrirModalClick = header.querySelector("#abrirModalClick");
  const abrirModalClickMobile = header.querySelector("#abrirModalClickMobile");
  const mobileToggle = header.querySelector("#mobile");
  const mobileLinks = header.querySelector("#myLinks");

  if (!chatPage) {
    const headerContainer = header.querySelector("#headerContainer");
    headerContainer.classList.add("justify-content-left");
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
