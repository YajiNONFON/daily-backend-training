import { describe, it, expect } from "vitest";
import { deepFlatten, findDuplicates } from "./day-04";

describe("findDuplicates", () => {
  it("returns [] for an empty array", () => {
    expect(findDuplicates([])).toEqual([]);
  });
  it("returns duplicates from an array of numbers", () => {
    expect(findDuplicates([1, 2, 3, 2, 4, 3, 5])).toEqual([2, 3]);
  });
  it("returns [] when no duplicates", () => {
    expect(findDuplicates([1, 2, 3])).toEqual([]);
  });
  it("returns [] for a single element", () => {
    expect(findDuplicates([2])).toEqual([]);
  });
});

describe("deepFlatten", () => {
  it("returns [] for an empty array", () => {
    expect(deepFlatten([])).toEqual([]);
  });
  it("flattens a deeply nested array", () => {
    expect(deepFlatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });
  it("returns the same array for a single element", () => {
    expect(deepFlatten([2])).toEqual([2]);
  });
});
