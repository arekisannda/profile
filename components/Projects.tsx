import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components";
import { ColoredText, ContentContainerWrapper, Grid, GridHeader } from "./UI";
import { StyledIcon } from "./StyledIcon";
import Link from "next/link";

const Fade = require("react-reveal/Fade");
const data = require("../data.json");

const ProjectGrid = styled.div<any>`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`;

const ProjectBox = styled.div<any>`
    display: grid;
    background: ${props => props.theme.black};
    border-radius: .5em;
    color: ${props => props.theme.white};
    margin: .5em 0 .5em 0;
    padding: 1em;
    transition: height 1s ease-in-out;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.darkgrey};
    }
`;

const ProjectTitle = styled.h3<any>`
    float: left;
    padding: 0;
    margin: 0;

    grid-area:  1 / 1 / 1 / 11;
`;

const ProjectLinks = styled.div<any>`
    display: block;
    margin-left: auto;

    grid-area:  1 / 12 / 1 / 12;
`;

const ProjectInfo = styled.div<any>`
    display: ${props => props.hidden ? "none" : "grid" };
    grid-area:  2 / 1 / 2 / 12;
`;

const ProjectTagContainer = styled.div<any>`
    display: inline-block;
`;

const ProjectTag = styled.small<any>`
    margin-right: 1em;
`;

class ProjectEntry extends React.Component<any, any> {
    public render() {
        return (
            <ProjectBox onClick={this.props.switchVisible}>
                <ProjectTitle>
                    {this.props.title}
                </ProjectTitle>
                <ProjectLinks>
                    <Link href={this.props.github}>
                        <a><StyledIcon icon={["fab", "github"]} size="1x"/></a>
                    </Link>
                </ProjectLinks>
                <ProjectInfo hidden={!this.props.isVisible}>
                    <p>{this.props.description}</p>
                    <ProjectTagContainer>
                        {this.props.tags.map((t: string) => (
                            <ProjectTag>
                                <ColoredText color="red">{t}</ColoredText>
                            </ProjectTag>
                        ))}
                    </ProjectTagContainer>
                </ProjectInfo>
            </ProjectBox>
        );
    }
}

class Projects extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: null,
        };
        this.switchVisible = this.switchVisible.bind(this);
    }

    switchVisible(item: string) {
        if (this.state.visible === item) {
            this.setState({ visible: null });
        } else {
            this.setState({ visible: item });
        }
    }

    public render() {
        return (
            <ContentContainerWrapper id="projects">
                <Fade bottom>
                    <Grid>
                        <GridHeader>
                            <ColoredText color="green">Projects</ColoredText>
                        </GridHeader>
                        <ProjectGrid>
                            {data.projects.map((p: any) => (
                                <ProjectEntry key={p.name}
                                    switchVisible={() => this.switchVisible(p.name)}
                                    title={p.name}
                                    isVisible={this.state.visible === p.name}
                                    description={p.description}
                                    tags={p.tags}
                                    github={p.github}
                                />
                            ))}
                        </ProjectGrid>
                    </Grid>
                </Fade>
            </ContentContainerWrapper>
        );
    }
}

export default withTheme(Projects);
