import Header from '../../componentes/Header/Header';
import LinkButton from '../../componentes/LinkButton/LinkButton';
import './Inicio.css';

const Inicio = () => {
    return (
        <div>
            <Header className="headerInicio"/>
            <section className="inicio">
                <LinkButton url='./exercicio1'> Exercicio 1 </LinkButton>
                <LinkButton url='./exercicio2'> Exercicio 2 </LinkButton>
                <LinkButton url='./exercicio3'> Exercicio 3 </LinkButton>
                <LinkButton url='./exercicio4'> Exercicio 4 </LinkButton>
                <LinkButton url='./exercicio5'> Exercicio 5 </LinkButton>
                <LinkButton url='./exercicio6'> Exercicio 6 </LinkButton>
                <LinkButton url='./exercicio7'> Exercicio 7 </LinkButton>
                <LinkButton url='./exercicio8'> Exercicio 8 </LinkButton>
            </section>
        </div>
    )
}

export default Inicio;