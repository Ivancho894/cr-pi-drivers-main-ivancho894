import Driver from "./driver"



export default function Drivers({drivers,curPage}){
    const driversPerPage = 15;
    const startIndex = (curPage - 1) * driversPerPage;
    const endIndex = startIndex + driversPerPage;

    const driversToShow = drivers.slice(startIndex, endIndex);
    return(
        <div className='cards'>
            {driversToShow.map((aDriver,i)=>{
                return (
                    
                        <div className='card' key={i}>
                            <Driver aDriver={aDriver}/>
                        </div>
                ) }
            )}
            
        </div>
    )
}