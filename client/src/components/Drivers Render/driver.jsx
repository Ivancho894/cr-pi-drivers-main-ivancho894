import {Link} from 'react-router-dom'

export default function Driver({aDriver}){
    return (
        <div >
            <h2>{aDriver.name+' '+aDriver.lastname}</h2>
            <Link to={`/driver/${aDriver.id}`} >
                <img src={aDriver.image} alt="" className='cardimg'/>
            </Link>
            <h4>|{aDriver.Teams?.map(x=>{return x.name + ' |'})
            }</h4>
        </div>
    )

}