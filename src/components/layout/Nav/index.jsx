import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa6"
import { CiMenuBurger } from "react-icons/ci"
import { BsCart3 } from "react-icons/bs"
import cls from './index.module.css'

const Nav = () => {
  return (
    <>
      <div className={cls.main}>
          <div className={cls.Logo}>
            <Link to='/'><h1><p>yellow</p>kitchen</h1></Link>
          </div>
          <div className={cls.icons}>
            <Link to="/login" ><div ><FaRegUser />Log in</div></Link>
            <Link to="/basket" ><div><BsCart3 /> 0</div></Link>
            <div className={cls.menu} ><CiMenuBurger /></div>
          </div>
      </div>
      <div className={cls.border}></div>
    </>
  )
}

export default Nav
