import axios from 'axios'


export default async function getDrivers(){
try{
    const {data} = await axios(`http://localhost:3001/drivers`);
    return data
}catch(error){
        alert(error.message)
        return []
    }
}