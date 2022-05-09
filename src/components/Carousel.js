import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import t from './img/t.jpg'
import m from './img/m.jpg'
import b from './img/b.webp'
import d from './img/d.jpg'
import c from './img/c.jpg'
import r from './img/r.jpg'
import p from './img/p.jpg'


export function Carousel () {
    return (
        <div className='swiper'>
        <Swiper
            spaceBetween={1}
            slidesPerView={4}
            modules={[ Navigation, Pagination, Mousewheel, Keyboard]}
            
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            className="mySwiper"
            >
            
    
            <SwiperSlide><div className='column2'><img className='Cimg' src={t} alt="ff"/></div></SwiperSlide>
            <SwiperSlide><div className='column2'><img className='Cimg' src={m} alt="ff"/></div></SwiperSlide>
            <SwiperSlide><div className='column2'><img className='Cimg' src={b} alt="ff"/></div></SwiperSlide>
            <SwiperSlide><div className='column2'><img className='Cimg' src={c} alt="ff"/></div></SwiperSlide>
            <SwiperSlide><div className='column2'><img className='Cimg' src={d} alt="ff"/></div></SwiperSlide>
            <SwiperSlide><div className='column2'><img className='Cimg' src={p} alt="ff"/></div></SwiperSlide>
            <SwiperSlide><div className='column2'><img className='Cimg' src={r} alt="ff"/></div></SwiperSlide>

            

        </Swiper>
        </div>
    )
}