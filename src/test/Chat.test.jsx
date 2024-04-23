import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Chat from "../components/Chat/Chat";

const username = "draquio";
describe("Testing Chat component", () => {
  test("it should render the chat component", () => {
    render(<Chat username={username} />);
    const title = screen.getByRole("heading", {
      name: "Chat grupal",
      level: 1,
    });
    expect(title).toBeDefined();
  });
});
