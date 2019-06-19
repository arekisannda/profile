import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";
import { ColoredText, ContentContainerWrapper, Grid, GridHeader } from "./UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Fade = require("react-reveal/Fade");
const data = require("../data.json");

const ProfileImage = styled.img<any>`
    display: inline-block;
    background-image: url(${props => props.src});
    height: 150px;
    width: 150px;
    border-radius: 10em;
    margin: 1px;

    border-color: ${props => props.theme.blue };
    border-style: solid;
    border-width: 5px;

    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);

    &:hover {
        border-color: ${props => props.theme.cyan };
    }
`;

const AboutText = styled.div<any>`
    @media screen and (max-width: 800px){
        grid-area: 3 / 1 / 3 / 2;
    }

    @media screen and (min-width: 800px){
        grid-area: 2 / 1 / 2 / 1;
    }
`;

const AboutImage = styled.div<any>`
    margin: auto;

    @media screen and (max-width: 800px){
        grid-area: 2 / 1 / 2 / 2;
    }

    @media screen and (min-width: 800px){
        grid-area: 2 / 2 / 2 / 2;
    }
`;

const SkillGrid = styled.div<any>`
    font-size: .9em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

class About extends React.Component<any, any> {
    public render() {
        return (
            <ContentContainerWrapper id="about">
                <Fade bottom>
                    <Grid>
                        <GridHeader>
                            <ColoredText color="green">About Me</ColoredText>
                        </GridHeader>
                        <AboutText>
                            <div>
                                <p>
                                    I am software engineer based in San Francisco, CA, who enjoys developing software
                                    and learning about new technologies.
                                    After graduating from <ColoredText color="yellow">University of California, Irvine</ColoredText>, with a B.S. in Computer Science,
                                    I had worked as a bookkeeper, but I have now transitioned back into the tech space.
                                </p>
                                <p>
                                    Here are some technologies I have been working with:
                                </p>
                                <SkillGrid>
                                    {data.skills.map((skill: string) => (
                                        <div key={skill}><FontAwesomeIcon icon={["fas", "angle-double-right"]} size="xs"/> {skill}</div>))}
                                </SkillGrid>
                            </div>
                        </AboutText>
                        <AboutImage>
                            <Link href="https://github.com/arekisannda">
                                <a>
                                    <ProfileImage src="/static/img/squared.jpg" alt="image" />
                                </a>
                            </Link>
                        </AboutImage>
                    </Grid>
                </Fade>
            </ContentContainerWrapper>
        );
    }
}

export default withTheme(About);
