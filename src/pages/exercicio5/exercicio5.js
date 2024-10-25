import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";

const Exercicio5 = () => {
    const [placa, setPlaca] = useState('');

    const aoVerificarPlaca = (evento) => {
        evento.preventDefault();

        // Regex para validar o formato da placa
        const regexBrasileira = /^[A-Z]{3}\d{4}$/;
        const regexMercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;

        let tipo = '';
        let correspondente = '';

        if (regexBrasileira.test(placa)) {
            tipo = 'Brasil';
            correspondente = placa.slice(0, 3) + placa[3] + String.fromCharCode(65 + parseInt(placa[4])) + placa.slice(5);
        } else if (regexMercosul.test(placa)) {
            tipo = 'Mercosul';
            correspondente = placa.slice(0, 3) + placa[3] + String(placa[4].charCodeAt(0) - 65) + placa.slice(5);
        } else {
            alert('Formato inválido');
            return;
        }

        alert(`Placa: ${placa}\nPadrão: ${tipo}\nCorrespondente: ${correspondente}`);
        
        // Resetando o valor após a verificação
        setPlaca('');
    };

    const inputs = [
        {
            obrigatorio: true,
            label: "Placa",
            placeholder: "Digite a placa (AAA9999 ou AAA9A99)",
            valor: placa,
            aoAlterar: setPlaca
        }
    ];

    return (
        <section>
            <h1>5) Verificação de Placa: Brasil ou Mercosul</h1>
            <Formulario inputs={inputs} aoCalcular={aoVerificarPlaca} />
        </section>
    );
};

export default Exercicio5;
