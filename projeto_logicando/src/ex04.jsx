import { useState } from "react";

const Lista = function(lista) {
    this.padrao = lista;

    this.semRepetir = function () {
        // Cria uma nova lista para armazenar os valores únicos
        const uniqueList = [];

        // Percorre a lista original
        for (let i = 0; i < this.padrao.length; i++) {
            // Verifica se o elemento atual não está na lista única
            if (!uniqueList.includes(this.padrao[i])) {
                uniqueList.push(this.padrao[i]);
            }
        }

        return uniqueList;
    }
}

function Exercicio04 () {
    
    const [elemento, setElemento] = useState("");
    const [array, setArray] = useState([])
    const [lista, setLista] = useState((new Lista(array)));

    const handleChange = (event) => {
        setElemento(event.target.value);
    }

    // const adicionarElemento = (event) => {
    //     event.preventDefault();
    //     setArray((array) => ([...array, elemento]));    
    //     console.log(array);
    //     setLista((lista) => ([new Lista(array)]));
    //     console.log(lista.padrao)
    //     document.getElementById("outLista").textContent = lista.padrao;
    //     document.getElementById("outListaSemRepetir").textContent = lista.semRepetir;
    // }

    const adicionarElemento = (event) => {
        event.preventDefault();
    
        // Atualiza o array de forma imutável
        setArray((prevArray) => {
            const novoArray = [...prevArray, elemento];
            console.log(novoArray);
    
            // Atualiza a lista após atualizar o array
            setLista((prevLista) => {
                const novaLista = new Lista(novoArray);
                document.getElementById("outLista").textContent = novaLista.padrao.join(', ');
                document.getElementById("outListaSemRepetir").textContent = novaLista.semRepetir().join(', ');
                return novaLista;
            });
    
            return novoArray;
        });
    };
    

    return (
        <>
            <div id="div-ex04">
                <h2>Exercício 4:</h2>
                <p>4. Crie uma função construtora Lista que receba um atributo do tipo array e que tenha um método o qual retorne os elementos da array sem repetição. Crie o programa de teste.</p>
                
                <h3>Entrada:</h3>
                <form onSubmit={adicionarElemento}>
                    <label htmlFor="inputElementoLista">Elemento: </label>
                    <input type="text" id="inputElementoLista" name="elemento" value={elemento || ""} onChange={handleChange}></input>
                    <button type="submit" id="btnAdicionarElemeto">Adicionar na Lista</button>
                </form>

                <h3>Saída:</h3>
                <div>
                    <ul>
                        <li>
                            Lista: <span id="outLista"></span>
                        </li>
                        <li>
                            Lista sem repetir: <span id="outListaSemRepetir"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Exercicio04