import { describe, it, expect } from "vitest";
import { filterArray, minMax } from "./day-02";

describe("Day 02 — filterArray", () => {
  it("filters even numbers", () => {
    expect(filterArray([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toEqual([2, 4]);
  });
  it("filters long strings", () => {
    expect(filterArray(["hi", "hello", "yo"], (s) => s.length > 2)).toEqual([
      "hello",
    ]);
  });
  it("returns empty array if nothing passes", () => {
    expect(filterArray([1, 3, 5], (n) => n % 2 === 0)).toEqual([]);
  });
});

describe("Day 02 — minMax", () => {
  it("finds min and max", () => {
    expect(minMax([3, 1, 4, 1, 5, 9])).toEqual({ min: 1, max: 9 });
  });
  it("single element", () => {
    expect(minMax([7])).toEqual({ min: 7, max: 7 });
  });
  it("negative values", () => {
    expect(minMax([-5, 0, 3])).toEqual({ min: -5, max: 3 });
  });
});
