import LinkButton from '../LinkButton/LinkButton';
import './Header.css';

const Header = () => {
    return (
        <header className='cabecalho'>
            Criado por Jhonattan Willian Correia Silva
            <LinkButton url='./'> Voltar ao Início </LinkButton>
        </header>
    )
}

export default Header;