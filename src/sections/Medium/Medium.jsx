import style from "./Medium.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";


const logo = "https://picsum.photos/300/200";
const medium = [
    {
        "name": 'A',
        "image_url": logo,
        "title": 'hello there',
        "content" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',
        "id": 0,
    },
    {
        "name": 'B',
        "image_url": logo,
        "title": 'hello there',
        "content" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 1,
    }, {
        "name": 'C',
        "image_url": logo,
        "title": 'hello there',
        "content" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 2,
    }, {
        "name": 'D',
        "image_url": logo,
        "title": 'hello there',
        "content" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 3,
    }, {
        "name": 'E',
        "image_url": logo,
        "title": 'hello there',
        "content" : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem voluptatum minus quae eaque vitae tempore.',

        "id": 4,
    }
];

const Medium =() =>{
    return(

        <section className={style.medium}>

            
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
                    {medium.map((item) => 
                        <SwiperSlide className={style.slide}>
                            <img src={item.image_url} />
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                        </SwiperSlide>
                )}
                </Swiper>
        </section>
    );
}

export default Medium;