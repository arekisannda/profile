import React from "react";

import Head from "next/head";
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default () => (
    <div>
        <Head>
            <title>Alexander Chan</title>
        </Head>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <div style={{ height: "250px" }}/>
    </div>
);
