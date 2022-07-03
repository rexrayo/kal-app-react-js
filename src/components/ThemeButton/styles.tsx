import styled from "styled-components";
import { FaRegSun } from "react-icons/fa";

export const Icon = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    float: right;
    position: absolute;
    right: 0;
    margin-right: 1em;
`;
    
export const ThemeIcon = styled(FaRegSun)`
    width: 30px;
    height: 30px;
    color: ${props => props.theme.colors.text};
`;