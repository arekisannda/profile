import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

class MyDocument extends Document<any> {
    static async getInitialProps({ renderPage }: any) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props}/>));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    public render() {
        return (
            <html>
                <Head>
                    <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}

export default MyDocument;
