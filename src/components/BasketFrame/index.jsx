import React from 'react'
import { Link } from 'react-router-dom'
import cls from './index.module.css'

const BasketFrame = () => {
  return (
    <div className={cls.main}>
        <h1>cart is empty</h1>
        <Link to='/' ><button>return to home</button></Link>
    </div>
  )
}

export default BasketFrame
