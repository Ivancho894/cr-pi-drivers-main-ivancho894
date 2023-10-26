const {Driver} = require('../db.js')
const {drivers} = require('../../api/db.json')



async function getDriversByName(req,res){
    try{
        let founded=[];
        const driversByName = await Driver.findAll({where:{name: req.query.name }})
        for(let i=0;i<15 && i<driversByName.length;i++){
            founded.push(driversByName[i])
        }
        if(founded.length<15){
            for(let j = 0;founded.length<15 && j<drivers.length;j++){
                if(drivers[j].name.forename==req.query.name && !founded.find(x=>x.name===(drivers[j].name.forename)))
                founded.push({
                    id:drivers[j].id,
                    name : drivers[j].name.forename,
                    lastname : drivers[j].name.surname,
                    description : drivers[j].description,
                    image: drivers[j].image?drivers[j].image.url:'',
                    nationality: drivers[j].nationality,
                    dayofbirth: drivers[j].dob

                })
            }
        }
        if (founded.length!=0){
            return res.status(200).json({founded})
        }
        return res.status(401).json({error:'No se encontraron personajes'})
    }catch(er){
        return res.status(503).json({e:er.message})
    }
}
module.exports={
    getDriversByName
}