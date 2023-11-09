import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../context/useAuth'

const LoginPage = () => {
    const [admission, setAdmission] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/login', {
                admission,
                password
            }, { withCredentials: true })
            if (res && res.data.success) {
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                alert(res.data && res.data.message);
                navigate(location.state || "/");
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Login</h1>
                <form className='max-w-lg mx-auto border' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter Your Admission Number' value={admission} onChange={(e) => setAdmission(e.target.value)} />
                    <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='primary' >Login</button>
                    <div className='text-center py-2 text-gray-500'>
                        Don't have an Account yet?<Link className='underline text-black'
                            to={'/register'}>
                            Register now
                        </Link></div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage