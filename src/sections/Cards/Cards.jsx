import style from "./Cards.module.css";
import { Card } from "../../components";
import { Container } from "react-bootstrap";
import img1 from "../../assets/service3.svg";
import img2 from "../../assets/service2.svg";
import img4 from "../../assets/service4.svg";
import img3 from "../../assets/service5.svg";
import img5 from "../../assets/service1.svg";


const content = [
    {
        image_url: img1,
        title: "Funding",
        body: "We help projects in fundraising at their early stages.",
    },

    {
        image_url: img2,
        title: "Advisory",
        body: "Our advisor's expertise span over all areas your projects might need.",
    },
    {
        image_url: img3,

        title: "Community Localization",
        body: "Our experience in educating, building and managing local communities will help you accelerate the outreach of your project.",
    },
    {
        image_url: img4,
        title: "Partnership",
        body: "Our connections with launchpads, VCs, Guilds, CEXs and KOLs will meet all of your needs in building and expanding your project.",
    },
    {
        image_url: img5,

        title: "KOLs/Influencers",
        body: "Our KOL network is spread all over the world, and we can help you in managing and strategizing local marketing campaings in multiple regions and languages.",
    },
];

const Cards = () => {
    return (
        <section className={style.cards}>
            <Container>
                <div className={style.cardcontainer}>
                    {content.map((c) => (
                        <Card image_url={c.image_url} title={c.title} body={c.body} key={c.title} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Cards;
