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
`;

export const SearchBar = styled.input`
    width: 290px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #E0E0E0;
`;

export const SearchButton = styled.button`
    width: 70px;
    border-radius: 8px;
    background-color: #27AE60;
    color: #FFFFFF;
    font-family: Font Awesome 5 Free;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    margin-right: 10px;
`;

export const CartButton = styled.button`
    width: 80px;
    border-radius: 8px;
    background-color: #27AE60;
    color: #FFFFFF;
    font-family: Font Awesome 5 Free;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    margin-right: 10px;
`;

export const LogoutButton = styled.button`
    width: 70px;
    border-radius: 8px;
    background-color: #E60000;
    color: #FFFFFF;
    font-family: Font Awesome 5 Free;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    margin-right: 10px;
`;