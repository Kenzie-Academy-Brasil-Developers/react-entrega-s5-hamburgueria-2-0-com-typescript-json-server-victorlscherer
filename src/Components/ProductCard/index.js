import { useContext } from 'react';
import { CartContext } from '../../Providers/Cart';
import { Container, ProductName, ProductCategory, ProductPrice, AddButton } from './styled';

const ProductCard = ({ product }) => {

    const { id, name, category, price } = product;

    const { addToCart } = useContext(CartContext);

    return (
        <Container>
            <ProductName>{name}</ProductName>
            <ProductCategory>{category}</ProductCategory>
            <ProductPrice>{price}</ProductPrice>
            <AddButton onClick={() => addToCart(product)} >Adicionar</AddButton>
        </Container>
    )
};

export default ProductCard;