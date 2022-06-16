import { ProductImage, ProductCard, ProductTitle } from './styles';

export default function Product({ title, src, alt }) {
    return (
        <ProductCard>
            <ProductImage src={src} alt={alt} />
            <ProductTitle>{title}</ProductTitle>
        </ProductCard>
    );
}