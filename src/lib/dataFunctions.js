export const transformToCamelCase = (param) => {
  const modifiedString = param.replace(/-([a-z])/g, (match, group) =>
    group.toUpperCase()
  );
  return modifiedString;
};

export const sortData = (data, sortBy, sortOrder) => {
  const sortByCamelCase = transformToCamelCase(sortBy);

  const orderedData = data.slice().sort((a, b) => {
    const valueA = a[sortByCamelCase];
    const valueB = b[sortByCamelCase];

    if (sortOrder === "asc") {
      return valueA.localeCompare(valueB);
    }
    return valueB.localeCompare(valueA);
  });

  return orderedData;
};

export const filterData = (data, filterBy, value) => {
  const filterByCamelCase = transformToCamelCase(filterBy);
  const filteredPersonas = data.filter((persona) => {
    return persona.facts[filterByCamelCase] === value;
  });
  return filteredPersonas;
};

// export const computeStats = (data) => {
//   const typeCounts = data.reduce((counts, book) => {
//     const type = transformToCamelCase(book.facts.typeBook);
//     counts[type] = (counts[type] || 0) + 1;
//     return counts;
//   }, {});

//   const result = Object.entries(typeCounts).map(([type, count]) => [
//     capitalizeFirstLetter(type),
//     count,
//   ]);

//   return result;
// };

// const capitalizeFirstLetter = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };
