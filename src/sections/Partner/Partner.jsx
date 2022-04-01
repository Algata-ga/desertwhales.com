import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import style from "./Partner.module.css";

import { usePartners } from "../../queries";

const Partner = () => {
    const partners = usePartners();
    if (partners.isLoading) {
        return <h4>Loading</h4>;
    }
    return (
        <section className={style.partner}>
            <div>
                <Swiper
                    className={style.swiper + " " + "mySwiper"}
                    effect={"coverflow"}
                    grabCursor={false}
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
                    {partners.data.map((item) => (
                        <SwiperSlide className={style.slide} key={item.name}>
                            <a href={item.link}>
                                <img src={item.image} alt={item.name} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Partner;
