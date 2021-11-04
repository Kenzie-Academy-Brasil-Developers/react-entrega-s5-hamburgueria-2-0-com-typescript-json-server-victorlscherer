import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #F5F5F5;
`;

export const RestaurantName = styled.p`
    font-size: 25px;
    margin-left: 15px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProdutosButton = styled.button`
    width: 80px;
    height: 60px;
    border-radius: 8px;
    background-color: #27AE60;
    color: #FFFFFF;
    font-family: Font Awesome 5 Free;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    margin-right: 10px;
    margin-left: 20px;
`;

