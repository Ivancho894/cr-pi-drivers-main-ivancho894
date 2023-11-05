import {drivers} from '../../../../server/api/db.json'

export function getDriversFromApi(){
    const apiDrivers = drivers.map(driver=>{
        return {
            id:driver.id,
            name:driver.name.forename,
            lastname:driver.name.surname,
            description:driver.description,
            image:driver.image.url!=''?driver.image.url:'../../Images/NN driver.png',
            nationality:driver.nationality,
            dayofbirth: driver.dob,
            Teams:driver.teams?.split(/, |,/).map(x=>{
                return {name:x}
            })
            
        }
    })
    return apiDrivers
}
