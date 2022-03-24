import { Map } from "../../components";
import style from "./Section1.module.css";
import {Container} from "react-bootstrap";
import bg from "../../assets/ette-ai-svg.svg"

const Section1 = () => {
    return (
        <>
            {/*<Map width="80vw" height="80vh" />*/}
            <section className={style.section1}>
            <Container className={style.main}>
                <div className={style.content}>
                    <h6>We Make It <span>Possible For You</span></h6>
                    <h1>We Make It Possible For YouWe Make It Possible For You</h1>
                    <a href="#"><button className={style.academybtn}>Academy</button></a>
                </div>
                <div className={style.bg}>
                    <img src={bg} alt="" />
                </div>
            </Container>
            </section>
        </>
    );
};
export default Section1;
