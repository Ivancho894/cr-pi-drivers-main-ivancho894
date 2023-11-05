export default function DriverDetRender({driver}){
    return(
        <div>
            <h2>Name: {driver.name+', '}Lastname: {driver.lastname}</h2>
            <img src={driver.image} alt="" className='cardimg'/>
            <h3>Description: {driver.description}</h3>
            <h3>Nationality: {driver.nationality}</h3>
            <h3>Day of birth: {driver.dayofbirth}</h3>
            <h4>Teams: {driver.Teams?.map(x=>{return x.name + ' |'})
            }</h4>
        </div>
    )
}