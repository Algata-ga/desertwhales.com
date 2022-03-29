import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import style from "./Partner.module.css";

import InfinityPad from "../../assets/Infinity.png";
import GameFi from "../../assets/Gamefi.png";
import MoonStarter from "../../assets/moonstarter.png";

const partners = [
    {
        name: "A",
        image_url: GameFi,
        id: 0,
    },
    {
        name: "A",
        image_url: MoonStarter,
        id: 0,
    },
    {
        name: "A",
        image_url: InfinityPad,
        id: 0,
    },
    {
        name: "A",
        image_url: GameFi,
        id: 0,
    },
    {
        name: "A",
        image_url: MoonStarter,
        id: 0,
    },
    {
        name: "A",
        image_url: InfinityPad,
        id: 0,
    },
];

const Partner = () => {
    return (
        <section className={style.partner}>
            <Container>
                <Swiper
                    className={style.swiper + " " + "mySwiper"}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 2500,
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
                    {partners.map((item) => (
                        <SwiperSlide className={style.slide}>
                            <img src={item.image_url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Partner;

