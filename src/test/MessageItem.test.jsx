import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import MessageItem from "../components/MessageItem/MessageItem";
import { getRandomColor, getTime } from "../utils/functions";

describe("Testing MessageItem component", () => {
  const username = "draquio";
  const messages = [
    {
      content: "Hola chicos",
      user: "Noel",
      time: getTime(),
      avatar: "1.webp",
      color: getRandomColor(),
    },
    {
      content: "Bienvenidos chicos",
      user: "Sergio",
      time: getTime(),
      avatar: "2.webp",
      color: getRandomColor(),
    },
    {
      content: "Hola que tal",
      user: "Andrea",
      time: getTime(),
      avatar: "3.webp",
      color: getRandomColor(),
    },
  ];
  test("it should render the messages from MessageItem component", () => {
    render(<MessageItem message={messages} username={username} />);
    const NoelMessage = screen.findByText("Hola chicos");
    const SergioMessage = screen.findByText("Bienvenidos chicos");
    const AndreaMessage = screen.findByText("Hola que tal");
    const Noel = screen.findByText("Noel");
    const Sergio = screen.findByText("Sergio");
    const Andrea = screen.findByText("Andrea");
    expect(NoelMessage).toBeDefined();
    expect(SergioMessage).toBeDefined();
    expect(AndreaMessage).toBeDefined();
    expect(Noel).toBeDefined();
    expect(Sergio).toBeDefined();
    expect(Andrea).toBeDefined();
  });
});
