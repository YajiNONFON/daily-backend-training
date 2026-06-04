import { describe, it, expect } from "vitest";
import { countTruthy, average } from "./day-02";

describe("average", () => {
  it("returns 0 for empty array", () => {
    expect(average([])).toBe(0);
  });
  it("returns the average of an array of number", () => {
    expect(average([10, 20, 30, 40])).toBe(25);
  });

  it("returns the number when there is a single number", () => {
    expect(average([10])).toBe(10);
  });
});

describe("countTruthy", () => {
  it("returns 0 for empty array", () => {
    expect(countTruthy([])).toBe(0);
  });
  it("returns the count of the Truthy value", () => {
    expect(countTruthy([0, 1, "", "hello", null, true, false])).toBe(3);
  });
  it("returns 0 when there is no Truthy value", () => {
    expect(countTruthy([0, "", null, false])).toBe(0);
  });
});
