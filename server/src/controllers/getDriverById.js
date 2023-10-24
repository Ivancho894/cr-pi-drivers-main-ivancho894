const { Driver,Teams} = require('./db.js');

async function getDrivierById (req,res){
    const {id} = req.params;
    try{
        const driver = Driver.findByPk(id,{
            include: Teams
        });
        return res.status(200).json(driver);
    }catch(er){
        return res.status(400).json({e:er})
    }
}
module.exports={
    getDrivierById
}