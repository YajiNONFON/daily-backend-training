import { describe, it, expect } from "vitest";
import { flatMap, pluck } from "./day-03";

describe("flatMap", () => {
  it("returns [] for empty array", () => {
    expect(flatMap([])).toEqual([]);
  });
  it("splits strings into individual characters", () => {
    expect(flatMap(["hello", "world"])).toEqual([
      "h",
      "e",
      "l",
      "l",
      "o",
      "w",
      "o",
      "r",
      "l",
      "d",
    ]);
  });
  it("returns characters for a single word", () => {
    expect(flatMap(["hi"])).toEqual(["h", "i"]);
  });
});

describe("pluck", () => {
  it("returns [] for empty array", () => {
    expect(pluck([], "name")).toEqual([]);
  });
  it("returns the values at the given key", () => {
    expect(
      pluck(
        [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 30 },
        ],
        "name",
      ),
    ).toEqual(["Alice", "Bob"]);
  });
  it("works with number values", () => {
    expect(
      pluck(
        [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 30 },
        ],
        "age",
      ),
    ).toEqual([25, 30]);
  });
});
