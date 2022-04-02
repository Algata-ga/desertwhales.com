import style from "./ServiceMain.module.css";
import { Container } from "react-bootstrap";
import vector1 from "../../assets/Vector1.svg";

const Service =()=>{
    return(
        <section className={style.section}>
            <div className={style.circle1}>
            </div>
            <div className={style.circle2}>

            </div>
            <Container className={style.contentbox}>
                <h1>We Can Back Support <br /> Your, Bussiness</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br /> amet magnam ipsum placeat ea quos!</p>
            </Container>
        </section>
    );
}

export default Service;