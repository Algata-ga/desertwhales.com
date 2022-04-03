import style from "./Card.module.css";
import icon from "../../assets/iconpng.png";

const Card = ({title,body}) =>{
    return(
        <section className={style.card}>
            <img src={icon} alt="" />
            <h4>{title}</h4>
            <h6>{body}</h6>
       </section>
    );
}

export default Card;