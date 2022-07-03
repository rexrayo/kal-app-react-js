import styled from "styled-components";

export const StyleOpacity = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 100px;
    font-size: 0;
    &:hover,
    &:focus {
        font-size: 15px;
        background-color: #646464;
        opacity: 0.5;
    }
`;