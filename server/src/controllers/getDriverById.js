const { Driver,Teams} = require('../db.js');

async function getDriverById (req,res){
    const {id} = req.params; 
    try{
        const driver = await Driver.findByPk(id,{
            include: Teams
        });
        return res.status(200).json(driver);
    }catch(error){
        return res.status(400).json({e:error.message})
    }
}
module.exports={
    getDriverById
}