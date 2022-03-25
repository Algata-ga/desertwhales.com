import style from "./Card.module.css"
const Card = ({title,body}) =>{
    return(
        <section className={style.card}>
            <h4>{title}</h4>
            <h6>{body}</h6>
       </section>
    );
}

export default Card;