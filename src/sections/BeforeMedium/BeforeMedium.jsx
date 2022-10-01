import style from "./BeforeMedium.module.css";
import { Container } from "react-bootstrap";

const BeforeMedium = () => {
    return (
        <section className={style.section}>
            <Container className={style.contentbox}>
                <h1>Our academy articles</h1>
                <p>Here you find our latest articles</p>
            </Container>
        </section>
    );
};
export default BeforeMedium;

