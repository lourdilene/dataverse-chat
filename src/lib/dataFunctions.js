export const transformToCamelCase = (param) => {
  const modifiedString = param.replace(/-([a-z])/g, (match, group) =>
    group.toUpperCase()
  );
  return modifiedString;
};

export const sortData = (data, sortBy, sortOrder) => {
  const sortByCamelCase = transformToCamelCase(sortBy);

  const OrderedBooks = data.slice().sort((a, b) => {
    if (sortOrder === "asc") {
      return (
        parseInt(a.facts[sortByCamelCase]) - parseInt(b.facts[sortByCamelCase])
      );
    }
    return (
      parseInt(b.facts[sortByCamelCase]) - parseInt(a.facts[sortByCamelCase])
    );
  });
  return OrderedBooks;
};

export const filterData = (data, filterBy, value) => {
  const filterByCamelCase = transformToCamelCase(filterBy);
  const filteredBooks = data.filter((book) => {
    return book.facts[filterByCamelCase] === value;
  });
  return filteredBooks;
};

export const computeStats = (data) => {
  const typeCounts = data.reduce((counts, book) => {
    const type = transformToCamelCase(book.facts.typeBook);
    counts[type] = (counts[type] || 0) + 1;
    return counts;
  }, {});

  const result = Object.entries(typeCounts).map(([type, count]) => [
    capitalizeFirstLetter(type),
    count,
  ]);

  return result;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
