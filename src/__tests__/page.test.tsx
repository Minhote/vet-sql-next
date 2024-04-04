import { beforeEach, describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// test("Primer Unit Test", () => {
//   render(<Home />);
//   expect(
//     screen.getByRole("heading", { level: 1, name: "My Vet App" })
//   ).toBeDefined();
// });

describe("Page Testing", () => {
  beforeEach(() => {
    render(<Home />);
  });
  it("Page must have a header", () => {
    expect(screen.getByRole("banner")).toBeDefined();
  });
});
