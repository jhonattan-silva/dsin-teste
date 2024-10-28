import { useState } from "react";
import Formulario from "../../componentes/Formulario/Formulario";
import Header from "../../componentes/Header/Header";

const Exercicio7 = () => {
    const [texto1, setTexto1] = useState('');
    const [texto2, setTexto2] = useState('');
    const [resultado, setResultado] = useState('');

    const aoFormatarTitulo = (evento) => {
        evento.preventDefault();

        // Calcula o tamanho dos textos para pegar o maior e formar a "borda"
        const larguraTexto = Math.max(texto1.length, texto2.length) + 6; // Adiciona uma margem para centralizar (qtd de espaços)

        // Gerar a linha de borda com base na largura calculada
        const borda = '|'.repeat(larguraTexto+4);
        const espacosTexto1 = Math.floor((larguraTexto - texto1.length) / 2);
        const espacosTexto2 = Math.floor((larguraTexto - texto2.length) / 2);

        // Centraliza os textos e cria as bordas
        const linhaTexto1 = `||${' '.repeat(espacosTexto1)}${texto1}${' '.repeat(espacosTexto1)}||`;
        const linhaTexto2 = `||${' '.repeat(espacosTexto2)}${texto2}${' '.repeat(espacosTexto2)}||`;

        // Formata o resultado final com as bordas e os textos centralizados e tudo maiusculo
        const resultadoFormatado = `${borda}\n${linhaTexto1}\n${linhaTexto2}\n${borda}`.toUpperCase();
        setResultado(resultadoFormatado);

        // Limpar os textos após formatar
        setTexto1('');
        setTexto2('');
    };

    const inputs = [
        {
            obrigatorio: true,
            label: "Texto Superior",
            placeholder: "Digite o texto da parte superior",
            valor: texto1,
            aoAlterar: setTexto1
        },
        {
            obrigatorio: true,
            label: "Texto Inferior",
            placeholder: "Digite o texto da parte inferior",
            valor: texto2,
            aoAlterar: setTexto2
        }
    ];

    return (
        <>
            <Header />
            <section>
                <h1>7) Formatação de Título Centralizado</h1>
                <Formulario inputs={inputs} aoCalcular={aoFormatarTitulo} />
                <pre style={{ textAlign: 'center', fontSize: '32px' }}>
                    {resultado}
                </pre>
            </section>
        </>
    );
};

export default Exercicio7;
