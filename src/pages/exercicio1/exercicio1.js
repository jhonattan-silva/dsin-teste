import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";

const Exercicio1 = () => {
    // Definindo estados para cada input
    const [horasDia, setHorasDia] = useState('');
    const [precoHora, setPrecoHora] = useState('');
    const [diasTrabalhados, setDiasTrabalhados] = useState('');

    // Função de cálculo do salário
    const aoCalcular = (evento) => {
        evento.preventDefault();

        const descontoMensal = 0.15;
        const salarioBruto = horasDia * precoHora * diasTrabalhados;
        const valorDescontado = salarioBruto * descontoMensal;
        const salarioLiquido = salarioBruto - valorDescontado;

        console.log("Salário Bruto => ", salarioBruto);
        console.log("Salário Líquido => ", salarioLiquido);

        alert(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}\nSalário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

        // Resetando os campos após cálculo
        setHorasDia('');
        setPrecoHora('');
        setDiasTrabalhados('');
    };

    // Array de inputs dinâmico
    const inputs = [
        {
            obrigatorio: true,
            label: "Horas/Dia",
            placeholder: "Digite o número de horas por dia",
            valor: horasDia,
            aoAlterar: setHorasDia
        },
        {
            obrigatorio: true,
            label: "Preço/Hora",
            placeholder: "Digite o valor da hora trabalhada",
            valor: precoHora,
            aoAlterar: setPrecoHora
        },
        {
            obrigatorio: true,
            label: "Dias Trabalhados",
            placeholder: "Digite a quantidade de dias trabalhados",
            valor: diasTrabalhados,
            aoAlterar: setDiasTrabalhados
        }
    ];

    return (
        <section>
            <h1>1) Calcular Salário Líquido de um Trabalhador</h1>
            <Formulario inputs={inputs} aoCalcular={aoCalcular} />
        </section>
    );
};

export default Exercicio1;
