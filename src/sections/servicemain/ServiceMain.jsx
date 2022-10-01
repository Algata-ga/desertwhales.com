import style from "./ServiceMain.module.css";
import { Container } from "react-bootstrap";
import vector1 from "../../assets/Vector1.svg";
import vector2 from "../../assets/vector2.svg";
import linebg from "../../assets/linesabout.svg";

const Service = () => {
    return (
        <section className={style.section}>
            <div className={style.lines}>
                <img src={linebg} alt="" />
            </div>
            <div className={style.circle1}>
                <div className={style.inner}></div>

                <img src={vector1} alt="" />
            </div>
            <div className={style.circle2}>
                <div className={style.inner}></div>

                <img src={vector2} alt="" />
            </div>
            <Container className={style.contentbox}>
                <h1>Our Services</h1>
                <p>
                    Desertwhales capital provides a long term valuable support
                    to innovative projects through investment, research,
                    automation, marketing, education, community localization and
                    KOL management.
                </p>
            </Container>
        </section>
    );
};

export default Service;

