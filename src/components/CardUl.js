// import data from "../data/dataset.js";

export const renderCardUl = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("container__card");
  ul.id = "cards";

  data.forEach((item) => {
    ul.innerHTML += `
      <li itemscope itemtype="OsMelhoresFilmes" class="container__card">
        <div class="content__card">
          <a href="individual-chat?id=${item.id}" class="link__card">
            <dl itemscope itemtype="#">
              <dt><img src="${item.imageUrlChat}" alt="Imagem do Filme" itemprop="${item.name}" class="image__card" /></dt>
              <dd itemprop="name" class="name__card">${item.name}</dd>
              <dd itemprop="description" class="description__card">${item.description}</dd>
            </dl>
          </a>
        </div>
      </li>
    `;
  });
  return ul;
};
