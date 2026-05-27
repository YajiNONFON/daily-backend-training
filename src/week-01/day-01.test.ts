import { describe, it, expect } from "vitest";
import { sumArray, factorial } from "./day-01";

describe("Day 01 — sumArray", () => {
  it("returns 0 for an empty array", () => {
    expect(sumArray([])).toBe(0);
  });
  it("sums an array of positive numbers", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });
  it("handles negative numbers", () => {
    expect(sumArray([-1, -2, 3])).toBe(0);
  });
  it("single element", () => {
    expect(sumArray([42])).toBe(42);
  });
});

describe("Day 01 — factorial", () => {
  it("factorial(0) = 1", () => {
    expect(factorial(0)).toBe(1);
  });
  it("factorial(1) = 1", () => {
    expect(factorial(1)).toBe(1);
  });
  it("factorial(5) = 120", () => {
    expect(factorial(5)).toBe(120);
  });
  it("factorial(10) = 3628800", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
