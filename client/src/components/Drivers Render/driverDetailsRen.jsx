export default function DriverDetRender({driver}){
    return(
        <div>

        <div className="fixed-background-LandingPage">
            <div className='driver-details'>
                <h2 className="driver-name">Name: {driver.name+', '}Lastname: {driver.lastname}</h2>
                <img className="driver-details-img" src={driver.image} alt="" />
                <div className="driver-details-content">
                    <h3 >Description: {driver.description}</h3>
                    <h3 >Nationality: {driver.nationality}</h3>
                    <h3 >Day of birth: {driver.dayofbirth}</h3>
                    <h4>Teams: {driver.Teams?.map(x=>{return x.name + ' |'})
                    }</h4>
                </div>
            </div>
        </div>
        </div>
    )
}