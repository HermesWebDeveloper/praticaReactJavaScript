import { useState } from "react";

const Ponto = function(x, y) {
    this.x = x;
    this.y = y;

    this.__str__ = function() {
        return `Nome: (${this.x}, ${this.y})`;
    };
}

function Exercicio03 ({imagemSrc}) {

        let listaPontos = [];
        const [ponto, setPonto] = useState(new Ponto(0,0))
        const [contador, setContador] = useState(0);
        // listaPontos[0] = ponto;

        const handleChange = (event) => {
            let value = event.target.value;
            let name = event.target.name;
            setPonto((ponto) => ({...ponto, [name]: value}));
        }

        const adicionarPonto = (event) => {
            event.preventDefault();
            listaPontos[listaPontos.length] = ponto;
            document.getElementById("outListaPontos").innerHTML += `<li> ${ponto.__str__()} </li>`;
            console.log(listaPontos)
        }

        const zerarListaPontos = (event) => {
            listaPontos = [];
            document.getElementById("outListaPontos").innerHTML = '';
        }

        return (
        <>
            <div id="div-ex03">
                <h2>Exerício 3:</h2>
                <p>3. Crie uma função construtora Ponto, conforme a figura a seguir. O método __str__ deve retornar os atributos do objeto no formato “nome: (x, y)”. Crie em outro arquivo os testes para a função construtra Ponto, lendo diversos pontos e criando um objeto ponto para cada entrada lida. Coloque cada objeto da classe Ponto em uma lista e, ao final, imprima cada elemento dessa lista.</p>
                <img src="./images/ponto-ex03.png"></img>

                <h3>Entrada:</h3>
                <form onSubmit={adicionarPonto}>
                    <label htmlFor="inputPontoX">X: </label>
                    <input type="number" id="inputPontoX" name="x" value={ponto.x || ""} onChange={handleChange}></input>
                    <label htmlFor="inputPontoY">Y: </label>
                    <input type="number" id="inputPontoY" name="y" value={ponto.y || ""} onChange={handleChange}></input>
                    <button type="submit" id="btnEnviarEx03">Adicionar Ponto</button>
                    <button type="button" id="btnZerarLista" onClick={zerarListaPontos}>Zerar Lista</button>
                </form>
                <h3>Saída:</h3>
                <ul>
                    <span id="outListaPontos"></span>
                </ul>
            </div>
        </>
    )
}

export default Exercicio03