import style from "./Section1.module.css";
import { Container } from "react-bootstrap";
import bg from "../../assets/ette-ai-svg.svg";
import linebg from "../../assets/lines\ home.svg";

import Particles from "react-tsparticles";
import options from "./particlesConfig.js";

const Section1 = () => {
    const particlesInit = (main) => {
        return null;
    };

    const particlesLoaded = (container) => {
        return null;
    };
    return (
        <>
<div className={style.lines}>
                    <img src={linebg} alt="" srcset="" />
                </div>
            <section className={style.section1}>
                
                <Container className={style.main}>
                    <div className={style.content}>

                        <h1>
                            we make it possible, for you
                        </h1>
                        <h6>
                            we make it possible for you we make it possible for you we make it possible for you
                        </h6>
                        <div className={style.btns}>
                            <a>
                                <button className={style.contact}>
                                    Contact us
                                </button>
                            </a>
                            <a href="#">
                                <button className={style.academybtn}>
                                    Academy
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={style.bg}>
                        <img src={bg} alt="" />
                    </div>
                </Container>
            </section>
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                width="100%"
                height="calc(100vh - 100px)"
                options={options}
                style={{ top: "100px", zIndex: "-1", position: "absolute" }}
            />
        </>
    );
};
export default Section1;
