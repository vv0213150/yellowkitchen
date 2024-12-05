import React from 'react'
import { appStore, googlePlay } from '../../../assets/img'
import { RxInstagramLogo } from "react-icons/rx"
import { FaTwitter, FaFacebook, FaChevronDown  } from "react-icons/fa"


import cls from './index.module.css'

const Footer = () => {
  return (
    <>
        <div className={cls.main}>
            <div className={cls.mainTwo}>
                <div className={cls.container}>
                    <div className={cls.Logo}>
                        <h1><p>yellow</p>kitchen</h1>
                        <div className={cls.line} ></div>
                        <div className={cls.img}>
                            <img src={appStore} alt="appStore" />
                            <img src={googlePlay} alt="googlePlay" />
                        </div>
                    </div>
                    <div className={cls.containerTwo}>
                        <div className={cls.info}>
                            <h1>About us</h1>
                            <ul>
                                <li>Concept</li>
                                <li>Franchise</li>
                                <li>Business</li>
                                <li>Restaurant signup</li>
                                <li>For Investors</li>
                            </ul>
                        </div>
                        <div className={cls.info}>
                            <h1>Get help</h1>
                            <ul>
                                <li>Read FAQs</li>
                                <li>Restaurants</li>
                                <li>Specialities</li>
                                <li>Sign up to deliver</li>
                                <li className={cls.down}>English <FaChevronDown /></li>
                            </ul>
                        </div>
                        <div className={cls.info}>
                            <h1>Contact us</h1>
                            <ul>
                                <li>Yellow kitchen Paris 11</li>
                                <li>69 avenue de la Republique 75011 Paris</li>
                                <li>Specialities</li>
                                <li>0800 111 126</li>
                                <li>contact@yellowkitchens.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.Terms}>
                <div className={cls.icons}>
                    <RxInstagramLogo />
                    <FaTwitter />
                    <FaFacebook />
                </div>
                <div className={cls.text}>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>© 2020 Yellow kitchen</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
