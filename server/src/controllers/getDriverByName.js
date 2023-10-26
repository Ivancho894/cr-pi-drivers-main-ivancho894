const {Driver} = require('../db')
const {drvers} = require('../../api/db.json')

async function getDriversByName(req,res){
    try{
        let founded = []
        const driversByName = Driver.findAll({where:{name:req.body}})
        for(let i=0;i<15 && i<driversByName.length;i++){
            founded.append(driversByName[i])
        }
        if(founded.length<15){
            for(let j = 0;founded.length<15 && j<drivers.length;j++){
            if(drivers[j].name===req.body)
                founded.append(drivers[j])
            }
        }
        if (founded!=[]){
            return res.status(200).json({founded})
        }
        return res.status(400).json({error:'No se encontraron personajes'})
    }catch(er){
        return res.status(500).json({e:er})
    }
}
module.exports={
    getDriversByName
}