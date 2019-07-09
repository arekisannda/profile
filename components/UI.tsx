import React from "react";
import styled from "styled-components";
import TrackVisibility from "react-on-screen";

const ColoredText= styled.span<any>`
    color: ${props => props.theme[props.color || "white"] };
`;

const ContentContainer = styled.div<any>`
    display: block;
    padding-top: 3em;
    padding-bottom: 3em;
    margin: auto;
    width: 80%;

    @media screen and (min-width: 1000px){
        width: 60%;
    }

    @media screen and (min-width: 1200px){
        width: 50%;
    }

    @media screen and (min-width: 1500px){
        width: 40%;
    }
`;


const ContentContainerWrapper = styled(ContentContainer)<any>`
    padding: 5em 0 10em 0;
`;

const Grid = styled.div<any>`
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
`;

const GridHeader = styled.h2<any>`
    grid-area: 1 / 1 / 1 / 2;
`;

class VisibleComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    componentDidUpdate(oldProps: any) {
        if (this.state.visible) {
            return ;
        }

        if (oldProps.isVisible === false && this.props.isVisible === true) {
            this.setState({ visible: true });
        }
    }

    public render() {
        return (
            <div style={{ visibility: this.state.visible ? "visible" : "hidden" }}>
                {this.props.children}
            </div>
        );
    }
}

const TrackedComponent = (props: any) => {
    return (
        <TrackVisibility once offset={props.offset}>
            <VisibleComponent>
                {props.children}
            </VisibleComponent>
        </TrackVisibility>
    );
};

export {
    ColoredText,
    ContentContainer,
    ContentContainerWrapper,
    TrackedComponent,
    Grid,
    GridHeader,
};
