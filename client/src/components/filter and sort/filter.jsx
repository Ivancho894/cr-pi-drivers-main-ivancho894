import { useSelector,useDispatch } from "react-redux"
import { ORIGIN_FILTER, TEAM_FILTER } from "../../redux/actions";

export default function Filter(){
    const allDrivers = useSelector(state=>state.allDrivers)
    const dispatch = useDispatch();

    const theTeams=[]
    allDrivers.map(x=>x.Teams?.map(team=>
                            theTeams.find(x=>x==team.name)?
                            null:theTeams.push(team.name)
                            )
                    )
            

    const handleTeamFilter = (event) => {
        dispatch(TEAM_FILTER(event.target.value))
    }
    const handleOriginFilter = (event) => {
        dispatch(ORIGIN_FILTER(event.target.value))
    }    

    return (
        <div>
            <select name="" id="" onChange={handleTeamFilter}>
                <option value="-">All Teams</option>
                {theTeams.map(team=>{
                    return (<option value={team}>{team}</option>)
                })}
            </select>
            <select name="" id="" onChange={handleOriginFilter}>
                <option value="all">All</option>
                <option value="db">DataBase</option>
                <option value="api">API</option>
            </select>
        </div>
    )


    }
