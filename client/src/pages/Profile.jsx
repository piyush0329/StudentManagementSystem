import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../context/useAuth'
const Profile = () => {

    const [auth,setAuth]=useAuth()
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
    useEffect(()=>{
    const {name,roll,admission,classname,section,gender,mobile,address}= auth?.user
    setName(name)
    setRoll(roll)
    setAdmission(admission)
    setClassName(classname)
    setSection(section)
    setGender(gender)
    setMobile(mobile)
    setAddress(address)


    },[auth?.user]) 

    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.put('/profile',{
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
                
            if (data?.error) {
                alert("Error While Updating Profile");
                navigate("/login");
            } else {
                setAuth({ ...auth, user: data?.updatedUser })
        let ls = localStorage.getItem('auth')
        ls = JSON.parse(ls)
        ls.user = data.updatedUser
        localStorage.setItem('auth', JSON.stringify(ls))
        alert("Profile Updated Successfully")
            }
              
        } catch (error) {
            alert(error)
        }
        
    }

    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-64'>
                <h1 className='text-4xl text-center mb-4'>Update Student Details</h1>
                <form onSubmit={handleSubmit} className='max-w-lg mx-auto border'>
                    <label>Student Name</label>
                    <input type='text' placeholder='Enter Student Name' 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
                    <label>Student Roll Number</label>
                    <input type='text' placeholder='Enter Student Roll Number' 
                    value={roll} 
                    onChange={(e)=>setRoll(e.target.value)}/>
                    <label>Student Admission Number</label>
                    <input type='text' placeholder='Enter Admission Number' 
                    value={admission} 
                    onChange={(e)=>setAdmission(e.target.value)}
                        disabled
                    />
                    <label>Student Class</label>
                    <input type='text' placeholder='Enter Class' 
                    value={classname} 
                    onChange={(e)=>setClassName(e.target.value)}/>
                    <label>Student Section</label>
                    <input type='text' placeholder='Enter Section' 
                    value={section} 
                    onChange={(e)=>setSection(e.target.value)}/>
                    <label>Student Gender</label>
                    <input type='text' placeholder='Enter Gender' 
                    value={gender} 
                    onChange={(e)=>setGender(e.target.value)}/>
                    <label>Student Mobile Number</label>
                    <input type='text' placeholder='Enter Mobile number' 
                    value={mobile} 
                    onChange={(e)=>setMobile(e.target.value)}/>
                    <label>Student Address</label>
                    <input type='text' placeholder='Enter Address' 
                    value={address} 
                    onChange={(e)=>setAddress(e.target.value)}/>
                    <label>Student Password</label>
                    <input type='password' placeholder='Enter Your Password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                     />
                    <button className='primary'>Update Information</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Profile