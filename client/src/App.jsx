import { useEffect, useState } from 'react'
import './App.css'
import {Route,Routes,useNavigate} from "react-router-dom"
import LandingPage from './components/landingPage'
import HomePage from './components/homePage'



function App() {  
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
