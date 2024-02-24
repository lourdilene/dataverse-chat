/* eslint-disable indent */
import renderModal from "../Modal/Modal.js";

export const renderHeader = (data) => {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `
        <nav class="header__logo">
          <div class="header__logo-container">
            <img class="${data.img.class}"
              src="${data.img.src}"
              alt="${data.img.alt}"/>
            ${data.description.title ? `<p>${data.description.title}</p>` : ``}
            ${
              data.description.subTitle
                ? `<p>${data.description.subTitle}</p>`
                : ``
            }
          </div>
          <div class="header__links--desktop">
            <a href="group-chat" class="header__link">Link painel</a>
            <a id="abrirModalClick" href="#" class="header__link">Chave api</a>
          </div>
          <a id="mobile" href="#" class="header__toggle">
            <i class="fa fa-bars header__toggle-icon"></i>
          </a>
        </nav>
        <div id="myLinks" class="header__mobile-links">
          <a href="group-chat" class="header__mobile-link">Link painel</a>
          <a id="abrirModalClickMobile" href="#" class="header__mobile-link">Chave api</a>
        </div>
  `;

  const rootElement = document.getElementById("root");
  const abrirModalClick = header.querySelector("#abrirModalClick");
  const abrirModalClickMobile = header.querySelector("#abrirModalClickMobile");
  const mobileToggle = header.querySelector("#mobile");
  const mobileLinks = header.querySelector("#myLinks");

  abrirModalClick.addEventListener("click", () => {
    rootElement.appendChild(renderModal());
  });

  abrirModalClickMobile.addEventListener("click", () => {
    rootElement.appendChild(renderModal());
  });

  mobileToggle.addEventListener("click", () => {
    mobileLinks.classList.toggle("header__mobile-links--show");
    rootElement.classList.toggle("mobile-menu-open");
  });

  return header;
};
