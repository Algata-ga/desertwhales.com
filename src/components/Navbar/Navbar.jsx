import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [side, setSide] = useState(true);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            window.matchMedia("(max-width:769px)").matches
        ) {
            window.onscroll = () => setSide(false);
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
        <nav className={style.header}>
            <Container className={style.dflex}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={nav ? style.close : style.open}>
                    <Link
                        spy={false}
                        onClick={() => setNav(true)}
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={250}
                        isDynamic={true}
                        className={style.link}
                        to="Home"
                    >
                        Home
                    </Link>
                    <Link
                        spy={false}
                        smooth={true}
                        onClick={() => setNav(true)}
                        offset={0}
                        duration={500}
                        delay={250}
                        isDynamic={true}
                        className={style.link}
                        to="About"
                    >
                        About
                    </Link>
                    <Link
                        spy={false}
                        smooth={true}
                        onClick={() => setNav(true)}
                        offset={0}
                        duration={500}
                        delay={250}
                        isDynamic={true}
                        className={style.link}
                        to="Services"
                    >
                        Services
                    </Link>
                    <Link
                        spy={false}
                        smooth={true}
                        onClick={() => setNav(true)}
                        offset={-10}
                        duration={500}
                        delay={250}
                        isDynamic={true}
                        className={style.link}
                        to="Blogs"
                    >
                        Blogs
                    </Link>
                </div>
                <div className={style.hamburger}>
                    <button
                        className={nav ? style.btn : style.active}
                        onClick={() => {
                            setNav(!nav);
                        }}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
