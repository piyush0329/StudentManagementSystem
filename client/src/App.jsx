
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import Profile from './pages/Profile'
import PrivateRoute from './routes/Private'
import Dashboard from './pages/Dashboard'




axios.defaults.baseURL = 'http://localhost:4000'
function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<IndexPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='user' element={<Dashboard />}></Route>
            <Route path='user/profile' element={<Profile />}></Route>
            
          </Route>
        </Route>
      </Routes>


    </>
  )
}

export default App
