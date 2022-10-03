import style from "./Sidebar.module.css";
import { FiTwitter } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Sidebar = ({ styles }) => {
    return (
        <div style={styles}>
            <div className={style.side}>
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
        </div>
    );
};
export default Sidebar;
