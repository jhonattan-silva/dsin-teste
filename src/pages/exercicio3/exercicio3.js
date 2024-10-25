import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";

const Exercicio3 = () => {
    // Definindo estado para o custo de fábrica
    const [custoFabrica, setCustoFabrica] = useState('');

    // Função de cálculo do custo ao consumidor
    const aoCalcularCusto = (evento) => {
        evento.preventDefault();

        const custo = parseFloat(custoFabrica);

        // Definindo as porcentagens
        const percentualDistribuidor = 0.125; // 12,5%
        const percentualImpostos = 0.33; // 33%
        const descontoAVista = 0.05; // 5% de desconto

        // Calculando valores
        const valorDistribuidor = custo * percentualDistribuidor;
        const valorImpostos = custo * percentualImpostos;
        const valorCarro = custo + valorDistribuidor + valorImpostos;
        const valorDesconto = valorCarro * descontoAVista;
        const valorComDesconto = valorCarro - valorDesconto;

        // Exibindo os valores calculados
        alert(`
            Valor do Distribuidor: R$ ${valorDistribuidor.toFixed(2)}
            Valor dos Impostos: R$ ${valorImpostos.toFixed(2)}
            Valor do Carro: R$ ${valorCarro.toFixed(2)}
            Valor do Desconto: R$ ${valorDesconto.toFixed(2)}
            Valor do Carro com Desconto: R$ ${valorComDesconto.toFixed(2)}
        `);

        // Resetando o campo de custo de fábrica após o cálculo
        setCustoFabrica('');
    };

    // Array de inputs dinâmico
    const inputs = [
        {
            obrigatorio: true,
            label: "Custo de Fábrica",
            placeholder: "Digite o custo de fábrica do carro",
            valor: custoFabrica,
            aoAlterar: setCustoFabrica
        }
    ];

    return (
        <section>
            <h1>3) Cálculo do Custo ao Consumidor do Carro</h1>
            <Formulario inputs={inputs} aoCalcular={aoCalcularCusto} />
        </section>
    );
};

export default Exercicio3;
