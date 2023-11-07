import { useState } from "react"
import {submit, newvalidate} from "./validation"
import { useNavigate } from "react-router-dom"
import FormRender from "./formRender"
import DriverDetRender from "../Drivers Render/driverDetailsRen"
import { Link } from "react-router-dom"
import axios from "axios"


export default function AddDriver(){
    const navigate = useNavigate()
    const [driver,setDriver] = useState({
        name : '',
        lastname : '',
        description : '',
        image: '',
        nationality: '',
        dayofbirth: '',
        teams:[]

    })
    const [errors, setErrors] = useState({})


    const handleChange = (event) =>{
        
        setErrors(newvalidate(errors,event))
        setDriver({
            ...driver,
            [event.target.name]:event.target.value,
            
            })
    }
    const handleSubmit = async () =>{
        await submit(errors,driver).then((id=>id?navigate('/homepage'):null))
        
    }

    return (
        <div className="add">
            <div className="homeBar">
                <Link to='/'>
                    <img src="../Images/F1 FAN PAGE.png" id="homebt" />
                </Link>
            </div>
            <div className="add-driver-page">
                <div>
                    <h2>New driver: </h2>
                    <FormRender driver = {driver} errors = {errors} handleChange={handleChange}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

            </div>
        </div>
    )
}