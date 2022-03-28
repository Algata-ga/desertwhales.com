import style from "./Portfolio.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import logo0 from "../../assets/acta_finance.png";
import logo1 from "../../assets/altava.png";
import logo2 from "../../assets/colizeum.png";
import logo3 from "../../assets/neofi.png";
import logo4 from "../../assets/SSman.png";
import logo5 from "../../assets/supernova.png";
import logo6 from "../../assets/Metawear.png";
import logo7 from "../../assets/Spacemisfit.png";
import logo8 from "../../assets/Tar.png";

const folio1 = [
    {
        id: "0",
        img: logo0,
    },
    {
        id: "1",
        img: logo1,
    },
    {
        id: "2",
        img: logo2,
    },
    {
        id: "3",
        img: logo3,
    },
    {
        id: "4",
        img: logo4,
    },
    {
        id: "5",
        img: logo5,
    },
    {
        id: "6",
        img: logo6,
    },
    {
        id: "7",
        img: logo7,
    },
    {
        id: "8",
        img: logo8,
    },
];
const Portfolio = () => {
    return (
        <section className={style.folio}>
            <h1>Portfolio</h1>
            <div className={style.portfolio}>
                <Swiper
                    className={style.swiper + " " + "mySwiper"}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                >
                    <SwiperSlide className={style.slide}>
                        {folio1.map((item) => (
                            <div className={style.img}>
                                <img src={item.img} alt="folio" />
                            </div>
                        ))}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};
export default Portfolio;
