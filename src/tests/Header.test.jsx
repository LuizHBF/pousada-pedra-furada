import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Headers";



describe("Renderizar a header", () => {
    
    it("deve renderizar os links da header", async () => {

        render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );


    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Tarefas")).toBeInTheDocument();
    expect(screen.getByText("Relatórios")).toBeInTheDocument();



    })



});