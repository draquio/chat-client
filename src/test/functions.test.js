import { describe, expect, test } from "vitest";
import { getRandomColor } from "../utils/functions";

describe("Testing getRandomColor function", () => {
  const colors = [
    "#f5c002",
    "#23d097",
    "#EB455F",
    "#891652",
    "#387ADF",
    "#5d876c",
    "#86B6F6",
  ];
  test("it should return a color from the function and being in the list colors", () => {
    const color = getRandomColor();
    expect(colors).toContain(color);
  });

  test("it should return correct color 15 times from the function and being in the list colors", () => {
    for (let i = 0; i <= 15; i++) {
      const color = getRandomColor();
      expect(colors).toContain(color);
    }
  });
});
