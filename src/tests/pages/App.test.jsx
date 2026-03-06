import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("Página inicial", () => {
    it("deve renderizar o título principal", () => {
        const { container } = render(<Home />);
        console.log(container.innerHTML); // 踬踭踮踯 mostra o HTML renderizado
        expect(
            screen.getByText("Bem-vindo à Pousada Pedra Furada")
        ).toBeInTheDocument();
    });
});

<main>
<h1>Bem-vindo à Pousada Pedra Furada</h1>
</main>