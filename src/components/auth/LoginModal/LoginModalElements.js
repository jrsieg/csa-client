import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {MdClose} from 'react-icons/md'


export const Background = styled.div `
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalWrapper = styled.div `
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
    z-index: 10;
    border-radius: 10px;
`

export const ModalImg = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`

export const ModalContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem;
    }

    button {

        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`;

export const CloseModalButton = styled(MdClose) `
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    background: #141414;
   
`;

export const Form = styled.form `
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    };
`;

export const FormH1 = styled.h1 `
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label `
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input `
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button `
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const FormLink = styled(Link)`
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 24px;

`


export const Text = styled.span `
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`
