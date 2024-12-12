import React from "react"
import cls from './index.module.css'

const Login = () => {
    const [login, setLogin] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Login:", login, "Password:", password)
    }

    return (
        <div className={cls.Login}>
            <form onSubmit={handleSubmit}> 
                <input 
                    placeholder="Login" 
                    type="text" 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)} 
                />
                <input 
                    placeholder="********" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Войти</button> 
            </form>
        </div>
    )
}

export default Login