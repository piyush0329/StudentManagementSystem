import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './context/useAuth';

const Header = () => {
    const [auth, setAuth] = useAuth()

    const handleLogout = () => {

        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
    }
    return (
        <div>
            <header className='flex justify-between'>
                <Link to={'/'} className='flex items-center gap-1' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 -rotate-90">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    <span className='font-bold text-xl text-primary' >SMS</span>
                </Link>
                <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 text-primary'>
                    Student Management System
                </div>
                <Link to={'/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>

                    </div>
                    {
                        !auth.user ? (<>
                            <div className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Register
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </div>

                        </>) : (<>
                            <div className="nav-item">
                                <Link to="/dashboard/user/profile" className="nav-link">
                                    {auth?.user?.name}
                                </Link>
                            </div>
                            <div className="nav-item text-primary">

                                <Link to="/login" className="nav-link" onClick={handleLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>


                        </>)
                    }
                </Link>
            </header>
        </div>
    )
}

export default Header