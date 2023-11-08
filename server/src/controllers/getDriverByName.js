const {Driver,Teams} = require('../db.js')
const {drivers} = require('../../api/db.json')



async function getDriversByName(req,res){
    try{
        let founded=[];
        const dbdrivers = await Driver.findAll({include:Teams})
        let driversByName = dbdrivers?.filter(dr=>dr.dataValues.name.toUpperCase().includes(req.query.name.toUpperCase()) )
        for(let i=0;i<15 && i<driversByName.length;i++){
            founded.push(driversByName[i])
        }
        if(founded.length<15){
            for(let j = 0;founded.length<15 && j<drivers.length;j++){
                if(drivers[j].name.forename.toUpperCase().includes(req.query.name.toUpperCase()) && !founded.find(x=>x.name===(drivers[j].name.forename)))
                founded.push({
                    id:drivers[j].id,
                    name : drivers[j].name.forename,
                    lastname : drivers[j].name.surname,
                    description : drivers[j].description,
                    image: drivers[j].image.url!=''?drivers[j].image.url:'https://fivethirtyeight.com/wp-content/uploads/2021/04/GettyImages-1309620771-4x3-1.jpg?w=575',
                    nationality: drivers[j].nationality,
                    dayofbirth: drivers[j].dob,
                    Teams:drivers[j].teams?.split(/, |,/).map(team=>{return {name:team}})

                })
            }
        }
        if (founded.length!=0){
            return res.status(200).json({founded})
        }

        return res.status(404).json({error:'No se encontraron personajes'})
    }catch(er){
        return res.status(503).json({e:er.message})
    }
}
module.exports={
    getDriversByName
}