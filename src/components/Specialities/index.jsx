import React from 'react'
import { bagel, burgerTwo, chicken, fish, fishnchips, vegan, pizza, raviolli } from "../../assets/img";

import { Swiper, SwiperSlide } from "swiper/react"

import {  Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import cls from './index.module.css'

const Specialities = () => {
  return (
    <>
        <div className={cls.Specialities} >
            <h1>Specialities</h1>
            <button>show all</button>
        </div>
        <div className={cls.main}>
            <Swiper 
                rewind={true}
                slidesPerView={10}
                spaceBetween={8}
                centeredSlides={true}
                
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation]}
                className="mySwiper"
                >
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={bagel} alt="" /><p className={cls.text} >Bagel</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={burgerTwo} alt="" /><p className={cls.text}>Burger</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={chicken} alt="" /><p className={cls.text} >Chicken</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={fish} alt="" /><p className={cls.text} >Fish</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={fishnchips} alt="" /><p className={cls.text} >Fish’Chips</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={vegan} alt="" /><p className={cls.text} >Salads</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={pizza} alt="" /><p className={cls.text} >Pizza</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={raviolli} alt="" /><p className={cls.text} >Pasta</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={bagel} alt="" /><p className={cls.text} >Bagel</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={burgerTwo} alt="" /><p className={cls.text} >Burger</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={chicken} alt="" /><p className={cls.text} >Chicken</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={fish} alt="" /><p className={cls.text} >Fish</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={fishnchips} alt="" /><p className={cls.text} >Fish’Chips</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={vegan} alt="" /><p className={cls.text} >Salads</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={pizza} alt="" /><p className={cls.text} >Pizza</p></SwiperSlide>
                    <SwiperSlide className={cls.b} ><img className={cls.card} src={raviolli} alt="" /><p className={cls.text} >Pasta</p></SwiperSlide>
                </Swiper>
        </div>
    </>
  )
}

export default Specialities
