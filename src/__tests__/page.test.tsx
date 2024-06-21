import { beforeEach, describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/(without-auth)/page";

// test("Primer Unit Test", () => {
//   render(<Home />);
//   expect(
//     screen.getByRole("heading", { level: 1, name: "MY VET APP" })
//   ).toBeDefined();
// });

describe("Page Testing", () => {
  // beforeEach(() => {
  //   render(<Home />);
  // });
  render(<Home />);

  it("Page must have a header", () => {
    expect(screen.getByRole("banner")).toBeDefined();
  });

  it("Page must have a section of cards", () => {
    expect(
      screen.getByRole("heading", { level: 2, name: "Information" }),
    ).toBeDefined();
  });

  it("Page must have a footer section", () => {
    expect(screen.getByRole("contentinfo")).toBeDefined();
  });
});
