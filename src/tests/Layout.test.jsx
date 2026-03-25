// src/tests/components/Layout.test.jsx
import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";

// Mocka Header para isolar o Layout
jest.mock("../components/Headers", () => () => <header>Mock Header</header>);

describe("Layout.jsx — Estrutura principal da aplicação", () => {
    it("deve renderizar Header e conteúdo filho", () => {
        render(<Layout><p>Conteúdo interno</p></Layout>);

        // Verifica se o Header mockado foi renderizado
        expect(screen.getByText("Mock Header")).toBeInTheDocument();

        // Verifica o conteúdo filho (children)
        expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();
    });
}); 