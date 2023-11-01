import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom"



export default function DriverDetails(){
    const {id} = useParams();
    const [driver,setDriver] = useState({})
    useEffect(async ()=>{
        const endpoint = 'http://localhost:3001/drivers/'
        try{
            const {data} = await axios(endpoint+id)
            setDriver(data)
        }catch(error){}
    },[])
    return(
        <div>
            <h2>{driver.name+' '+driver.lastname}</h2>
            <img src={driver.image} alt="" className='cardimg'/>
            <h4>|{driver.Teams?.map(x=>{return x.name + ' |'})
            }</h4>
        </div>
    )
}