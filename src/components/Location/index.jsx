import React from 'react'
import cls from './index.module.css'

const Location = () => {
  return (
    <div className={cls.location} >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46793.75662760199!2d74.57606436953125!3d42.8599719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b57a0051d7%3A0xbb8c6d899e365958!2z0JDQstGA0L7RgNCw!5e0!3m2!1sru!2skg!4v1732958094095!5m2!1sru!2skg" width="1280px" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Location
