import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const RegisterPage = () => {

    const [name ,setName]= useState('')
    const [roll ,setRoll]= useState('')
    const [admission ,setAdmission]= useState('')
    const [classname ,setClassName]= useState('')
    const [section ,setSection]= useState('')
    const [gender ,setGender]= useState('')
    const [mobile ,setMobile]= useState('')
    const [address ,setAddress]= useState('')
    const [password ,setPassword]= useState('')
 const navigate = useNavigate()

    const registerUser= async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('/register',{
                name,
                roll,
                admission,
                classname,
                section,
                gender,
                mobile,
                address,
                password,
            })
                
            if (res && res.data.success) {
                alert(res.data && res.data.message);
                navigate("/login");
            } else {
                alert(res.data.message);
            }
              
        } catch (error) {
            alert(error)
        }
        
    }
    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Register</h1>
                <form onSubmit={registerUser} className='max-w-lg mx-auto border'>
                    <input type='text' placeholder='Enter Student Name' 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' placeholder='Enter Student Roll Number' 
                    value={roll} 
                    onChange={(e)=>setRoll(e.target.value)}/>
                    <input type='text' placeholder='Enter Admission Number' 
                    value={admission} 
                    onChange={(e)=>setAdmission(e.target.value)}/>
                    <input type='text' placeholder='Enter Class' 
                    value={classname} 
                    onChange={(e)=>setClassName(e.target.value)}/>
                    <input type='text' placeholder='Enter Section' 
                    value={section} 
                    onChange={(e)=>setSection(e.target.value)}/>
                    <input type='text' placeholder='Enter Gender' 
                    value={gender} 
                    onChange={(e)=>setGender(e.target.value)}/>
                    <input type='text' placeholder='Enter Mobile number' 
                    value={mobile} 
                    onChange={(e)=>setMobile(e.target.value)}/>
                    <input type='text' placeholder='Enter Address' 
                    value={address} 
                    onChange={(e)=>setAddress(e.target.value)}/>
                    <input type='password' placeholder='Enter Your Password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                     />
                    <button className='primary'>Register</button>
                    <div className='text-center py-2 text-gray-500'>
                    Already a member?<Link className='underline text-black'
                    to={'/login'}>
                        Login
                    </Link></div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage