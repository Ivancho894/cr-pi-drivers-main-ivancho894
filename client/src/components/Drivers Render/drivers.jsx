import Driver from "./driver"
import axios from 'axios'
import { useState,useEffect } from 'react';



export default async function Drivers(){
    // const [drivers, setDrivers] = useState([]); 

    // try{
    //     const {data} = await axios('http://192.168.27.77:3001/drivers');
    //     setDrivers(()=>data)
    // }catch(error){
        //     alert(error.message)
        // }
        const {data} = await axios('http://192.168.27.77:3001/drivers');
            console.log(data)
    return(
        <div>
            {data.map(aDriver=>{
                return (
                    <div>
                        <Driver aDriver={aDriver}/>
                    </div>
                )
            })}
        </div>
    )
}