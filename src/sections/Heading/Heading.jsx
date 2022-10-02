import style from "./Heading.module.css";
import { Container } from "react-bootstrap";

const Heading = ({title,desc}) => {
    return (
        <section className={style.section}>
            <Container className={style.contentbox}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </Container>
        </section>
    );
};
export default Heading;

