import { CardHours, LateralImg, CentralContent, Description, CardHoursDetails, Icon, ContainerInfo } from './styles';

export default function OpeningHours() {
    return (
        <CardHours>
            <LateralImg src="./assets/images/lateral_fun.png" alt='' />
            <CentralContent>
                <div>
                    <Description>Horário de funcionamento</Description>
                    <Description>Donna Margherita Delivery</Description>
                </div>
                <CardHoursDetails>
                    <ContainerInfo>
                        <Icon src="./assets/images/icone_dias.png" />
                        <Description initialMargin="10px" size='30px'>Todos os dias</Description>
                    </ContainerInfo>
                    <ContainerInfo>
                        <Icon src="./assets/images/icone_horario.png" />
                        <Description initialMargin="10px" size='30px'>18h às 22:45hrs</Description>
                    </ContainerInfo>
                </CardHoursDetails>
            </CentralContent>
            <LateralImg src="./assets/images/lateral_fun.png" alt='' />
        </CardHours>
    );
}