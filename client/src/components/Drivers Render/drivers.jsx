import Driver from "./driver"



export default function Drivers({drivers}){
    
    return(
        <div>
            {drivers.map(aDriver=>{
                return (
                    <div>
                        <Driver aDriver={aDriver}/>
                    </div>
                ) }
            )}
            
        </div>
    )
}