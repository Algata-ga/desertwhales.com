import style from "./Footer.module.css";
import logo from "../../assets/logo.png";
import {FiFacebook,FiInstagram,FiTwitter} from "react-icons/fi";
import {BsMedium} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";


const Footer = () =>{
    return(
        <footer className={style.footerbg}>
            <div className={style.footer}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={style.quicklink}>
                    <h6>Quick Links</h6>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>
                <div className={style.company}>
                    <h6>Company</h6>
                    <ul>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </ul>
                </div>
                <div className={style.social}>
                    <h6>Social</h6>
                    <div className={style.links}>
                        <FiFacebook className={style.link}/><FiInstagram className={style.link}/><BsMedium className={style.link}/><FiTwitter className={style.link}/><FaTelegramPlane className={style.link}/>
                    </div>
                    <div className={style.subscribe}>
                        <h6>Lets do it</h6>
                        <input type="text" placeholder="email" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;