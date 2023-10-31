import Drivers from "./Drivers Render/drivers";
import { useState,useEffect } from 'react';
import getDrivers from "./Drivers Render/getDrivers";
import Filter from "./filter";

export default function HomePage(){
    const [drivers,setDrivers] = useState([])
    useEffect(()=>{
        getDrivers().then(dr=>setDrivers(dr))
    },[])
    const filterDr = (dr)=>{
        setDrivers(dr)
    }

    return (
        <div>
            <h1>ESTA ES LA HOME PAGE</h1>
            <Filter drivers={drivers} filterDr={filterDr}/>
            <Drivers drivers={drivers}/>
        </div>
    )
}