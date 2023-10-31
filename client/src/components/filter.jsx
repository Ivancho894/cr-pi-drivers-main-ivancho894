import getDrivers from "./Drivers Render/getDrivers"

export default function Filter({drivers,filterDr}){
    const theTeams=[]
    drivers.map(x=>x.Teams?.map(team=>
                            theTeams.find(x=>x==team.name)?
                            null:theTeams.push(team.name))
        )
    const handleTeamFilter = (event) => {
        const newDrivers = []
        if(event.target.value!='-'){
            drivers.map(x=>{
                x.Teams.find(t=>t.name==event.target.value)?newDrivers.push(x):null;
            })
            filterDr(newDrivers)
        }else{
            getDrivers().then(x=>filterDr(x))
        }
    }
    const handleOriginFilter = (event) => {
        //por base de datos o api
    }    
    return (
        <div>
            <h1>{theTeams}</h1>
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
