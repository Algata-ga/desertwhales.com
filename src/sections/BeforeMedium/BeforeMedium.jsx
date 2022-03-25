import style from "./BeforeMedium.module.css";
import { Container } from "react-bootstrap";
const BeforeMedium = () =>{
    return(
        <section className={style.section}>
            <div className={style.circle1}>

            </div>
            <Container className={style.contentbox}>
                <h1>We Can Back Support <br /> Your, Bussiness</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam <br /> amet magnam ipsum placeat ea quos!</p>
            </Container>
        </section>
    );
}
export default BeforeMedium;