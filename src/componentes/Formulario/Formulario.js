import Botao from '../Botao/Botao';
import InputTexto from '../InputTexto/InputTexto';
import './Formulario.css';

const Formulario = ({ inputs, aoCalcular }) => {
    return (
        <section className='formulario'>
            <form onSubmit={aoCalcular}>
                <h2>Preencha os dados para calculo do salário</h2>
                {/* Mapeando inputs dinamicamente */}
                {inputs.map((input, index) => (
                    <InputTexto
                        key={index}
                        obrigatorio={input.obrigatorio}
                        label={input.label}
                        placeholder={input.placeholder}
                        valor={input.valor}
                        aoAlterar={input.aoAlterar}
                    />
                ))}
                <Botao>
                    Calcular
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
