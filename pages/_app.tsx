import { NextComponentType, NextContext } from "next";
import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import Navbar from "../components/Navbar";
import mainTheme from "../styles/main";
import Links from "../components/Links";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope, faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

library.add(
    faBars,
    faGithub,
    faLinkedin,
    faEnvelope,
    faAngleDoubleRight,
    faTimes,
)

interface Props {
    Component: NextComponentType;
    ctx: NextContext;
}

class MyApp extends App<Props> {
    public static async getInitialProps({ Component, ctx }: Props) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    public render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <GlobalStyle/>
                <Navbar/>
                <Links />
                <ThemeProvider theme={mainTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        );
    }
}

export default MyApp;
