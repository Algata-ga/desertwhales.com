import style from "./Portfolio.module.css";
import logo0 from "../../assets/acta_finance.png";
import logo1 from "../../assets/altava.png";
import logo2 from "../../assets/colizeum.png";
import logo3 from "../../assets/neofi.png";
import logo4 from "../../assets/SSman.png";
import logo5 from "../../assets/supernova.png";

const folio=[
    {
        "id": '0',
        "img": logo0
    },
    {
        "id": '1',
        "img": logo1
    },
    {
        "id": '2',
        "img": logo2
    },
    {
        "id": '3',
        "img": logo3
    },
    {
        "id": '4',
        "img": logo4
    },
    {
        "id": '5',
        "img": logo5
    },
    

]
const Portfolio = () => {
    return(

        <section className={style.folio}>
            <h1>Portfolio</h1>
                <div className={style.portfolio}>
                {
                    folio.map((item)=>
                        <div className={style.img}>
                            <img src={item.img} alt="folio" />
                        </div>
                    )
                }
                </div>
                
        </section>
    );
}
export default Portfolio;