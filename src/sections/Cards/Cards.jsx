import style from "./Cards.module.css"
import { Card } from "../../components";
import { Container } from "react-bootstrap";
const content=[
    {
        title: "HLL",
        body: "HJGDSJHDJHG"
    },
    {
        title: "HdLL",
        body: "HJGDSJHDJHG"
    },
    {
        title: "HLeL",
        body: "HJGDSJHDJHG"
    }
]
const Cards  = () =>{
    return(
       <section className={style.cards}>
           <Container className={style.cardcontainer}>
            {content.map((c)=><Card title={c.title} body={c.body} key={c.title} />)}
           </Container>
       </section>
    );
}

export default Cards;