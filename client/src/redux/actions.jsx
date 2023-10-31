import axios from "axios";
import getDriversFromApi from "../components/Drivers Render/getDrivers";


export function GET_DRIVERS(){
    const endpoint = `http://localhost:3001/drivers`;
    return async (dispatch)=>{
        try{
            const {data} = await axios(endpoint)
        
            const fromApi = getDriversFromApi()
            
            const drivers = {
                dbDrivers:data,
                apiDrivers: fromApi
            }

            return dispatch({
                type:'GET_DRIVERS',
                payload: drivers
            })
            
        }catch(error){
            alert(error.message)
        }
    }
}

export function ORIGIN_FILTER(origin){
    if(origin==='db')return {type:'ONLY_DB'}
    if(origin==='api')return {type:'ONLY_API'}
    return {type:''}
}

export function TEAM_FILTER(team){
    return {type:"TEAM_FILTER",payload:team}
}


export function ORDER_DRIVERS({order,type}){
    return {type:'ORDER',payload:{order,type}}
}


export function SEARCH_DRIVERS(name){
    const endpoint = 'http://localhost:3001/drivers/name?name='
    return async (dispatch)=>{
        try{
            const {data} = await axios(endpoint+name)
            
            const drivers = data.founded!=[]?data.founded:state.allDrivers
            return dispatch({type:'SEARCH',payload:drivers})
        }catch(error){
                alert('No se encontraron personajes con ese nombre')
                return
        }}
}

