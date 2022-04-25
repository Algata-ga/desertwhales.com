import style from "./Cards.module.css";
import { Card } from "../../components";
import { Container } from "react-bootstrap";


const content = [
    {
        title: "SOMETHING SOMETHING",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
        title: "SOMETHING SOMETHING",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        title: "SOMETHING SOMETHING",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const Cards = () => {
    return (
        <section className={style.cards}>
            <div className={style.cardcontainer}>
                {content.map((c) => (
                    <Card title={c.title} body={c.body} key={c.title} />
                ))}
            </div>
        </section>
    );
};

export default Cards;

