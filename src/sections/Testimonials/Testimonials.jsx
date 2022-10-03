import style from "./Testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { BsFillChatQuoteFill } from "react-icons/bs";

import { useTestimonials } from "../../queries";

const Testimonials = () => {
    const testimonials = useTestimonials();
    if (testimonials.isLoading) return null;
    return (
        <section className={style.testimonials}>
            <Swiper
                className={style.swiper + " " + "mySwiper"}
                effect={"coverflow"}
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
            >
                {testimonials.data.map((item) => (
                    <SwiperSlide className={style.slide}>
                        <img
                            className={style.profile}
                            src={item.user_image}
                            alt={item.user_name}
                        />
                        <img
                            className={style.company}
                            src={item.logo}
                            alt={item.user_name}
                            height="30"
                        />
                        <h5>{item.user_name}</h5>
                        <h6>{item.user_designation}</h6>

                        <p dangerouslySetInnerHTML={{ __html: item.body }}></p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
