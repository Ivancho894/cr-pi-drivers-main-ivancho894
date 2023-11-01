import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom"

import axios from 'axios';

export default function DriverDetails(){
    const {id} = useParams();
    console.log(id)
    const [driver,setDriver] = useState({})
    useEffect(()=>{
        const endpoint = 'http://localhost:3001/drivers/'
        async function getdr(){try{
            const {data} = await axios(endpoint+id)
            // console.log(data)
            setDriver(data)
        }catch(error){
            alert(error.message)
        }}
        getdr()
    },[])
    console.log(driver)
    return(
        <div>
            <h2>{driver.name+' '+driver.lastname}</h2>
            <img src={driver.image} alt="" className='cardimg'/>
            <h4>|{driver.Teams?.map(x=>{return x.name + ' |'})
            }</h4>
        </div>
    )
}