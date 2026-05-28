import { describe, it, expect } from "vitest";
import { sumBykey, reverseWords } from "./day-02";

describe("sumByKey", () => {
  it("returns 0 for an empty array", () => {
    expect(sumBykey([], "age")).toBe(0);
  });
  it("returns the value for a single object", () => {
    expect(sumBykey([{ name: "Alice", age: 25 }], "age")).toBe(25);
  });
  it("returns the sum for multiple objects", () => {
    expect(
      sumBykey(
        [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 30 },
        ],
        "age",
      ),
    ).toBe(55);
  });
  it("handles a value of 0", () => {
    expect(
      sumBykey(
        [
          { name: "Alice", age: 0 },
          { name: "Bob", age: 30 },
        ],
        "age",
      ),
    ).toBe(30);
  });
});

describe("reverseWords", () => {
  it("returns an empty string for an empty string", () => {
    expect(reverseWords("")).toBe("");
  });
  it("returns the same word for a single word", () => {
    expect(reverseWords("hello")).toBe("hello");
  });
  it("reverses two words", () => {
    expect(reverseWords("hello world")).toBe("world hello");
  });
  it("reverses multiple words", () => {
    expect(reverseWords("hello world typescript")).toBe(
      "typescript world hello",
    );
  });
});
