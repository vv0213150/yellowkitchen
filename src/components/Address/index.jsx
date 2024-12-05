import React from 'react'
import { TiLocation } from "react-icons/ti"
import cls from './index.module.css'

const Address = () => {
  return (
    <div className={cls.main}>
        <div className={cls.info}>
            <h1>Your nearest restaurants</h1>
            <p>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
        </div>
        <div className={cls.search}>
            <div><TiLocation /></div>
            <input placeholder='Enter delivery address' type="text" />
            <button>send</button>
        </div>
    </div>
  )
}

export default Address
