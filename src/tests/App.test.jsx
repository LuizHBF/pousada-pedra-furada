import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

jest.mock("../pages/LoginPage", () => () => <div>Login Mock</div>);
jest.mock("../pages/TarefasPage", () => () => <div>Tarefas Mock</div>);
jest.mock("../pages/RelatoriosPages", () => () => <div>Relatórios Mock</div>);

describe("Página inicial", () => {
    it("deve renderizar o título principal", () => {
        const { container } = render(<Home />);
        console.log(container.innerHTML); // 踬踭踮踯 mostra o HTML renderizado
        expect(
            screen.getByText("Bem-vindo à Pousada Pedra Furada")
        ).toBeInTheDocument();
    });

    test("deve renderizar a página de login por padrão", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText("Login Mock")).toBeInTheDocument();
    });

    test("deve renderizar a página de tarefas ao navegar para /tarefas", () => {
        render(
            <MemoryRouter initialEntries={["/tarefas"]}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText("Tarefas Mock")).toBeInTheDocument();
    });

});

<main>
    <h1>Bem-vindo à Pousada Pedra Furada</h1>
</main>