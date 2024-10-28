import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";
import Header from "../../componentes/Header/Header";

const Exercicio2 = () => {
    // Definindo estados para os 4 inputs
    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [valorC, setValorC] = useState('');
    const [valorD, setValorD] = useState('');

    // Função de validação dos valores
    const aoValidarValores = (evento) => {
        evento.preventDefault();

        const A = parseInt(valorA);
        const B = parseInt(valorB);
        const C = parseInt(valorC);
        const D = parseInt(valorD);

        // Condições conforme o enunciado
        if (
            B > C &&
            D > A &&
            C + D > A + B &&
            C > 0 && D > 0 &&
            A % 2 === 0
        ) {
            console.log(`A=${A} B=${B} C=${C} D=${D}`);
            console.log(`Se ${B} > ${C} ---> ${D} > ${A} ---> ${C}+${D} > ${A}+${B} ---> ${C} e ${D} > 0 ---> ${A} é par ---> OK`);

            alert("Valores aceitos");
        } else {
            alert("Valores não aceitos");
        }

    };

    const inputs = [
        {
            obrigatorio: true,
            label: "Valor A",
            placeholder: "Digite o valor de A",
            valor: valorA,
            aoAlterar: setValorA
        },
        {
            obrigatorio: true,
            label: "Valor B",
            placeholder: "Digite o valor de B",
            valor: valorB,
            aoAlterar: setValorB
        },
        {
            obrigatorio: true,
            label: "Valor C",
            placeholder: "Digite o valor de C",
            valor: valorC,
            aoAlterar: setValorC
        },
        {
            obrigatorio: true,
            label: "Valor D",
            placeholder: "Digite o valor de D",
            valor: valorD,
            aoAlterar: setValorD
        }
    ];

    return (
        <>
            <Header />
            <section>
                <h1>2) Validação de Valores</h1>
                <Formulario inputs={inputs} aoCalcular={aoValidarValores} />
            </section>
        </>
    );
};

export default Exercicio2;
