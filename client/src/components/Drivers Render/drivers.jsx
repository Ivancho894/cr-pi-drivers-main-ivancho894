import Driver from "./driver"



export default function Drivers({drivers}){
    
    return(
        <div className='cards'>
            {drivers.map(aDriver=>{
                return (
                    
                        <div className='card'>
                            <Driver aDriver={aDriver}/>
                        </div>
                ) }
            )}
            
        </div>
    )
}