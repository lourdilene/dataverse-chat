export const Card = (item) => {
  const li = document.createElement("li");
  li.classList.add("card-list__item");

  li.innerHTML = `
        <div class="card-list__content">
          <a href="individual-chat?id=${item.id}" class="card-list__link">
            <dl itemscope itemtype="#">
              <dt><img src="${item.imageUrl}" alt="Imagem do Filme" itemprop="${item.name}" class="card-list__image" /></dt>
              <dd itemprop="name" class="card-list__name">${item.name}</dd>
              <dd itemprop="description" class="card-list__description">${item.description}</dd>
            </dl>
          </a>
        </div>
    `;

  console.log(li);

  return li;
};
