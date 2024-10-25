import Header from '../../componentes/Header/Header';
import LinkButton from '../../componentes/LinkButton/LinkButton';
import './Inicio.css';

const Inicio = () => {
    return (
        <div>
            <Header />
            <section>
                <LinkButton url='./exercicio1'> Exercicio 1 </LinkButton>
                <LinkButton url='./exercicio2'> Exercicio 2 </LinkButton>
                <LinkButton url='./exercicio3'> Exercicio 3 </LinkButton>
                <LinkButton url='./exercicio4'> Exercicio 4 </LinkButton>
                <LinkButton url='./exercicio5'> Exercicio 5 </LinkButton>
                <LinkButton url='./exercicio6'> Exercicio 6 </LinkButton>
            </section>
        </div>
    )
}

export default Inicio;