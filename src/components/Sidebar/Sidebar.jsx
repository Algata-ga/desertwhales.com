import style from "./Sidebar.module.css";
import {FiFacebook,FiInstagram,FiTwitter} from "react-icons/fi";
import {BsMedium} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";

const Sidebar = () =>{
    return(
        <div className={style.side}>
            <FiFacebook className={style.link}/><FiInstagram className={style.link}/><BsMedium className={style.link}/><FiTwitter className={style.link}/><FaTelegramPlane className={style.link}/>
        </div>
    );
    }
    export default Sidebar;