import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll'; 


export const Container = styled.div `
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    ${'' /* overflow: hidden; */}
    background: linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`;

export const FormWrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    };
`;

export const Icon = styled(Link) `
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-right: 8px;
    };
`;

export const FormContent = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    };
`;

export const Form = styled.form `
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    margin-top: -6em;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    };
`;

export const FormH1 = styled.h1 `
    margin-bottom: 2em;
    color: #fff;
    font-size: 2em;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label `
    margin-bottom: 8px;
    font-size: 1em;
    color: #fff;
`;

export const ConfirmLabel = styled.label `
    margin-bottom: 8px;
    font-size: 1em;
    color: #fff;
    text-align: center;

`;


export const ConfirmLabelSecondary = styled.label `
    margin-bottom: 8px;
    font-size: 1em;
    font-style: italic;
    color: #fff;
    text-align: center;

`;


export const FormInput = styled.input `
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormInputPara = styled.textarea `
    rows: 20;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;


export const FormButton = styled(Link)`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 8px;

`;

export const FormButtonSecondary = styled(Link) `
    background: #fff;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #01bf71;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 8px;

`;


export const FormLink = styled(Link)`
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 24px;

`


export const BtnLink = styled(LinkRouter) `
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1.75em;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-align: center;
    margin-top: 1em;

    &:hover {
        transitions: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`;

export const BtnLinkSecondary = styled(LinkRouter) `
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1.75em;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-align: center;
    margin-top: 1em;

    &:hover {
        transitions: all 0.2s ease-in-out;
        background: #01bf71;
        color: #010606;
    }

`;