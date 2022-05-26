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
  assert.equal(groupBy(values, (value) => value.category), expected);
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
  assert.equal(groupByToMap(values, (value) => value.category), expected);
});

test.run();
