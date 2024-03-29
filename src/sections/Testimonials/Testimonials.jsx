import style from "./Testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { useTestimonials } from "../../queries";
import { Waveform } from '@uiball/loaders'


const Testimonials = () => {
    const testimonials = useTestimonials();
    if (testimonials.isLoading) return <div style={{width:"100%",display:"flex",justifyContent:"center",background:"#121212"}}>
        <div className={style.loader}>
            <Waveform
                size={40}
                lineWeight={3.5}
                speed={1}
                color="#BD9560"
            />
        </div>
    </div>;
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
                    depth: 0,
                    modifier: 1,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
            >
                {testimonials.data.map((item,index) => (
                    <SwiperSlide className={style.slide} key={index} >
                        <div className={style.holder}>
                            <img
                                className={style.profile}
                                src={item.user_image}
                                alt={item.user_name}
                            />
                            <img
                                className={style.company}
                                src={item.logo}
                                alt={item.user_name}
                            />
                        </div>
                        <p className={style.p} dangerouslySetInnerHTML={{ __html: item.body }}></p>
                        <h5>{item.user_name}</h5>
                        <h6>{item.user_designation}</h6>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
