
export default function Driver({aDriver}){
    return (
        <div >
            <h2>{aDriver.name+' '+aDriver.lastname}</h2>
            <img src={aDriver.image} alt="" className='cardimg'/>
            <h4>|{aDriver.Teams.map(x=>{return x.name + ' |'})}</h4>
        </div>
    )

}