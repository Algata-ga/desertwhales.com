import style from "./Card.module.css";
import icon from "../../assets/iconpng.png";
import 'animate.css';
const Card = ({image_url,title,body}) =>{
    return(
        <section className={style.card + " " + "wow animate__animated animate__fadeInLeft animate__repeat-1"}>
            <img src={image_url} alt="" />
            <h4>{title}</h4>
            <h6>{body}</h6>
       </section>
    );
}

export default Card;