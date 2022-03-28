import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

const Navbar = () => {
    const [nav, setNav] = useState(
        () => !window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => setNav(false);
        }
    }, []);

    const defaultStyle = {
        transition: "all 1s ease-in-out",
        opacity: 1,
    };

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };
    return (
        <header
            className={style.header}
            onScroll={() => {
                console.log("Scrolled H");
            }}
        >
            <Container className={style.dflex}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <Transition in={nav} timeout={1000}>
                    {(state) => (
                        <div
                            className={style.links + " " + style.hamburger_menu}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                            onScroll={() => {
                                console.log("Scrolled M");
                            }}
                        >
                            <Link className={style.link} to="#">
                                Home
                            </Link>
                            <Link className={style.link} to="#About">
                                About
                            </Link>
                            <Link className={style.link} to="#Service">
                                Services
                            </Link>
                            <Link className={style.link} to="#Blog">
                                Blogs
                            </Link>
                        </div>
                    )}
                </Transition>
                <div className={style.hamburger}>
                    <GiHamburgerMenu onClick={() => setNav(!nav)} />
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
