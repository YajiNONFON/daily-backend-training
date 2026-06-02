import { describe, it, expect } from "vitest";
import { pipe, intersect } from "./day-05";

const addOne = (n: number) => n + 1;
const double = (n: number) => n * 2;

describe("intersect", () => {
  it("returns [] for empty arrays", () => {
    expect(intersect([], [])).toEqual([]);
  });
  it("returns common elements from two arrays", () => {
    expect(intersect([1, 2, 3, 4], [2, 4, 6])).toEqual([2, 4]);
  });
  it("returns [] when no common elements", () => {
    expect(intersect([1, 2, 3], [5, 6, 7])).toEqual([]);
  });
  it("returns [] for single elements that do not match", () => {
    expect(intersect([2], [3])).toEqual([]);
  });
});

describe("pipe", () => {
  it("returns the value when no functions are passed", () => {
    expect(pipe(3)).toBe(3);
  });
  it("applies a single function to the value", () => {
    expect(pipe(3, addOne)).toBe(4);
  });
  it("applies multiple functions left to right", () => {
    expect(pipe(3, addOne, double)).toBe(8);
  });
  it("handles negative values", () => {
    expect(pipe(-2, addOne, double)).toBe(-2);
  });
});
