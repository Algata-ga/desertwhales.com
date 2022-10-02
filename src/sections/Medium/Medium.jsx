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
    console.log(articles.data);
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
                    {articles.data.map((item) => (
                        <SwiperSlide className={style.slide}>
                            <div className={style.imgbox}>
                                <img src={item.banner} />
                            </div>
                            <h5>{item.title}</h5>
                            {/*<h6>
                                {item.tags.reduce(
                                    (prev, cur) => prev + " " + cur,
                                    ""
                                )}
                            </h6>
                            <p>{item.level}</p> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Medium;

