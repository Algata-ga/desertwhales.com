import style from "./Medium.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { useArticles } from "../../queries";
import { Container } from "react-bootstrap";

const Medium = () => {
    const articles = useArticles();
    if (articles.isLoading) return null;
    return (
        <section className={style.medium}>
            <Container>
                <Swiper
                    className={style.swiper + " " + "mySwiper"}
                    effect={"coverflow"}
                    grabCursor={false}
                    centeredSlides={false}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 2500,
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
                    {articles.data.map((item, index) => (
                        <SwiperSlide className={style.slide} key={index}>
                            <a
                                href={`${
                                    import.meta.env.VITE_ACADEMY_URL
                                }/article/${item.title.replaceAll(" ", "_")}`}
                            >
                                <div className={style.imgbox}>
                                    <img src={item.banner} />
                                </div>
                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Medium;
