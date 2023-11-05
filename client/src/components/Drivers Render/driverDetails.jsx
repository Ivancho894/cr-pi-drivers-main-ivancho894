import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom"

import axios from 'axios';
import DriverDetRender from './driverDetailsRen';

export default function DriverDetails(){
    const {id} = useParams();
    const [driver,setDriver] = useState({})
    useEffect(()=>{
        const endpoint = 'http://localhost:3001/drivers/'
        async function getdr(){
        try{
            const {data} = await axios(endpoint+id)
            setDriver(data)
        }catch(error){
            alert(error.message)
        }}
        getdr()
    },[])
    return(
        <div>
            <DriverDetRender driver={driver}/>
        </div>
    )
}