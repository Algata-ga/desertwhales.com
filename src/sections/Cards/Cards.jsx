import style from "./Cards.module.css";
import { Card } from "../../components";
import { Container } from "react-bootstrap";

const content = [
    {
        title: "Funding",
        body: "We help projects in fundraising at their early stages.",
    },

    {
        title: "Advisory",
        body: "Our advisor's expertise span over all areas your projects might need.",
    },
    {
        title: "Community Localization",
        body: "Our experience in educating, building and managing local communities will help you accelerate the outreach of your project.",
    },
    {
        title: "Partnership",
        body: "Our connections with launchpads, VCs, Guilds, CEXs and KOLs will meet all of your needs in building and expanding your project.",
    },
    {
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
                        <Card title={c.title} body={c.body} key={c.title} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Cards;
