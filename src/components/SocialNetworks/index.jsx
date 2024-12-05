import React from 'react'
import { imgOne, imgTwo, imgThree, imgFour } from '../../assets/img'
import cls from './index.module.css'

const SocialNetworks = () => {
  return (
    <>
        <div className={cls.main}>
            <div className={cls.text}>
                <h1>#YellowKitchens<span> in instagram</span></h1>
            </div>
            <div className={cls.img}>
                <img src={imgOne} alt="" />
                <img src={imgTwo} alt="" />
                <img src={imgThree} alt="" />
                <img src={imgFour} alt="" />
            </div>
        </div>
    </>
  )
}

export default SocialNetworks
