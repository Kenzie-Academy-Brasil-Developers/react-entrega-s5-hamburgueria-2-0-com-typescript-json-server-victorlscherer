
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 280px;
    height: 300px;
    border-radius: 5px;
    border: 2px solid #27AE60;
    padding-left: 20px;
    margin: 20px;
`;

export const ProductName = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #333333;
`;

export const ProductCategory = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #828282;
`;

export const ProductPrice = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #27AE60;
`;

export const AddButton = styled.button`
    background-color: #27AE60;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    padding: 0px 20px 0px 20px;
    width: 106px;
    height: 40px;
    border-radius: 8px;
`;