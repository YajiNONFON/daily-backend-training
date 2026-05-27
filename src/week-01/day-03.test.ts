import { describe, it, expect } from "vitest";
import { groupBy, flatten } from "./day-03";

describe("Day 03 — groupBy", () => {
  const users = [
    { role: "admin", name: "Alice" },
    { role: "user", name: "Bob" },
    { role: "admin", name: "Carol" },
  ];
  it("groups by role", () => {
    const result = groupBy(users, "role");
    expect(result["admin"]).toHaveLength(2);
    expect(result["user"]).toHaveLength(1);
  });
  it("empty array => empty object", () => {
    expect(groupBy([], "role" as never)).toEqual({});
  });
});

describe("Day 03 — flatten", () => {
  it("flattens an array of arrays", () => {
    expect(flatten([[1, 2], [3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("empty array", () => {
    expect(flatten([])).toEqual([]);
  });
  it("empty sub-arrays", () => {
    expect(flatten([[], [1], []])).toEqual([1]);
  });
});
