import { test } from "uvu";
import * as assert from "uvu/assert";

import { groupBy, groupByToMap } from "../src";

test("GroupBy", () => {
  const values = [
    { id: "1", category: "a" },
    { id: "2", category: "b" },
    { id: "3", category: "b" },
    { id: "4", category: "a" },
  ];
  const expected = Object.assign(Object.create(null), {
    a: [
      { id: "1", category: "a" },
      { id: "4", category: "a" },
    ],
    b: [
      { id: "2", category: "b" },
      { id: "3", category: "b" },
    ],
  });
  assert.equal(
    groupBy(values, (value) => value.category),
    expected
  );
});

test("GroupByToMap", () => {
  const values = [
    { id: "1", category: "a" },
    { id: "2", category: "b" },
    { id: "3", category: "b" },
    { id: "4", category: "a" },
  ];
  const expected = new Map([
    [
      "a",
      [
        { id: "1", category: "a" },
        { id: "4", category: "a" },
      ],
    ],
    [
      "b",
      [
        { id: "2", category: "b" },
        { id: "3", category: "b" },
      ],
    ],
  ]);
  assert.equal(
    groupByToMap(values, (value) => value.category),
    expected
  );
});

test("GroupByMultiple", () => {
  const values = [
    { id: "1", categories: ["a", "c"] },
    { id: "2", categories: ["b"] },
    { id: "3", categories: ["b", "a"] },
    { id: "4", categories: ["a"] },
  ];
  const expected = Object.assign(Object.create(null), {
    a: [
      { id: "1", categories: ["a", "c"] },
      { id: "3", categories: ["b", "a"] },
      { id: "4", categories: ["a"] },
    ],
    b: [
      { id: "2", categories: ["b"] },
      { id: "3", categories: ["b", "a"] },
    ],
    c: [{ id: "1", categories: ["a", "c"] }],
  });
  assert.equal(
    groupBy(values, (value) => value.categories),
    expected
  );
});

test("GroupByMultipleToMap", () => {
  const values = [
    { id: "1", categories: ["a", "c"] },
    { id: "2", categories: ["b"] },
    { id: "3", categories: ["b", "a"] },
    { id: "4", categories: ["a"] },
  ];
  const expected = new Map([
    [
      "a",
      [
        { id: "1", categories: ["a", "c"] },
        { id: "3", categories: ["b", "a"] },
        { id: "4", categories: ["a"] },
      ],
    ],
    [
      "b",
      [
        { id: "2", categories: ["b"] },
        { id: "3", categories: ["b", "a"] },
      ],
    ],
    ["c", [{ id: "1", categories: ["a", "c"] }]],
  ]);
  assert.equal(
    groupByToMap(values, (value) => value.categories),
    expected
  );
});

test.run();
