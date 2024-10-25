import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";

const Exercicio4 = () => {
    // Estado para o valor digitado
    const [valor, setValor] = useState('');

    // Função para calcular a decomposição das notas
    const aoCalcularNotas = (evento) => {
        evento.preventDefault();

        let valorRestante = parseInt(valor); 

        // Definindo as cédulas disponíveis
        const cedulas = [100, 50, 20, 10, 5, 2, 1];
        const resultadoNotas = {};

        // Decompondo o valor nas notas
        for (let cedula of cedulas) {
            const qtdNotas = Math.floor(valorRestante / cedula);
            resultadoNotas[cedula] = qtdNotas;
            valorRestante %= cedula; // Atualiza o valor restante
        }
        /*Testando com R$ 576,00.
        Primeira Cédula 100
        qtdNotas = Math.floor(576 / 100) = Math.floor(5.76) = 5
        Portanto 5 cédulas de 100
        Repetindo para cada cedula*/

        // Exibindo o resultado com as notas necessárias
        let resultado = `Valor: R$ ${valor}\nDecomposição de notas:\n`;
        for (let cedula of cedulas) {
            resultado += `${resultadoNotas[cedula]} nota(s) de R$ ${cedula},00\n`;
        }

        alert(resultado);

        // Resetando o valor após o cálculo
        setValor('');
    };

    // Array de inputs dinâmico
    const inputs = [
        {
            obrigatorio: true,
            label: "Valor Inteiro",
            placeholder: "Digite um valor inteiro",
            valor: valor,
            aoAlterar: setValor
        }
    ];

    return (
        <section>
            <h1>4) Decomposição de Valor em Notas</h1>
            <Formulario inputs={inputs} aoCalcular={aoCalcularNotas} />
        </section>
    );
};

export default Exercicio4;
