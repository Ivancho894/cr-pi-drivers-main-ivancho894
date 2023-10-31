const {Driver,Teams} = require('../db');

async function postDriver(req,res){
    const {id,name,lastname,description,image,nationality,dayofbirth,teams} = req.body
    if(true){
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
            const theTeams=teams.split(/, |,/)
            for (let i = 0;i<theTeams.length;i++){
                let thisTeam = (await Teams.findOne({where:{name:theTeams[i]}}))
                thisTeam = thisTeam?thisTeam:(await Teams.create({name:theTeams[i]}));

                const p = await driver.addTeams(thisTeam)
            }
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