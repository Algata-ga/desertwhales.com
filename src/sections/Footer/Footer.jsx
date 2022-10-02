import style from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-scroll";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
        <footer className={style.footerbg}>
            <div className={style.footer}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={style.quicklink}>
                    <h6>Services</h6>
                    <div className={style.ul}>
                        <Link
                            spy={false}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Services"
                        >
                            Funding
                        </Link>
                        <Link
                            spy={false}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Services"
                        >
                            Advisory
                        </Link>
                        <Link
                            spy={false}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Services"
                        >
                            Community Localization
                        </Link>
                        <Link
                            spy={false}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Services"
                        >
                            Partnership
                        </Link>
                        <Link
                            spy={false}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Services"
                        >
                            KOL/Influencers
                        </Link>
                    </div>
                </div>
                <div className={style.company}>
                    <h6>Resources</h6>
                    <div className={style.ul}>
                        <Link
                            spy={false}
                            smooth={true}
                            offset={0}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Home"
                        >
                            Home
                        </Link>

                        <Link
                            spy={false}
                            smooth={true}
                            offset={0}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="About"
                        >
                            About
                        </Link>

                        <Link
                            spy={false}
                            smooth={true}
                            offset={0}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Portfolio"
                        >
                            Portfolio
                        </Link>
                        <Link
                            spy={false}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            delay={250}
                            isDynamic={true}
                            to="Testimonials"
                        >
                            Testimonials
                        </Link>
                        <a className={style.a} href="#">
                            <li className={style.li}>Academy</li>
                        </a>
                    </div>
                </div>
                <div className={style.social}>
                    <h6>Social</h6>
                    <div className={style.links}>
                        <a href="https://medium.com/@desert_whales">
                            <BsMedium className={style.link} />
                        </a>
                        <a href="https://twitter.com/Desert_Whales">
                            <FiTwitter className={style.link} />
                        </a>
                        <a href="https://telegram.me/Desert_Whales_Chat">
                            <FaTelegramPlane className={style.link} />
                        </a>
                    </div>
                    <div className={style.subscribe}>
                        <h6>Lets do it</h6>
                        <input
                            type="text"
                            placeholder="Subscribe to newsletter"
                        />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className={style.line}></div>
            <div className={style.copyright}>
                <h6> © {year} All rights reserved.</h6>
            </div>
        </footer>
    );
};

export default Footer;

