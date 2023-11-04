import { useState } from "react"
import {submit, newvalidate} from "./validation"
import { useNavigate } from "react-router-dom"



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
        setDriver({
            ...driver,
            [event.target.name]:event.target.value
            })
        setErrors(newvalidate(errors,event))
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
                    placeholder='Id' 
                    value={driver.id} 
                    name={'id'}
                    onChange={handleChange}/>
                <h4>{errors.id}</h4>
                <input 
                    type="text" 
                    placeholder='Name' 
                    value={driver.name} 
                    name={'name'}
                    onChange={handleChange}/>
                <h4>{errors.name}</h4>

                <input 
                    type="text" 
                    placeholder='Lastname' 
                    value={driver.lastname} 
                    name={'lastname'}
                    onChange={handleChange}/>
                <h3>{errors.lastname}</h3>

                <input 
                    type="text" 
                    placeholder='Description ' 
                    value={driver.description}
                    name={'description'}
                    onChange={handleChange}/>
                <h3>{errors.description}</h3>
                
                <input 
                    type="text" 
                    placeholder='Image' 
                    value={driver.image}
                    name={'image'}
                    onChange={handleChange}/>
                <h3>{errors.image}</h3>

                <input 
                    type="text" 
                    placeholder='Nationality' 
                    value={driver.nationality}
                    name={'nationality'}
                    onChange={handleChange}/>
                <h3>{errors.nationality}</h3>

                <input  
                    type="text" 
                    placeholder='Day of Birth' 
                    value={driver.dayofbirth}
                    name={'dayofbirth'}
                    onChange={handleChange}/>
                <h3>{errors.dayofbirth}</h3>
                <input 
                    type="text" 
                    placeholder='Teams' 
                    value={driver.Teams}
                    name={'Teams'}
                    onChange={handleChange}/>
                <h3>{errors.Teams}</h3>

            </form>
        </div>
    )
}