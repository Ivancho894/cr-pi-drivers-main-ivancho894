import { useEffect, useState } from 'react'
import './App.css'
import {Route,Routes,useNavigate} from "react-router-dom"
import LandingPage from './components/landingPage'
import HomePage from './components/homePage'
import DriverDetails from './components/Drivers Render/driverDetails'
import AddDriver from './components/AddDriver/addDriver'


function App() {  
  return (
    <div className='content'>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/newdriver' element={<AddDriver/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/driver/:id' element={<DriverDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
