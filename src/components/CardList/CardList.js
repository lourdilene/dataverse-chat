// import data from "../data/dataset.js";

export const renderCardList = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("card-list");
  ul.id = "cards";

  data.forEach((item) => {
    ul.innerHTML += `
      <li itemscope itemtype="OsMelhoresFilmes" class="card-list__item">
        <div class="card-list__content">
          <a href="individual-chat?id=${item.id}" class="card-list__link">
            <dl itemscope itemtype="#">
              <dt><img src="${item.imageUrl}" alt="Imagem do Filme" itemprop="${item.name}" class="card-list__image" /></dt>
              <dd itemprop="name" class="card-list__name">${item.name}</dd>
              <dd itemprop="description" class="card-list__description">${item.description}</dd>
            </dl>
          </a>
        </div>
      </li>
    `;
  });
  return ul;
};
