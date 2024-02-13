import {
  sortData,
  transformToCamelCase,
  filterData,
  computeStats,
} from "../lib/dataFunctions.js";

import { data as fakeData } from '../data/dataset.js';


describe("transformToCamelCase", () => {
  it("transforms kebab-case to camelCase", () => {
    const inputString = "some-example-string";
    const expectedResult = "someExampleString";
    const result = transformToCamelCase(inputString);
    expect(result).toEqual(expectedResult);
  });

  it("transforms another-example-string to anotherExampleString", () => {
    const inputString = "another-example-string";
    const expectedResult = "anotherExampleString";
    const result = transformToCamelCase(inputString);
    expect(result).toEqual(expectedResult);
  });
});

describe("sortData", () => {
  const sortBy = "pages-book";
  const getPagesBook = (books) => books.map((book) => book.facts.pagesBook);

  it("Should return a list sorted in ascending order", () => {
    const sortedData = sortData(fakeData, sortBy, "asc");
    const sortedByPagesBook = getPagesBook(sortedData);
    const expectedOrder = ["234", "240", "288", "301", "336"];
    expect(sortedByPagesBook).toEqual(expectedOrder);
  });

  it("Should return a list sorted in descending order", () => {
    const sortedData = sortData(fakeData, sortBy, "desc");
    const sortedByPagesBook = getPagesBook(sortedData);
    const expectedOrder = ["336", "301", "288", "240", "234"];
    expect(sortedByPagesBook).toEqual(expectedOrder);
  });
});

describe("filterData", () => {
  const filterBy = "type-book";
  const expectedValue = ["movie"];
  const getTypeBooks = (books) => books.map((book) => book.facts.typeBook);

  it("Should return a list filted", () => {
    const filtedData = filterData(fakeData, filterBy, "movie");
    const filtedByTypeBook = getTypeBooks(filtedData);
    expect(filtedByTypeBook).toEqual(expectedValue);
  });
});

describe("computeStats", () => {
  const expectedValue = [
    ["Theater", 1],
    ["Novel", 3],
    ["Movie", 1],
  ];
  const resultValues = computeStats(fakeData);
  expect(resultValues).toEqual(expectedValue);
});
