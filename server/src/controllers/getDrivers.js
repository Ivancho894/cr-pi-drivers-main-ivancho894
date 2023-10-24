const { Driver } = require('./db.js');

async function getDriviers (req,res){
    try{
        const drivers = Driver.findAll();
        return res.status(200).json(drivers);
    }catch(er){
        return res.status(400).json({e:er})
    }
}
module.exports={
    getDriviers
}