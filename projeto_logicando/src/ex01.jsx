import { useState } from "react";

const Ingresso = function(nomeEvento, valorIngresso) {
    this.nomeEvento = nomeEvento
    this.valorIngresso = valorIngresso

    this.exibirValor = function() {
        return valorIngresso.tofixed(2);
    };

    this.__str__ = function() {
        return "O nome do evento é " + this.nomeEvento + " e o valor do ingresso é R$ " + this.valorIngresso;
    };
}

function Exercicio01 () {

    const [ingresso, setIngresso] = useState(new Ingresso("", 0))

    const handleChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setIngresso(ingresso => ({...ingresso, [name]: value}))
    }

    const enviar = (event) => {
        event.preventDefault();
        document.getElementById("outNomeEvento").textContent = ingresso.nomeEvento;
        document.getElementById("outValorIngresso").textContent = ingresso.valorIngresso;
        document.getElementById("outEventoIngresso__str__").textContent = ingresso.__str__();
    }

    return (
        <>
            <div id="div-ex01">
                <h2>Exercício 1:</h2>
                <p>1. Crie um objeto chamada Ingresso, que possua o nome do evento e o valor do ingresso. Crie o método exibirValor(), que apenas retorne o valor do ingresso. Crie o método __str__ que retorne o nome do evento seguido do valor do ingresso. Crie um programa para testar sua classe.</p>
                <h3>Entrada:</h3>
                <form className="flex-column" onSubmit={enviar}>
                    <label htmlFor="inputNomeEvento">Digite o nome do evento: </label>
                    <input type="text" id="inputNomeEvento" placeholder="Jogo de Futebol" name="nomeEvento" onChange={handleChange} value={ingresso.nomeEvento || ""}></input>
                    <label htmlFor="inputValorIngresso">Digite o valor do ingresso: </label>
                    <input type="text" id="inputValorIngresso" name="valorIngresso" onChange={handleChange} value={ingresso.valorIngresso || ""}></input>
                    <button type="submit" id="btnEnviarEx01">Enviar</button>
                </form>
                <div>
                    <h3>Saída:</h3>
                    <ul>
                        <li>
                            <p>Evento: <span id="outNomeEvento">[NOME DO EVENTO]</span>.</p>
                        </li>
                        <li>
                            <p>Ingresso: R$ <span id="outValorIngresso">[VALOR DO INGRESSO]</span>.</p>
                        </li>
                        <li>
                            <p id="outEventoIngresso__str__">[__str__]</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Exercicio01