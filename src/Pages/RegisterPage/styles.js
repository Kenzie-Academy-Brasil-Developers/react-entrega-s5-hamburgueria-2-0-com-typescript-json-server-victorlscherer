import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 2px #F5F5F5 solid;
    border-radius: 5px;
    height: 461px;
    width: 500px;
    padding: 26px 24px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 452px;
        height: 60px;
        margin-top: 10px;
        border-radius: 8px;
    }

    button {
        width: 452px;
        height: 60px;
        margin-top: 10px;
        border-radius: 8px;
        padding: 0px 40px 0px 40px;
        background-color: #219653;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 600px;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        padding: 0px 40px 0px 40px;
        border-radius: 8px;
        border: 0px;
        background-color: #F5F5F5;
        font-size: 16px;
        font-weight: 600px;
        margin: 10px;
    }
`