import style from "./Section1.module.css";
import { Container } from "react-bootstrap";
import bg from "../../assets/ette-ai-svg.svg";
import linebg from "../../assets/lines home.svg";
import { ContactPopUp } from "../../components";
import Particles from "react-tsparticles";
import options from "./particlesConfig.js";
import { useToggle } from "react-use";
const Section1 = () => {
    const particlesInit = (main) => {
        return null;
    };
    const [isOpen, toggleOpen] = useToggle(false);

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
                            We explore, invest and support early stage
                            blockchain projects
                        </h1>
                        <h6>
                            Desertwhales is a community and KOL backed capital
                            in the MENA region
                        </h6>
                        <div className={style.btns}>
                            <a>
                                <button className={style.contact} onClick={toggleOpen}>Contact Us</button>
                                <ContactPopUp state={isOpen} close={toggleOpen} />
                            </a>
                            <a href="#">
                                <a
                                    href="academy.desertwhales.com"
                                    className={style.academybtn}
                                >
                                    Academy
                                </a>
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
                height="max(866px, 100vh)"
                options={options}
                style={{ top: "100px", zIndex: "-1", position: "absolute" }}
            />
        </>
    );
};
export default Section1;
