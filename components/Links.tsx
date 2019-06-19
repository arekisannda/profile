import React from "react";
import theme from "../styles/main";
import Link from "next/link";
import styled from "styled-components";
import { StyledIcon, StyledIconContainer } from "./StyledIcon";

const PaddedStyledIcon = styled(StyledIcon)`
    padding-bottom: .75em;
`;

class QuickContact extends React.Component<any, any> {
    public render() {
        return (
            <StyledIconContainer>
                <Link href="https://github.com/arekisannda" passHref>
                    <a title="GitHub">
                        <PaddedStyledIcon color={theme.red} icon={["fab", "github"]} fixedWidth/>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/arekisannda/" passHref>
                    <a title="LinkedIn">
                        <PaddedStyledIcon color={theme.blue} icon={["fab", "linkedin"]} fixedWidth/>
                    </a>
                </Link>
                <Link href="mailto:arekisannda.k.chan@gmail.com" passHref>
                    <a title="Mail">
                        <PaddedStyledIcon color={theme.green} icon={["fas", "envelope"]}  fixedWidth/>
                    </a>
                </Link>
            </StyledIconContainer>
        )
    }
}

export default QuickContact;
