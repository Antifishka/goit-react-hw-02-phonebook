import styled from '@emotion/styled';

export const BoxForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    box-sizing: border-box;
    border: 1px solid #010101;
    width: 280px;
    padding: 10px;
    margin-bottom: 30px;

    font-size: 16px;
`;

export const FieldForm = styled.label`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
`;

export const InputForm = styled.input`
    border: 1px solid #c9c5c5;
`;

export const BtnForm = styled.button`
    border: 1px solid #c9c5c5;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);

    transition: background-color 250ms linear;

    &:active{
        background-color: blue;
    }
`;