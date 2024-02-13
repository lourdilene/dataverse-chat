// import dataset from "../data/dataset.js";

export const renderFiltros = () => {
  const filtros = document.createElement("div");
  filtros.classList.add("section-filters");

  filtros.innerHTML = `
  <label for="filters" id="search-filters" class="filters">Filtrar por:</label>
  <select id="filters" name="pais-nascimento-persona" data-testid="select-filter">
    <option value="Todos" hidden disabled></option>
    <option value="brasil">Brasil</option>
    <option value="italia">Itália</option>
    <option value="argentina">Argentina</option>
    <option value="eua">EUA</option>
    </select>
    <label for="order">Ordenar por:</label>
      <select id="order" name="sort-order" data-testid="select-sort">
        <option value="todos" hidden disabled></option>
        <option value="desc">A-Z</option>
        <option value="asc">Z-A</option>
    </select>

    <button id="btn-limpar" data-testid="button-clear">
      Limpar Filtros
    </button>
  `;
  return filtros;
};
