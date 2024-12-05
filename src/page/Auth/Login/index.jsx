import React from "react"
import {  useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import cls from './index.module.css'

const Login = () => {
  const user = localStorage.getItem('user')

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

    return (
        <div className={cls.Login}>
            <input
                {...register('name', {
                    required: 'Это поле обязательное',
                    minLength: {
                        message: 'Минимум 2 символа',
                        value: 2
                    },
                    maxLength: {
                        value: 50, 
                        message: 'Максимум 50 символов'
                    }
                })} 
              placeholder="Login"
              type="text" 
            />
            {
                errors.name && <p>{errors.name.message}</p>
            }
            <input 
                {...register('password', {
                    required: 'Это поле обязательное',
                    minLength: {
                        message: 'Минимум 6 символа',
                        value: 2
                    },
                    maxLength: {
                        value: 100, 
                        message: 'Максимум 100 символов'
                    }
                })} 
                placeholder="********" type="password" 
            />
            {errors.name && <p>{errors.password.message}</p>}
            <button >Войти</button>
        </div>
    )
}

export default Login