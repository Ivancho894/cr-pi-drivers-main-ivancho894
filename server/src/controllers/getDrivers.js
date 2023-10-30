const { Driver, Teams } = require('../db.js');

async function getDrivers (req,res){
    try{
        const drivers = await Driver.findAll({include:Teams});
        for(let i=0;i<drivers.length;i++){
            if(drivers[i].image==='') drivers[i].image='../../F1.svg'
        }
        return res.status(200).json(drivers);
    }catch(er){
        return res.status(400).json({e:er.message})
    }
}
module.exports={
    getDrivers
}