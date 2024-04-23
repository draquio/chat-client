import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ChatForm from "../components/ChatForm/ChatForm";

describe("Testing ChatForm component", () => {
  const username = "draquio";
  const avatar = "1.webp";
  const color = "#23d097";
  test("It should render the ChatForm component with server On", () => {
    render(
      <ChatForm
        username={username}
        avatar={avatar}
        color={color}
        backendavailable={true}
      />
    );
    const inputText = screen.getByPlaceholderText("Escribe tu mensaje");
    expect(inputText).toBeDefined();
  });

  test("It should render the ChatForm component with server Off", () => {
    render(
      <ChatForm
        username={username}
        avatar={avatar}
        color={color}
        backendavailable={false}
      />
    );
    const inputText = screen.getByPlaceholderText("Un segundo, el servidor está encendiendo..");
    expect(inputText).toBeDefined(); 
    expect(inputText).toHaveProperty("disabled"); 
  });
});
