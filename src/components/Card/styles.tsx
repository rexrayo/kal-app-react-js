import styled from "styled-components";


export const StyledCard = styled.div`
    background-color: ${props => props.theme.colors.surface};
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    border-radius: 20px;
    padding: 30px;
`;