import React from 'react'
import cls from './index.module.css'

const AboutUs = () => {
  return (
    <div className={cls.main}>
        <div className={cls.mainTwo}>
            <div className={cls.warp}>
                <div className={cls.c}>
                </div>
                <div className={cls.b}><h1>1</h1></div>
                <h2>kitchen</h2>
            </div>
            <div className={cls.warp}>
                <div className={cls.c}></div>
                <div className={cls.b}><h1>11</h1></div>
                <h2>specialties</h2>
            </div>
            <div className={cls.warp}>
                <div className={cls.c}></div>
                <div className={cls.b}><h1>11</h1></div>
                <h2>restaurants</h2>
            </div>
            <div className={cls.warp}>
                <div className={cls.c}></div>
                <div className={cls.b}><h1>1</h1></div>
                <h2 className={cls.texth2}>transport costs</h2>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
