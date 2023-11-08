import {drivers} from '../../../../server/api/db.json'

export function getDriversFromApi(){
    const apiDrivers = drivers.map(driver=>{
        return {
            id:driver.id,
            name:driver.name.forename,
            lastname:driver.name.surname,
            description:driver.description,
            image:driver.image.url!=''?driver.image.url:'https://fivethirtyeight.com/wp-content/uploads/2021/04/GettyImages-1309620771-4x3-1.jpg?w=575',
            nationality:driver.nationality,
            dayofbirth: driver.dob,
            Teams:driver.teams?.split(/, |,/).map(x=>{
                return {name:x}
            })
            
        }
    })
    return apiDrivers
}
