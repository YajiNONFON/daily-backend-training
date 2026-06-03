import { describe, it, expect } from "vitest";
import { longestWord, sumPositives } from "./day-01";

describe("sumPositives", () => {
  it("returns 0 for empty arrays", () => {
    expect(sumPositives([])).toBe(0);
  });
  it("returns the sum of positives numbers from the array", () => {
    expect(sumPositives([3, -1, 4, -2, 5])).toBe(12);
  });
  it("returns 0 when there is no positive numbers", () => {
    expect(sumPositives([-1, -2, -3])).toBe(0);
  });
  it("returns the number when there is a single positive number", () => {
    expect(sumPositives([2, -3])).toBe(2);
  });
});

describe("longestWord", () => {
  it("returns empty string for empty array", () => {
    expect(longestWord([])).toEqual("");
  });
  it("returns the longest word", () => {
    expect(longestWord(["cat", "elephant", "dog", "hippopotamus"])).toEqual(
      "hippopotamus",
    );
  });
  it("returns the first word when lengths are equal", () => {
    expect(longestWord(["cat", "be", "dog"])).toEqual("cat");
  });
  it("returns the only word for a single element", () => {
    expect(longestWord(["cat"])).toEqual("cat");
  });
});
