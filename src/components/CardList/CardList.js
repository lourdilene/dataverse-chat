import { Card } from "../Card/Card.js";

export const renderCardList = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("card-list");
  ul.id = "cards";

  data.forEach((item) => {
    const card = Card(item);
    ul.appendChild(card);
  });

  return ul;
};
