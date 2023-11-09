import React from 'react'
import { useAuth } from '../context/useAuth'

const IndexPage = () => {

  const [auth, setAuth] = useAuth()


  return (
    <div>

      {
        auth.user ? (<>
          <div className='flex justify-center mt-5 '>
            <table className="table-auto text-left items-center border border-black p">
            
            <h1 className='font-bold text-2xl text-center text-primary'>Student Details</h1>
              <tbody>
                <tr>
                  <th>Student Name</th>
                  <td>{auth?.user?.name}</td>
                </tr>
                <tr>
                  <th>Student Roll Number</th>
                  <td>{auth?.user?.roll}</td>
                </tr>
                <tr>
                  <th>Student Admission Number</th>
                  <td>{auth?.user?.admission}</td>
                </tr>
                <tr>
                  <th>Student Class</th>
                  <td>{auth?.user?.classname}</td>
                </tr>
                <tr>
                  <th>Student Section</th>
                  <td>{auth?.user?.section}</td>
                </tr>
                <tr>
                  <th>Student Gender</th>
                  <td>{auth?.user?.gender}</td>
                </tr>
                <tr>
                  <th>Student Mobile Number</th>
                  <td>{auth?.user?.mobile}</td>
                </tr>
                <tr>
                  <th>Student Address</th>
                  <td>{auth?.user?.address}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </>) : (<>
          <div className='flex justify-center'>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-40 h-40 text-primary ml-10">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>

          <h1 className='font-bold text-xl'>Please Login to See the Details of the student </h1>
          </div>
          </div>
        </>)
      }

    </div>


  )

}

export default IndexPage