import HeaderStyles from "./HeaderStyles";
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

const Header = () => {

    const currentDate = format(new Date(),'EEEEEE, d MMMM',{
        locale: ptBR
    })


    return (
        <HeaderStyles>
            <img src="/logo.svg" alt="logo"/>
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
        </HeaderStyles>
    );
}

export default Header;