import React from "react";
import Link from "next/link";
import styled from 'styled-components';
import theme from "../styles/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Fade = require("react-reveal/Fade");

const NavbarContainer = styled.div<any>`
    z-index: 1000;
    background: ${theme.black};
    height: 3em;
    display: ${props => props.hidden ? "none": "flex"};
    position: fixed;
    top: ${props => props.hide ? "-3em" : 0};
    left: 0;
    width: 100%;
    transition: top 0.25s ease-in-out;
`;

const NavbarLogo = styled.div<any>`
    margin: auto auto auto 1em;
    width: 2em;
    height: 2em;
`;

const NavbarImage = styled.a<any>`
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    text-align: center;
    width: 2em;
    height: 2em;
`;

const NavbarComponent = styled.a<any>`
    display: block;
    float: left;
    color: ${theme.foreground};
    text-align: center;
    padding: 1em 1em;
    text-decoration: none;

    &:not(.menu) {
        &:hover {
            background: ${theme.grey};
        }
    }

    @media screen and (min-width: 601px){
        &.menu { display: none }
    }

    @media screen and (max-width: 600px){
        &:not(.menu) { display: none }
    }
`;

const SideBarContainer = styled.div<any>`
    position: fixed;
    overflow: hidden;
    top: ${props => props.hide ? "-12em" : "3em" };
    left: 0;
    height: ${props => props.hide ? "0" : "100%" };
    width: 100%;
    z-index: 999;
    background: ${theme.black};
    color: ${theme.foreground};

    transition: top 0.25s ease-in-out;
`;

const SidebarComponent = styled.a<any>`
    display: block;
    color: ${theme.foreground};
    text-align: center;
    padding: 1em 1em;
    text-decoration: none;

    &:hover {
        background: ${theme.grey};
    }
`;

class Navbar extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            width: 0, height: 0, hidden: false, prevY: 0,
            showSidebar: false,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.updateScrollVisibility = this.updateScrollVisibility.bind(this);
        this.scrollToAnchor = this.scrollToAnchor.bind(this);
    }

    updateDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
            showSidebar: this.state.showSidebar && window.innerWidth < 600,
        });
    }

    updateScrollVisibility() {
        if (window.scrollY === 0 || window.scrollY < this.state.prevY) {
            this.setState({ hidden: false, prevY: window.scrollY, posY: 0 });
        } else if (window.scrollY > this.state.prevY) {
            this.setState({ hidden: true, prevY: window.scrollY });
        }
    }

    toggleSidebar() {
        this.setState({ showSidebar: !this.state.showSidebar });
    }

    componentDidUpdate() {
        document.body.style.overflow = this.state.showSidebar ? "hidden" : null;
    }

    scrollToAnchor(anchor: string) {
        const elem: HTMLElement | null = document.getElementById(anchor);
        if (!elem) {
            return;
        }
        elem.scrollIntoView();
        this.setState({ showSidebar: false });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("scroll", this.updateScrollVisibility);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("scroll", this.updateScrollVisibility);
    }

    public render() {
        return (
            <div>
                <NavbarContainer hide={this.state.hidden}>
                    <NavbarLogo>
                        <Link href="/">
                            <NavbarImage src="/static/img/logo.svg" />
                        </Link>
                    </NavbarLogo>
                    <NavbarComponent onClick={() => this.scrollToAnchor("about")}>About</NavbarComponent>
                    <NavbarComponent onClick={() => this.scrollToAnchor("experience")}>Experience</NavbarComponent>
                    <NavbarComponent onClick={() => this.scrollToAnchor("projects")}>Projects</NavbarComponent>
                    <Link href="/static/assets/resume.pdf">
                        <NavbarComponent>Resume</NavbarComponent>
                    </Link>
                    <NavbarComponent className="menu" onClick={() => this.toggleSidebar()}>
                        <FontAwesomeIcon icon={["fas", this.state.showSidebar ? "times" : "bars"]} fixedWidth />
                    </NavbarComponent>
                </NavbarContainer>
                <SideBarContainer hide={!this.state.showSidebar}>
                    <Fade top collapse when={this.props.visible}>
                        <SidebarComponent onClick={() => this.scrollToAnchor("about")}>About</SidebarComponent>
                        <SidebarComponent onClick={() => this.scrollToAnchor("experience")}>Experience</SidebarComponent>
                        <SidebarComponent onClick={() => this.scrollToAnchor("projects")}>Projects</SidebarComponent>
                        <Link href="/static/assets/resume.pdf">
                            <SidebarComponent>Resume</SidebarComponent>
                        </Link>
                    </Fade>
                </SideBarContainer>
            </div>
        );
    }
}

export default Navbar;
