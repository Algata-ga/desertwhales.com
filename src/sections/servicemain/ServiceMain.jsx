import style from "./ServiceMain.module.css";
import { Container } from "react-bootstrap";
import vector1 from "../../assets/Vector1.svg";
import vector2 from "../../assets/vector2.svg";
import linebg from "../../assets/linesabout.svg";

const Service =()=>{
    return(
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
                <h1>We Can Back Support <br /> Your, Bussiness</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br /> amet magnam ipsum placeat ea quos!</p>
            </Container>
        </section>
    );
}

export default Service;