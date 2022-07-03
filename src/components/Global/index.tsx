import styled, { createGlobalStyle, keyframes } from "styled-components";
import dot_dark from "../../assets/Images/dot_dark.png";
import dot from "../../assets/Images/dot.png";
import { labelProps } from "../../interfaces";
import kal_black from '../../assets/Images/kal-black.png'
import kal from '../../assets/Images/kal.png'

const dropIn = keyframes`
    from {
        transform: translateY(-500px);
    }

    to {
        transform: translateY(0);
    }  
`;

export const Background =  createGlobalStyle`
    body{
        background: ${props => props.theme.colors.background};
        background-image: url(${props => props.theme.dark ? dot_dark : dot});
    }
`;

export const Container = styled.div`
    margin: 10px;
`;

export const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    @media (max-width: 350px) {
        width: -webkit-fill-available;
    }
`;

export const StyledInput = styled.input`
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.surface};
    margin: 20px 0px 20px 0px;
    border: none;
    border-radius: 10px;
    line-height: 1.8;
    padding-left: 5px;
    box-shadow: 0 0 8px 0 ${props => props.theme.colors.shadow};

    :focus {
        outline: 2.5px solid ${props => props.theme.colors.primary};
    }
`;

export const StyledLabel = styled.label<labelProps>`
    text-align: ${props => props.align} || 'center';
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.text};
`;

export const SignTextMode = styled.span`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.common.gray};
    cursor: pointer;
    margin-top: 20px;
`;

export const StyledButton = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.large};
    margin: 10px;
    padding: 5px;
    border-radius: 20px;
    width: 50%;
    align-self: center;
    cursor: pointer;
`;

export const Logo: React.FC = styled.img.attrs(props => ({
    src: props.theme.dark ? kal : kal_black,
    }))`
    width: 150px;
    height: 150px;
    margin-bottom: 50px;
    margin-top: 50px;
    resize-mode: contain;
    animation: ${dropIn} 1s ease forwards;
`;