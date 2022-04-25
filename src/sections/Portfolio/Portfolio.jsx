import style from "./Portfolio.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { usePortfolios } from "../../queries";

const chunk = (arr, size) =>
    arr.reduce(
        (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
        []
    );

const Portfolio = () => {
    const portfolios = usePortfolios();
    if (portfolios.isLoading) {
        return <h3>Loading</h3>;
    }
    return (
        <section className={style.folio}>
            <h1 className={style.heading}>Portfolio</h1>
            <div className={style.portfolio}>
                <Swiper
                    className={style.swiper + " " + "mySwiper"}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                >
                    {chunk(portfolios.data, 9).map((slide) => (
                        <SwiperSlide className={style.slide}>
                            {slide.map((item) => (
                                <div className={style.img}>
                                    <a className={style.a} href={item.link}>
                                        <img src={item.image} alt={item.name} />
                                    </a>
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
