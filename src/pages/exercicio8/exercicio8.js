import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";
import Header from "../../componentes/Header/Header";
import './exercicio8.css';

const Exercicio8 = () => {
    const [tamanho, setTamanho] = useState('');
    const [matriz, setMatriz] = useState([]);

    const gerarMatrizCaracol = (evento) => {
        evento.preventDefault();
        const N = parseInt(tamanho);
        if (isNaN(N) || N <= 0) {
            alert("Insira um número inteiro positivo.");
            return;
        }

        // Inicializando matriz NxN com valores 0
        const matrizCaracol = Array.from({ length: N }, () => Array(N).fill(0));
        
        let valor = 0; // Valor inicial
        let topo = 0, base = N - 1;
        let esquerda = 0, direita = N - 1;

        // Preenchendo a matriz em espiral
        while (topo <= base && esquerda <= direita) {
            // Da esquerda para a direita na linha superior
            for (let i = esquerda; i <= direita; i++) matrizCaracol[topo][i] = valor += 2;
            topo++;
            
            // De cima para baixo na coluna direita
            for (let i = topo; i <= base; i++) matrizCaracol[i][direita] = valor += 2;
            direita--;

            // Da direita para a esquerda na linha inferior
            for (let i = direita; i >= esquerda; i--) matrizCaracol[base][i] = valor += 2;
            base--;

            // De baixo para cima na coluna esquerda
            for (let i = base; i >= topo; i--) matrizCaracol[i][esquerda] = valor += 2;
            esquerda++;
        }

        setMatriz(matrizCaracol);
        setTamanho('');
    };

    const inputs = [
        {
            obrigatorio: true,
            label: "Tamanho da Matriz (N)",
            placeholder: "Digite o valor de N",
            valor: tamanho,
            aoAlterar: setTamanho
        }
    ];

    return (
        <>
            <Header />
            <section>
                <h1>8) Matriz em Formato de Caracol</h1>
                <Formulario inputs={inputs} aoCalcular={gerarMatrizCaracol} />
                <pre className="resultado">
                    {matriz.map((linha, index) => (
                        <div key={index}>{linha.join(' ')}</div>
                    ))}
                </pre>
            </section>
        </>
    );
};

export default Exercicio8;
