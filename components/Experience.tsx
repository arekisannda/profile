import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";
import { ColoredText, ContentContainerWrapper, Grid, GridHeader } from "./UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Fade = require("react-reveal/Fade");
const data = require("../data.json");

const ExperienceGrid = styled.div<any>`
    display: grid;
`;

const ExperienceMenu = styled.div<any>`
    grid-area: 1 / 1 / 1 / 1;
    grid-auto-flow: row;
    padding: 0;
    margin-top: 1em;

    @media screen and (max-width: 600px){
        grid-auto-flow: column;
    }
`;

const ExperienceItem = styled.div<any>`
    display: block;
    padding: 1em;
    color: ${props => props.active ? props.theme.yellow : props.theme.white };
    transition: background 0.2s ease-in-out;

    &:hover {
        background: ${props => props.theme.black};
    }

    @media screen and (max-width: 600px){
        display: inline;

        &:not(:last-child) {
            margin-right: 1em;
        }
    }
`;

const ExperienceInfoGrid = styled.div<any>`
    display: grid;
    grid-template-columns: 10px auto;
`;

const ExperienceInfoContainer = styled.div<any>`
    margin-left: 1em;
    grid-area: 1 / 2 / 1 / 4;

    @media screen and (max-width: 600px){
        margin-left: 0;
        margin-top: 1em;
        grid-area: 2 / 1 / 2 / 1;
    }
`;

const ExperienceDescription = styled.div<any>`
    float: left;
    display: block;
    margin-right: auto;
    text-align: left;
    padding: 0 0 1em 1em;
    grid-area: 1 / 2 / 1 / 2;
`;

class ExperienceInfo extends React.Component<any> {
    public render() {
        return (
            <div style={{visibility: this.props.active ? "visible" :"hidden"}}>
                <Fade clear when={this.props.active}>
                    <div>
                        <h3>
                            <span>
                                <ColoredText color="red">{this.props.position}</ColoredText>
                                &nbsp;@ {this.props.company}
                            </span>
                        </h3>
                        <p>
                            <ColoredText color="blue">{this.props.duration}</ColoredText>
                        </p>
                        {(this.props.description || []).map((d: any) => (
                            <ExperienceInfoGrid className="info" >
                                <FontAwesomeIcon icon={["fas", "angle-double-right"]} size="xs" />
                                <ExperienceDescription>{d}</ExperienceDescription>
                            </ExperienceInfoGrid>
                        ))}
                    </div>
                </Fade>
            </div>
        );
    }
}

class Experience extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            focus: 0,
        };
        this.changeItemFocus = this.changeItemFocus.bind(this);
    }

    changeItemFocus(item: number) {
        if (this.state.focus === item) {
            return;
        }
        this.setState({ focus: item });
    }

    public render() {
        return (
            <ContentContainerWrapper id="experience">
                <Fade bottom>
                    <Grid>
                        <GridHeader>
                            <ColoredText color="green">Work Experience</ColoredText>
                        </GridHeader>
                        <ExperienceGrid>
                            <ExperienceMenu>
                                {data.experiences.map((e: any, ind: number) => (
                                    <ExperienceItem
                                        onClick={() => this.changeItemFocus(ind)}
                                        active={this.state.focus === ind}>
                                        <span>{e.id}</span>
                                    </ExperienceItem>
                                ))}
                            </ExperienceMenu>
                            {data.experiences.map((e: any, ind: number) => (
                                <ExperienceInfoContainer>
                                    <ExperienceInfo active={this.state.focus === ind} {...e} />
                                </ExperienceInfoContainer>
                            ))}
                        </ExperienceGrid>
                    </Grid>
                </Fade>
            </ContentContainerWrapper>
        );
    }
}

export default withTheme(Experience);
