import styled from '@emotion/styled';

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 280px;
    font-size: 16px;
`;

export const InputFilter = styled.input`
    border: 1px solid #c9c5c5;
`;

export const BtnFilter = styled.button`
    border: 1px solid #c9c5c5;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);

    transition: background-color 250ms linear;

    &:active{
        background-color: blue;
    }
`;