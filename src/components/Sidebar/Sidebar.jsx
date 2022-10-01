import style from "./Sidebar.module.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Sidebar = ({ styles }) => {
    return (
        <div style={styles}>
            <div className={style.side}>
                <a href="#">
                    <BsMedium className={style.link} />
                </a>
                <a href="#">
                    <FiTwitter className={style.link} />
                </a>
                <a href="#">
                    <FaTelegramPlane className={style.link} />
                </a>
            </div>
        </div>
    );
};
export default Sidebar;
