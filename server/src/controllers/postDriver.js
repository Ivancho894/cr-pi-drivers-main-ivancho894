const {Driver} = require('../db');


async function postDriver(req,res){
    const {id,name,lastname,description,image,nationality,dayofbirth,teams} = req.body
    if(id && name && lastname && description && image && nationality && dayofbirth && teams){
        try{
            const driver = await Driver.create({
                id,
                name,
                lastname,
                description,
                image,
                nationality,
                dayofbirth
            })
            //await driver.addTeams(team)
            return res.status(200).json(driver)


        }catch(error){
            return res.status(400).json(error.message)
        }
    }
    return res.status(500).json({error: 'No estan todos los datos'})

}

module.exports={
    postDriver
}