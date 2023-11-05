import Driver from "./driver"



export default function Drivers({drivers}){
    
    return(
        <div className='cards'>
            {drivers.map((aDriver,i)=>{
                return (
                    
                        <div className='card' key={i}>
                            <Driver aDriver={aDriver}/>
                        </div>
                ) }
            )}
            
        </div>
    )
}