import { describe, it, expect } from "vitest";
import { unique, countOccurrences } from "./day-04";

describe("Day 04 — unique", () => {
  it("deduplicates numbers", () => {
    expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
  });
  it("deduplicates strings", () => {
    expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
  });
  it("array without duplicates stays unchanged", () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe("Day 04 — countOccurrences", () => {
  it("counts letters", () => {
    expect(countOccurrences(["a", "b", "a", "c", "b", "a"])).toEqual({
      a: 3,
      b: 2,
      c: 1,
    });
  });
  it("empty array", () => {
    expect(countOccurrences([])).toEqual({});
  });
  it("single element", () => {
    expect(countOccurrences([42])).toEqual({ "42": 1 });
  });
});
