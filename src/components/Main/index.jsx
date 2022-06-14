import Button from "../Button";
import { MainContent, Name, Promo, TheBest } from "./styles";

export default function Main() {
    return (
        <MainContent>
            <Name>
                Donna Margherita Pizzeria.
            </Name>
            <TheBest>
                A melhor e mais saborosa pizza de Belo Horizonte.
            </TheBest>
            <Promo>
                Aproveite nossa promoções!
            </Promo>
            <Button>CARDÁPIO DELIVERY</Button>
        </MainContent>
    );
}