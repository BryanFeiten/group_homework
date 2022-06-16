import { ContainerAboutUs, AboutUs, Adjectives, DescriptionAbout } from './styles.jsx';
import Button from '../Button/index.jsx';

export default function About() {
    return (
        <ContainerAboutUs>
            <AboutUs>
                <Adjectives>
                    ITALIANA<br />
                    ARTESANAL<br />
                    LEVE<br />
                    GOSTOSA<br />
                </Adjectives>
                <div>
                    <DescriptionAbout>
                        Se você quer uma pizza assim, achou!<br />
                        Somos <strong>a Donna Margherita! Uma pizzaria com 20<br />
                            anos de experiência, de produção artesanal, técnica<br />
                            italiana e pizzaiolos experientes!</strong>
                    </DescriptionAbout>
                    <br />
                    <DescriptionAbout>
                        Conhecida por produzir pizzas super saborosas,<br />
                        também nos amam por termos <strong>o melhor rodízio de<br />
                            pizza de Belo Horizonte</strong> e que, agora, levará até a<br />
                        sua casa os seus sabores favoritos!<br />
                        <strong>Vamos de pizza hoje?</strong>
                    </DescriptionAbout>
                </div>
            </AboutUs>
            <Button>PEÇA PELO SITE</Button>
        </ContainerAboutUs>
    );
}