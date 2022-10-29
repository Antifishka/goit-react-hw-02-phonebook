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