

export default function Driver({aDriver}){
console.log(aDriver,'fffffffffS')
    return (
        <div>
            <h4>{aDriver.name}</h4>
            <h4>{aDriver.lastname}</h4>
            <h4>{aDriver.nationality}</h4>
            <h4>{aDriver.description}</h4>
        </div>
    )

}