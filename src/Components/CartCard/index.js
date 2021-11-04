import { useContext } from 'react';
import { CartContext } from '../../Providers/Cart';
import { Container, ProductName, ProductCategory, ProductPrice, RemoveButton } from './styled';

const ProductCard = ({ product }) => {

    const { id, name, category, price } = product;

    const { removeFromCart } = useContext(CartContext);

    return (
        <Container>
            <ProductName>{name}</ProductName>
            <ProductCategory>{category}</ProductCategory>
            <ProductPrice>{price}</ProductPrice>
            <RemoveButton onClick={() => removeFromCart(product)} >Remover</RemoveButton>
        </Container>
    )
};

export default ProductCard;