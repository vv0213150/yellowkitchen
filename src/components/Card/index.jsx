import React from "react";
import { PhotoBase, PhotoBaseTwo, PhotoBaseThree, PhotoBaseFour, burger, il_paster, Believe, vietnamese } from "../../assets/img"
import { Swiper, SwiperSlide } from "swiper/react"

import {  Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import cls from './index.module.css'

export default function Card() {
    return (
        <>
            <div className={cls.main}>
                <Swiper 
                    rewind={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    // centeredSlides={true}
                    
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[ Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBase} alt="" /><img width='310px' className={cls.SwiperSlide} src={burger} alt="burger" /></SwiperSlide>
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBaseTwo} alt="" /><img width='310px' className={cls.SwiperSlide} src={il_paster} alt="il_paster" /></SwiperSlide>
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBaseThree} alt="" /><img width='310px' className={cls.SwiperSlide} src={Believe} alt="Believe" /></SwiperSlide>
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBaseFour} alt="" /><img width='310px' className={cls.SwiperSlide} src={vietnamese} alt="vietnamese" /></SwiperSlide>
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBase} alt="" /><img width='310px' className={cls.SwiperSlide} src={burger} alt="burger" /></SwiperSlide>
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBaseTwo} alt="" /><img width='310px' className={cls.SwiperSlide} src={il_paster} alt="il_paster" /></SwiperSlide>
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBaseThree} alt="" /><img width='310px' className={cls.SwiperSlide} src={Believe} alt="Believe" /></SwiperSlide>
                    <SwiperSlide ><img className={cls.images} width='310px' src={PhotoBaseFour} alt="" /><img width='310px' className={cls.SwiperSlide} src={vietnamese} alt="vietnamese" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}