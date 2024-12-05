import React from 'react'
import { PhotoSalad, timeEat, delivery, paris } from '../../assets/img'
import cls from './index.module.css'

const Header = () => {
  return (
    <>
        <div className={cls.main}>
        <div className={cls.description}>
            <h1>Your Food court at home</h1>
            <div className={cls.main_card}>
                <div className={cls.card}>
                    <h2>Delivery</h2>
                    <p>Order in</p>
                </div>
                <div className={cls.card}> 
                    <h2>Takeout</h2>
                    <p>Grab and go</p>
                </div>  
            </div>
        </div>
        <div><img  src={PhotoSalad} alt="PhotoSalad" /></div>
    </div>
    <div className={cls.info}>
        <div className={cls.info_card}>
            <img src={timeEat} alt="timeEat" />
            <p>delivery in all paris in less than 30 minutes</p>
        </div>
        <div className={cls.info_card}>
            <img src={delivery} alt="delivery" />
            <p>Free delivery from 29 euros</p>
        </div>
        <div className={cls.info_card}>
            <img src={paris} alt="paris" />
            <p>Only fresh and French products</p>
        </div>
    </div>
    </>
  )
}

export default Header
