import style from "./Footer.module.css";
import { Container } from "react-bootstrap";
import logo from "../../assets/logo.png"

const Footer = () =>{
    return(
        <footer className={style.footerbg}>
            <Container className={style.footer}>
                <div className={style.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={style.quicklink}>
                    <h6>Quick Links</h6>
                </div>
                <div className={style.company}>
                    <h6>Company</h6>
                </div>
                <div className={style.social}>
                    <h6>Social</h6>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;