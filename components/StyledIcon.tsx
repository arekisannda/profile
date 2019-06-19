import theme from "../styles/main";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIconContainer = styled.div<any>`
    position: fixed;
    bottom: 10px;
    left: 15px;
    padding: 0;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    display: block;
    color: ${props => props.color || theme.white};
    border: 0;
    margin: 0;
    padding: 0;

    &:hover {
        &:not(fixed) {
            color: ${theme.white};
            -webkit-transform: translateY(-3px);
            -ms-transform:     translateY(-3px);
            transform:         translateY(-3px);
            animation: 3s linear .1s colorIt;
        }
    }
`;

export {
    StyledIcon,
    StyledIconContainer,
};
