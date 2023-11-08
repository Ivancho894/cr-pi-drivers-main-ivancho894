import { useSelector,useDispatch } from "react-redux"
import { ORIGIN_FILTER, TEAM_FILTER ,ORDER_DRIVERS,GET_DRIVERS} from "../../redux/actions";
import { useEffect, useState} from 'react';

export default function SandF (){
    //sort
    const [type,setType] = useState('')
    const [order,setOrder] = useState('')
    const [team,setTeam] = useState('-')
    const [source,setSource] = useState('all')

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(ORDER_DRIVERS({order,type}))
        dispatch(ORIGIN_FILTER(source))

    },[])
    const apiDrivers = useSelector(state=>state.apiDrivers)
    const dbDrivers = useSelector(state=>state.dbDrivers)
    const allDrivers = [...apiDrivers,...dbDrivers]
    let theTeams=[]
    allDrivers.map(x=>x.Teams?.map(team=>
                            theTeams.find(x=>x==team.name)?
                            null:theTeams.push(team.name)
                            )
                    )
    const handleOrderType = (event)=>{
        setType(event.target.value)
        dispatch(ORDER_DRIVERS({order,type:event.target.value}))
    }

    const handleOrder = (event)=>{
        setOrder(event.target.value)
        dispatch(ORDER_DRIVERS({order: event.target.value,type}))
    }
    
    const handleTeamFilter = (event) => {
        setType('')
        setOrder('')
        setSource('all')
        setTeam(event.target.value)
        dispatch(TEAM_FILTER(event.target.value))
    }
    const handleOriginFilter = (event) => {
        setSource(event.target.value)
        setType('')
        setOrder('')
        setTeam('-')
        dispatch(ORIGIN_FILTER(event.target.value))
    }   
  

    return (
        <div>
            <select name="" id="" value={order} placeholder={order} onChange={handleOrder} >
                <option value="">Please Choose...</option>
                <option value="A">Ascendente</option>
                <option value="B">Descendente</option>
            </select>
            <select name="" id="" value={type}  onChange={handleOrderType}>
                <option value="" >Please Choose...</option>
                <option value="name">Name</option>
                <option value="dayofbirth">Day of birth</option>
            </select>
        
        <select name="" id="" value={team} onChange={handleTeamFilter}>
            <option value="-">All Teams</option>
            {theTeams.map((team,i)=>{
                return (<option value={team} key={i}>{team}</option>)
            })}
        </select>
        <select name="" id="" value={source} onChange={handleOriginFilter}>
            <option value="all">All</option>
            <option value="db">DataBase</option>
            <option value="api">API</option>
        </select>
    </div>
    )

}