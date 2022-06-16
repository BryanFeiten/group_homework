import { TitleGallery, GalleryContainer, Products } from './styles';
import Product from '../Product';
import Button from '../Button';

export default function Gallery() {
    return (
        <GalleryContainer>
            <TitleGallery>As mais desejadas</TitleGallery>
            <Products>
                <Product title="Camarão" src='./assets/images/camarao.png' alt=''/>
                <Product title="Calabresa" src='./assets/images/calabresa.png' alt=''/>
                <Product title="Carne Seca" src='./assets/images/carne_seca.png' alt=''/>
                <Product title="Chicago" src='./assets/images/chicago.png' alt=''/>
            </Products>
            <Button>QUERO PEDIR</Button>
        </GalleryContainer>
    );
}