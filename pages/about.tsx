import React from "react";
import Link from "next/link";
import Header from "../components/header";

interface Props {
    isServer: Boolean;
}

class AboutPage extends React.Component<Props> {
    static getDefaultProps() {
        const isServer = typeof window === "undefined";
        return { isServer };
    }

    render() {
        return (
        <main>
            <Header />
            <section>
            <p>
                This is another page of the SSR example, you accessed it{" "}
                <strong>{this.props.isServer ? "server" : "client"} side</strong>.
            </p>
            <p>
                You can reload to see how the page change.
            </p>
            <Link href="/">
                <a>Go to Home</a>
            </Link>
            </section>
        </main>
        );
    }
}

export default AboutPage;
