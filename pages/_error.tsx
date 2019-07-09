import React from "react";
import styled from "styled-components";
import { Grid, ContentContainer } from "../components/UI";
import theme from  "../styles/main";
import Link from "next/link";

const ReturnButton = styled.button<any>`
    font-size: 1em;
    margin: 0;
    padding: 0.25em 1em;
    border-radius: 3px;
    background: rgb(0, 0, 0, 0);
    color: ${theme.white};
    border: 2px solid ${theme.white};

    &:hover {
        cursor: pointer;
        color: ${theme.yellow};
        border: 2px solid ${theme.yellow};
    }
`;

const ErrorMessageGrid = styled.div<any>`
    margin: auto;
    padding: auto;
`;

const ErrorMessage = styled.h1<any>`
    margin: auto;
`;

const ErrorButton= styled.div<any>`
    margin:  auto;
    padding: 1em;
`;

class MyError extends React.PureComponent<any> {
    public render() {
        return (
            <ContentContainer>
                <ErrorMessageGrid>
                    <Grid>
                        <ErrorMessage><big>404</big></ErrorMessage>
                        <ErrorMessage>Page Not Found</ErrorMessage>
                        <ErrorButton>
                            <Link href="/">
                                <ReturnButton>Go Back</ReturnButton>
                            </Link>
                        </ErrorButton>
                    </Grid>
                </ErrorMessageGrid>
            </ContentContainer>
        );
    }
}

export default MyError;
