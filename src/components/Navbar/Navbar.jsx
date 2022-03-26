import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Transition } from "react-transition-group";

const Navbar = () => {
    const [nav, setNav] = useState(false);
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
        <header className={style.header}>
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
                    <GiHamburgerMenu
                        onClick={() => {
                            if (nav == false) {
                                setNav(true);
                            } else {
                                setNav(false);
                            }
                        }}
                    />
                </div>
            </Container>
        </header>
    );
};

export default Navbar;

