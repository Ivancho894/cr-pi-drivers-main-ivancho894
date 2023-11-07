import axios from "axios"
import { useNavigate } from "react-router-dom"

const regexLetters = /^[A-Za-z ]+$/

const regexId = /^[0-9]+$/

const regexBirthDayCheck = /^\d{4}-\d{2}-\d{2}$/

const regexURL = /^(https?|ftp):\/\/(www\.)?[^\s/$.?#].[^\s]*$/i

function birthDayCheck(value){
    console.log(value[0])
    const validDates = (1000*value[0]+100*value[1]+10*value[2]+1*value[3]) < 2023 &&
                        (1000*value[0]+100*value[1]+10*value[2]+1*value[3]) >1870 &&
                        10*value[5]+1*value[6]<13 &&
                        10*value[5]+1*value[6] !=0 &&
                        10*value[8]+1*value[9] < 32 &&
                        10*value[8]+1*value[9] !=0
    return regexBirthDayCheck.test(value) && validDates
}

function imgTest(img){

    if(regexURL.test(img)){
        async function getimg(){
            try{
                const res = await axios(img)
                return res.status===200?'':'El URL no es una pagina en funcionamiento'
            }catch(error){
                return 'Ingrese un URL correcto'
            }}
        
        return getimg().then(data=>{
            return data
        })
    }else{
        return 'Ingrese un URL correcto'
    }
}


export function submit (errors,driver){
    if(!!Object.keys(errors).filter(x=>errors[x]!='').length){
        //Hay algun error
        console.log(errors)
        return "There is something misspelled"
    }
    async function subdriver(driver){
        try{
            console.log(driver)
            const endpoint = 'http://localhost:3001/drivers'
            const {data} = await axios.post(endpoint,driver)
            console.log(data)
            return data.id
        }catch(error){
            alert(error.message)
            return 0
        }
    }
    return subdriver(driver).then(id=>{return id})
    
}


export function newvalidate(errors,event){
    const prop = event.target.name;
    const value = event.target.value;
    
    if(value!=''){
        switch(prop){
            case 'lastname':case 'name':case 'description':case 'nationality':
                regexLetters.test(value)
                        ?errors[prop]='':
                        errors[prop]='Only letters';
                break
            case 'dayofbirth':
                birthDayCheck(value)?
                    errors.dayofbirth='':
                    errors.dayofbirth='The date should be in the correct format (YYYY-MM-DD).'
                break
            
            case 'teams':
                const Teams= value.split(/, |,/)
                Teams.map(team=>{
                    regexLetters.test(team)?
                            errors.teams='':
                            errors.teams='Write a valid Team name'
                                })
                break
            case 'image':
                // errors.image = imgTest(value)
                errors.image = ''
                break

        }}
    return errors
}