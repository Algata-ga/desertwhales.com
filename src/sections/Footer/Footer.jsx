import style from "./Footer.module.css";
import logo from "../../assets/logo.png";
import {FiFacebook,FiInstagram,FiTwitter} from "react-icons/fi";
import {BsMedium} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";

const date = new Date();
        const year = date.getFullYear();

const Footer = () =>{
    return(
        <footer className={style.footerbg}>
            <div className={style.footer}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={style.quicklink}>
                    <h6>Quick Links</h6>
                    <ul className={style.ul}>
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                    </ul>
                </div>
                <div className={style.company}>
                    <h6>Company</h6>
                    <ul className={style.ul}>
                    
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                        <a className={style.a} href="#"><li className={style.li}>lorem</li></a>
                    </ul>
                </div>
                <div className={style.social}>
                    <h6>Social</h6>
                    <div className={style.links}>
                        <a className={style.a} href="#"><FiFacebook className={style.link}/></a><a href="#"><FiInstagram className={style.link}/></a><a href="#"><BsMedium className={style.link}/></a><a href="#"><FiTwitter className={style.link}/></a><a href="#"><FaTelegramPlane className={style.link}/></a>
                    </div>
                    <div className={style.subscribe}>
                        <h6>Lets do it</h6>
                        <input type="text" placeholder="Subscribe to newsletter" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className={style.line}>

            </div>
            <div className={style.copyright}>
                <h6>	© {year}  All rights reserved.</h6>
            </div>
        </footer>
        
    );
}

export default Footer;