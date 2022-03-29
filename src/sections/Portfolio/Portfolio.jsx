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

const portfolios = [
    {
        id: "0",
        name: "dssad",
        img: logo0,
    },
    {
        name: "dssad",
        id: "1",
        img: logo1,
    },
    {
        name: "dssad",
        id: "2",
        img: logo2,
    },
    {
        name: "dssad",
        id: "3",
        img: logo3,
    },
    {
        name: "dssad",
        id: "4",
        img: logo4,
    },
    {
        name: "dssad",
        id: "5",
        img: logo5,
    },
    {
        name: "dssad",
        id: "6",
        img: logo6,
    },
    {
        name: "dssad",
        id: "7",
        img: logo7,
    },
    {
        name: "dssad",
        id: "8",
        img: logo8,
    },
    {
        id: "0",
        name: "dssad",
        img: logo0,
    },
    {
        name: "dssad",
        id: "1",
        img: logo1,
    },
    {
        name: "dssad",
        id: "2",
        img: logo2,
    },
    {
        name: "dssad",
        id: "3",
        img: logo3,
    },
    {
        name: "dssad",
        id: "4",
        img: logo4,
    },
    {
        name: "dssad",
        id: "5",
        img: logo5,
    },
    {
        name: "dssad",
        id: "6",
        img: logo6,
    },
    {
        name: "dssad",
        id: "7",
        img: logo7,
    },
    {
        name: "dssad",
        id: "8",
        img: logo8,
    },

    {
        name: "dssad",
        id: "6",
        img: logo6,
    },
    {
        name: "dssad",
        id: "7",
        img: logo7,
    },
    {
        name: "dssad",
        id: "8",
        img: logo8,
    },
];

const chunk = (arr, size) =>
    arr.reduce(
        (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
        []
    );

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
                    {chunk(portfolios, 9).map((slide) => (
                        // TODO : add min-height to each slide
                        <SwiperSlide className={style.slide}>
                            {slide.map((item) => (
                                <div className={style.img}>
                                    <img src={item.img} alt={item.name} />
                                </div>
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default Portfolio;
