import React from "react";
import styled, { withTheme } from "styled-components";
import { ColoredText, ContentContainer, TrackedComponent } from "./UI";
const Fade = require("react-reveal/Fade");

const IntroContainer = styled(ContentContainer)<any>`
    display: block;
    flex-direction: column;
    justify-content: center;
    padding: 10em 0 30em 0;
    margin: auto;

    @media screen and (max-width: 800px){
        width: 100%;
    }

    @media screen and (min-width: 800px){
        width: 100%;
    }

    @media screen and (max-height: 600px){
        padding: 5em 0 30em 0;
    }
`;

const SubText = styled.p<any>`
    display: block;
    float: left;
    width: 100%;

    @media screen and (min-width: 820px){
        width: 50%;
    }
`;

const SizedText = styled(ColoredText)<any>`
    font-size: 5em;
    font-weight: 900;
  `;

class Intro extends React.PureComponent<any>{
    public render() {
        return (
            <IntroContainer>
                <TrackedComponent>
                    <ContentContainer>
                        <Fade cascade bottom>
                            <h3>
                                <ColoredText>Well, hello there.</ColoredText> The name is...
                            </h3>
                            <SizedText color="yellow">Alexander Chan.</SizedText><br/>
                            <ColoredText color="foreground"></ColoredText>
                            <SubText>
                                I am a software engineer based in San Francisco, CA, focusing on backend development
                                and infrastucture.
                            </SubText>
                        </Fade>
                    </ContentContainer>
                </TrackedComponent>
            </IntroContainer>
        );
    }
}

export default withTheme(Intro);
