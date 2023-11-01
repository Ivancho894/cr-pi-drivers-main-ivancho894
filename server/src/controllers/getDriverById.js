const { Driver,Teams} = require('../db.js');
const {drivers} = require('../../api/db.json')

async function getDriverById (req,res){
    const {id} = req.params; 
    try{
        let driver = await Driver.findByPk(id,{
            include: Teams
        });
        if(!driver){
            console.log(drivers)
            const inApi = drivers.filter(x=>x.id==id)
            driver = inApi.length===1?inApi:{e:'Error en encontrar a tu personaje'}
        }
        return res.status(200).json(driver);
    }catch(error){
        return res.status(400).json({e:error.message})
    }
}
module.exports={
    getDriverById
}