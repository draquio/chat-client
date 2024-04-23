import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Username } from "../components/username/Username";
import { Avatar } from "../components/username/Avatar";

describe("Testing Username Component", () => {
  const setUsername = vi.fn();
  const setAvatar = vi.fn();
  const setColor = vi.fn();
  const avatar = "1.webp  ";
  test("it should render Username Component", () => {
    render(
      <Username
        setUsername={setUsername}
        setAvatar={setAvatar}
        setColor={setColor}
        avatar={avatar}
      />
    );
    const h2 = screen.findByRole("heading", {
      name: "¿Cuál es tu nombre de usuario?",
      level: 2,
    });
    const UsernameInput = screen.findByPlaceholderText("Username");
    const saveInput = screen.findByText("Guardar");
    expect(saveInput).toBeDefined();
    expect(UsernameInput).toBeDefined();
    expect(h2).toBeDefined();
  });

  test("it should render Avatar Component", async () => {
    render(<Avatar setAvatar={setAvatar} avatar={avatar} />);
    const imgs = screen.getAllByAltText("avatar chat");
    imgs.forEach((img) => {
        expect(img).toBeDefined();
        expect(img).toHaveProperty("alt", 'avatar chat')
    });
    expect(imgs).toHaveLength(5)
  });
});
