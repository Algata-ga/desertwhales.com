import style from "./Portfolio.module.css";
import { Waveform } from '@uiball/loaders'

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
    const pagination = {
        clickable: true,
    };
    return (
        <section className={style.folio}>
            <h1 className={style.heading}>Portfolio</h1>
            {portfolios.isLoading ?
                <div style={{ width: "100%", aspectRatio: "2/1", display: "flex", justifyContent: "center", background: "#121212" }}>
                    <div className={style.loader}>
                        <Waveform
                            size={40}
                            lineWeight={3.5}
                            speed={1}
                            color="#BD9560"
                        />
                    </div>
                </div>
                :
                <div className={style.portfolio}>
                    <Swiper
                        className={style.swiper + " " + "mySwiper"}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: true,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 0,
                            modifier: 1,
                        }}
                        pagination={pagination}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                    >
                        {chunk(portfolios.data, 9).map((slide, index) => (
                            <SwiperSlide className={style.slide} key={index}>
                                {slide.map((item, index) => (
                                    <div className={style.img} key={index}>
                                        <a className={style.a} href={item.link} target="blank">
                                            <img src={item.image} alt={item.name} />
                                        </a>
                                    </div>
                                ))}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            }
        </section>
    );
};
export default Portfolio;
