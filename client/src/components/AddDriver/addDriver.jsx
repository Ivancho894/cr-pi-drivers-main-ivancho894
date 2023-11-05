import { useState } from "react"
import {submit, newvalidate} from "./validation"
import { useNavigate } from "react-router-dom"
import FormRender from "./formRender"
import DriverDetRender from "../Drivers Render/driverDetailsRen"
export default function AddDriver(){
    const navigate = useNavigate()
    const [driver,setDriver] = useState({
        id:'',
        name : '',
        lastname : '',
        description : '',
        image: '',
        nationality: '',
        dayofbirth: '',
        Teams:[]

    })
    const [errors, setErrors] = useState({})


    const handleChange = (event) =>{
        
        setErrors(newvalidate(errors,event))
        setDriver({
            ...driver,
            [event.target.name]:event.target.value,
            // image:()=>{return errors.image==''&&driver.image!=''?driver.image:'https://silicondales.com/wp-content/uploads/2018/11/incognito-symbol-large-300x300.jpg';}
            
            })
    }
    const handleSubmit = () =>{
        if (errors=={}){
            const res = submit(driver)
            alert(res)
            if(res==="A new driver was created") navigate('http://localhost:3001/drivers/'+driver.id)
        }
    }

    return (
        <div className="addDriver">
            <div>
                <FormRender driver = {driver} errors = {errors} handleChange={handleChange}/>
            </div>
            <div>
                <DriverDetRender driver = {driver}/>
            </div>
        </div>
    )
}