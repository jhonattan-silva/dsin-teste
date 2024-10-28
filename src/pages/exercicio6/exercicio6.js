import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";
import Header from "../../componentes/Header/Header";
import './exercicio6.css'

const Exercicio6 = () => {
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState([]);

    const aoGerarSequencia = (evento) => {
        evento.preventDefault();

        const n = parseInt(numero);
        if (isNaN(n) || n <= 0) {
            alert("Por favor, insira um número inteiro positivo.");
            return;
        }

        const resultadoArray = [];
        for (let i = 1; i <= n; i++) {
            let mensagens = `${i}: `;

            if (ehPerfeito(i)) {
                mensagens += "numero perfeito, ";
            }
            if (i % 2 === 0) {
                mensagens += "numero par, ";
            } else {
                mensagens += "numero impar, ";
            }
            if (ehPrimo(i)) {
                mensagens += "numero primo, ";
            }

            resultadoArray.push(mensagens.slice(0, -2)); // Remove a vírgula e o espaço finais
        }

        setResultado(resultadoArray);
        setNumero('');
    };

    // Função para verificar se o número é perfeito
    const ehPerfeito = (num) => {
        let soma = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                soma += i;
            }
        }
        return soma === num;
    };

    // Função para verificar se o número é primo
    const ehPrimo = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const inputs = [
        {
            obrigatorio: true,
            label: "Número inteiro positivo",
            placeholder: "Digite um número",
            valor: numero,
            aoAlterar: setNumero
        }
    ];

    return (
        <>
            <Header />
            <section>
                <h1>6) Sequência de Números com Verificação</h1>
                <Formulario inputs={inputs} aoCalcular={aoGerarSequencia} />
                <div className="resultado">
                    <h1>Resultado</h1>
                    {resultado.length > 0 && (
                        <ul>
                            {resultado.map((res, index) => (
                                <li key={index}>{res}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </>
    );
};

export default Exercicio6;
