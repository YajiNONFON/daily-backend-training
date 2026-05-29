import { describe, it, expect } from "vitest";
import { partition, zip } from "./day-03";

describe("Day 01 — zip", () => {
  it("returns [] for empty arrays", () => {
    expect(zip([], [])).toEqual([]);
  });
  it("zips an array of positive numbers and string", () => {
    expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });

  it("single element", () => {
    expect(zip([2], ["a"])).toEqual([[2, "a"]]);
  });
});

describe("Day 01 — partition", () => {
  it("returns [] for an empty array", () => {
    expect(partition([], (n) => n % 2 === 0)).toEqual([[], []]);
  });
  it("partitions an array of strings", () => {
    expect(partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)).toEqual([
      [2, 4, 6],
      [1, 3, 5],
    ]);
  });
  it("single element that satisfies", () => {
    expect(partition([2], (n) => n % 2 === 0)).toEqual([[2], []]);
  });
  it("single element that do not satisfy", () => {
    expect(partition([1], (n) => n % 2 === 0)).toEqual([[], [1]]);
  });
});
