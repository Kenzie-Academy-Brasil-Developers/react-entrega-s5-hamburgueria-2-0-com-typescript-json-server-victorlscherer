import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProductCard from "../../Components/ProductCard";
import { AuthContext } from "../../Providers/Auth";
import { ProductsContainer, HeaderContainer, RestaurantName, ButtonsContainer, SearchBar, SearchButton, CartButton, LogoutButton } from './styles';


const Home = () => {

    const { logout } = useContext(AuthContext);

    const history = useHistory()

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        axios.get("https://lanchonete-do-victor.herokuapp.com/products/")
            .then((response) => setProductsList(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>

            <HeaderContainer>
                <RestaurantName>Lanchonete do Victor</RestaurantName>
                <ButtonsContainer>
                    <SearchBar placeholder="Digite o nome do produto" />
                    <SearchButton>Buscar</SearchButton>
                    <CartButton onClick={() => history.push("/cart")} >Carrinho</CartButton>
                    <LogoutButton onClick={() => { logout() }} >Sair</LogoutButton>
                </ButtonsContainer>
            </HeaderContainer>

            <ProductsContainer>
                {productsList.map((product) => {
                    return <ProductCard product={product} />
                })}
            </ProductsContainer>
        </div>
    )
};

export default Home;