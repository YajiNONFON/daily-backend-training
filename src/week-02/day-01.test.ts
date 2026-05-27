import { describe, it, expect } from "vitest";
import { capitalize, double } from "./day-01";

describe("Day 01 — double", () => {
  it("returns [] for an empty array", () => {
    expect(double([])).toEqual([]);
  });
  it("doubles an array of positive numbers", () => {
    expect(double([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });
  it("handles negative numbers", () => {
    expect(double([-1, -2, -3])).toEqual([-2, -4, -6]);
  });
  it("single element", () => {
    expect(double([2])).toEqual([4]);
  });
});

describe("Day 01 — capitalize", () => {
  it("returns [] for an empty array", () => {
    expect(capitalize([])).toEqual([]);
  });
  it("capitalizes an array of strings", () => {
    expect(capitalize(["hello", "world", "typescript"])).toEqual([
      "Hello",
      "World",
      "Typescript",
    ]);
  });
  it("single element", () => {
    expect(capitalize(["hello"])).toEqual(["Hello"]);
  });
});
