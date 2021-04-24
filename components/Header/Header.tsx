import HeaderStyles from "./HeaderStyles";
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import Link from "next/link";

const Header = () => {

    const currentDate = format(new Date(),'EEEEEE, d MMMM',{
        locale: ptBR
    })


    return (
        <HeaderStyles>
            <Link href="/">
            <img src="/logo.svg" alt="logo"/>
            </Link>
            <p>O melhor para você ouvir, sempre</p>
            <span>{currentDate}</span>
        </HeaderStyles>
    );
}

export default Header;