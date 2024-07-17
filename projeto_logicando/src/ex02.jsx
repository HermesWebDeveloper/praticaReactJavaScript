import { useState } from "react";

const Retangulo = function(largura, altura) {
    this.largura = largura;
    this.altura = altura;

    this.calcularPerimetro = function() {
        return (this.largura * 2) + (this.altura * 2);
    };

    this.calcularArea = function() {
        return (this.largura * this.altura);
    };
}

function Exercicio02 () {

    const [retangulo, setRetangulo] = useState(new Retangulo(0,0));

    const handleChange = (event) => {
        var valor = Number(event.target.value);
        var name = event.target.name;
        setRetangulo((retangulo) => ({...retangulo, [name]: valor}));
        console.log(retangulo)
    }

    const atualizar = (event) => {
        event.preventDefault();
        document.getElementById("outPerimetroRetangulo").textContent = retangulo.calcularPerimetro();
        document.getElementById("outAreaRetangulo").textContent = retangulo.calcularArea();
    }

    return (
        <>
            <div id="div-ex2">
                <h2>Exercício 2:</h2>
                <p>2. Crie um objeto chamado Retangulo, a qual possua os atributos largura e altura, e os métodos calcularPerimetro() e calcularArea(). No código de teste, crie um objeto e calcule, respectivamente, o perímetro e a área desse retângulo.</p>
                <h3>Entrada:</h3>
                <form onSubmit={atualizar}>
                    <label htmlFor="inputLarguraRetangulo">Largura: </label>
                    <input type="number" id="inputLarguraRetangulo" name="largura" onChange={handleChange} value={retangulo.largura || ""}></input>
                    <label htmlFor="inputAlturaRetangulo">Altura: </label>
                    <input type="number" id="inputAlturaRetangulo" name="altura" onChange={handleChange} value={retangulo.altura || ""}></input>
                    <button type="submit" id="btnEnviarEx02">Enviar</button>
                </form>
                <h3>Saída:</h3>
                <div>
                    <ul>
                        <li>
                            <p>Perímetro do Retângulo: <span id="outPerimetroRetangulo">[PERIMETRO]</span></p>
                        </li>
                        <li>
                            <p>Área do Retângulo: <span id="outAreaRetangulo">[AREA]</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Exercicio02