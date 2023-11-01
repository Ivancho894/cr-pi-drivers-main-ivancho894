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
            if(inApi.length===1){
                driver = {
                    id:inApi[0].id,
                    name : inApi[0].name.forename,
                    lastname : inApi[0].name.surname,
                    description : inApi[0].description,
                    image: inApi[0].image?inApi[0].image.url:'',
                    nationality: inApi[0].nationality,
                    dayofbirth: inApi[0].dob,
                    Teams:inApi[0].teams?.split(/, |,/).map(team=>{return {name:team}})
                }
            }
        }
        return res.status(200).json(driver);
    }catch(error){
        return res.status(400).json({e:error.message})
    }
}
module.exports={
    getDriverById
}