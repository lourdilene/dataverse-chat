// import data from "../data/dataset.js";

export const renderPersona = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("#personas-group");
  ul.id = "cards";

  data.forEach((item) => {
    ul.innerHTML += `
      <li class="persona-group">
        <a href="individual-chat?id=${item.id}" class="persona-list__link">
          <img src="${item.imageUrlChat}" alt="image item" style="width: 50px; height: 50px;">
          <div class="persona-description">
            <p>${item.name}</p>
            <p>${item.quote}</p>
          </div>
        </a>
      </li>
    `;
  });

  return ul;
};
