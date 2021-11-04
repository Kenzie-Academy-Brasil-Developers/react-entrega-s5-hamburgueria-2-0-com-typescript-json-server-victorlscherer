import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import CartCard from "../../Components/CartCard";
import { CartContext } from "../../Providers/Cart";
import { ProductsContainer, HeaderContainer, RestaurantName, ButtonsContainer, SearchBar, SearchButton, ProdutosButton, LogoutButton } from "./styled";


const Cart = () => {

    const { cart, removeFromCart } = useContext(CartContext);


    const finalValue = cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0)


    const history = useHistory();

    return (
        <div>
            <HeaderContainer>
                <RestaurantName>Lanchonete do Victor</RestaurantName>
                <ButtonsContainer>
                    <RestaurantName>Carrinho</RestaurantName>
                    <ProdutosButton onClick={() => history.push("/home")} >Loja</ProdutosButton>
                </ButtonsContainer>
            </HeaderContainer>
            <ProductsContainer>
                {cart.map((product) => {
                    return <CartCard product={product} />
                })}
            </ProductsContainer>
            <HeaderContainer>
                <RestaurantName>Total: {finalValue}</RestaurantName>
            </HeaderContainer>
        </div>
    )
};

export default Cart;