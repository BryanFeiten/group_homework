import Button from '../Button';
import { LogoHeader, Contact, HeaderContainer, ContactPhone } from './styles';

export default function Header() {
    return (
        <HeaderContainer>
            <LogoHeader src="./assets/images/logo_cabecalho.png" alt="" />
            <LogoHeader src="./assets/images/delivery.png" alt="teste"/>
            <Contact>
                <Button>QUERO PEDIR</Button>
                <ContactPhone href="tel:555135555555">51 3555-5555</ContactPhone>
            </Contact>
        </HeaderContainer>
    );
}