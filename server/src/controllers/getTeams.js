const {Teams}= require('../db')
const {drivers} = require('../../api/db.json')

async function getTeams(req,res){
    try{
        
        if(!((await Teams.findAll()).length)){
            //Carga por primera vez la base de datos
            for (let i = 0;i<drivers.length;i++){
                const teams=drivers[i].teams?.split(/, |,/)
                if(teams) for(let j =0;teams.length>j;j++){
                    !(await Teams.findOne({where:{name:teams[j]}}))?
                    (await Teams.create({name:teams[j]})):null;
                }
            
            }
        }
        const theTeams = await Teams.findAll()
        return res.status(200).json(theTeams)
    }catch(e){
        return res.status(500).json(e.error)
        }

}
module.exports={
    getTeams
}