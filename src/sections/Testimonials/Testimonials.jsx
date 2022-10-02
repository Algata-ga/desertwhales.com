import style from "./Testimonials.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { BsFillChatQuoteFill } from "react-icons/bs"

const testimonials = [
    {
        desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en",
        name: "Benjammin frankilin",
        company: "CEO, XYZ"
    },
    {
        desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en",
        name: "Benjammin frankilin",
        company: "CEO, XYZ"
    },
    {
        desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en",
        name: "Benjammin frankilin",
        company: "CEO, XYZ"
    },
    {
        desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en",
        name: "Benjammin frankilin",
        company: "CEO, XYZ"
    },
    {
        desc: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en",
        name: "Benjammin frankilin",
        company: "CEO, XYZ"
    },
]

const Testimonials = () => {
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
                {testimonials.map((item) => (
                    <SwiperSlide className={style.slide}>
                        <BsFillChatQuoteFill />
                        <p>{item.desc}</p>
                        <h5>{item.name}</h5>
                        <h6>{item.company}</h6>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;

