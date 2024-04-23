import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Sidebar } from "../components/Sidebar/Sidebar";

describe("Testing Sidebar Component", () => {
    const username = "draquio"
    test('It should render Sidebar Component correctly', () => {
      render(<Sidebar username={username} />);
      const title = screen.getByRole('heading', { name: "Usuarios conectados", level: 3});
      const link = screen.getByTitle("Desarrollado por Sergio Mercado");
      expect(title).toBeDefined();
      expect(link).toHaveProperty('href', 'https://draquioportfolio.vercel.app/');
    })
    
})