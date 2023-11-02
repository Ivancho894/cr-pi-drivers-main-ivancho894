import { useState } from "react"
import {validate,submit} from "./validation"
import { useNavigate } from "react-router-dom"



export default function AddDriver(){
    const navigate = useNavigate()
    const [driver,setDriver] = useState({
        id:0,
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
        setDriver({
            ...driver,
            [event.target.name]:event.target.value
            })
        setErrors(validate(driver,event))
    }
    const handleSubmit = () =>{
        if (errors=={}){
            const res = submit(driver)
            alert(res)
            if(res==="A new driver was created") navigate('http://localhost:3001/drivers/'+driver.id)
        }
    }


    return (
        <div>
            <form action="">
                <input 
                    type="numbers" 
                    placeholder='id' 
                    value={driver.id} 
                    name={'id'}
                    onChange={handleChange}/>
                <input 
                    type="text" 
                    placeholder='Name' 
                    value={driver.name} 
                    name={'name'}
                    onChange={handleChange}/>
                <input 
                    type="text" 
                    placeholder='Lastname' 
                    value={driver.lastname} 
                    name={'lastname'}
                    onChange={handleChange}/>
                <input 
                    type="text" 
                    placeholder='Description ' 
                    value={driver.description}
                    name={'description'}
                    onChange={handleChange}/>
                <input 
                    type="text" 
                    placeholder='Image' 
                    value={driver.image}
                    name={'image'}
                    onChange={handleChange}/>
                <input 
                    type="text" 
                    placeholder='Nationality' 
                    value={driver.nationality}
                    name={'nationality'}
                    onChange={handleChange}/>
                <input  
                    type="text" 
                    placeholder='Day of Birth' 
                    value={driver.dayofbirth}
                    name={'dayofbirth'}
                    onChange={handleChange}/>
                <input 
                    type="text" 
                    placeholder='Teams' 
                    value={driver.Teams}
                    name={'Teams'}
                    onChange={handleChange}/>
            </form>
        </div>
    )
}