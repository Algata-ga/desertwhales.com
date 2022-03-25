import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import style from "./Partner.module.css";

const logo = "https://picsum.photos/200/300";
const partners = [
    {
        "name": 'A',
        "image_url": logo,
        "id": 0,
    },
    {
        "name": 'B',
        "image_url": logo,
        "id": 1,
    }, {
        "name": 'C',
        "image_url": logo,
        "id": 2,
    }, {
        "name": 'D',
        "image_url": logo,
        "id": 3,
    }, {
        "name": 'E',
        "image_url": logo,
        "id": 4,
    }
];

const Partner = () => {
    return (
        <section className={style.partner}>

            <Container>
                <Swiper className={style.swiper + " " + "mySwiper"}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
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
                    {partners.map((item) => 
                        <SwiperSlide className={style.slide}>
                            <img src={item.image_url} />
                        </SwiperSlide>
                )}
                </Swiper>

            </Container>

        </section>
    );
}

export default Partner;