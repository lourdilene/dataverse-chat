/* eslint-disable indent */
import Modal from "../Modal/Modal.js";
// console.log(window.location.href);
// const url = window.location.href;
// const page = url.split("?")[0].split("/").pop();
// console.log(page);

export const Header = (data) => {
  const header = document.createElement("header");
  // header.classList.add("header");

  header.innerHTML = `
          <div class="header">
          <div class="header__logo-container">
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
        <div class="header__links--desktop">
          <a href="group-chat" class="header__link">Grupo Chat</a>
          <a id="abrirModalClick" href="#" class="header__link">Chave api</a>
        </div>
        <a id="mobile" href="#" class="header__toggle">
          <i class="fa fa-bars header__toggle-icon"></i>
        </a>
          </div>
          <div id="myLinks" class="header__mobile-links">
          <a href="group-chat" class="header__mobile-link">Grupo Chat</a>
          <a id="abrirModalClickMobile" href="#" class="header__mobile-link">Chave api</a>
        </div>
  `;

  // console.log(header.querySelector("#mobile"));

  // if (page === "individual-chat" || page === "group-chat") {
  //   const mobileToggle = header.querySelector("#mobile");
  //   mobileToggle.classList.remove("header__toggle");
  //   mobileToggle.classList.add("hide");
  // }
  // const arrowLeft = header.querySelector("#arrow-left");
  // console.log(arrowLeft);
  // arrowLeft.classList.add("hide");

  const rootElement = document.getElementById("root");
  const abrirModalClick = header.querySelector("#abrirModalClick");
  const abrirModalClickMobile = header.querySelector("#abrirModalClickMobile");
  const mobileToggle = header.querySelector("#mobile");
  const mobileLinks = header.querySelector("#myLinks");

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
