import { describe, it, expect } from "vitest";
import { compose, chunk } from "./day-05";

describe("Day 05 — compose", () => {
  it("composes two functions", () => {
    const fn = compose(
      (x: number) => x + 1,
      (x: number) => x * 2,
    );
    expect(fn(3)).toBe(7); // 3*2=6, 6+1=7
  });
  it("single function", () => {
    const fn = compose((x: number) => x * 10);
    expect(fn(5)).toBe(50);
  });
  it("three functions", () => {
    const fn = compose(
      (x: number) => x - 1,
      (x: number) => x * 2,
      (x: number) => x + 3,
    );
    expect(fn(2)).toBe(9); // 2+3=5, 5*2=10, 10-1=9
  });
});

describe("Day 05 — chunk", () => {
  it("splits into chunks of 2", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("exact size", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  it("empty array", () => {
    expect(chunk([], 3)).toEqual([]);
  });
  it("size >= array length", () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });
});
