import axios from "axios"

const regexLetters = /^[A-Za-z]+$/

const regexId = /^[0-9]+$/

const regexBirthDayCheck = /^\d{4}-\d{2}-\d{2}$/

const regexURL = /^www\.[A-Za-z0-9-]+\.com$/ && /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

function imgTest(img){

    if(regexURL.test(img)){
        async function getimg(){
            try{
                const res = await axios(img)
                return res.status===200?'':'El URL no es una pagina en funcionamiento'
            }catch(error){
                return 'Ingrese un URL correcto'
            }}
        getimg()
    }else{
        return 'Ingrese un URL correcto'
    }
}


export async function submit (driver){
    if(Object.keys(validate(driver,False)).filter(x=>x!='').length){
        //Hay algun error
        return "There is something misspelled"
    }else{
        const endpoint = 'http://localhost:3001/drivers'
        const res = await axios.post(endpoint,driver)
        return res.status==200?"A new driver was created":"There is something misspelled"
    }
}


export function newvalidate(errors,event){
    const prop = event.target.name;
    const value = event.target.value;
    
    if(value!=''){
        switch(prop){
            case 'id':
                regexId.test(value)?
                    errors.id='':
                    errors.id='Only numbers';
                break
            case 'lastname':case 'name':case 'description':case 'nationality':
                regexLetters.test(value)
                        ?errors[prop]='':
                        errors[prop]='Only letters';
                break
            case 'dayofbirth':
                regexBirthDayCheck.test(value)?
                    errors.dayofbirth='':
                    errors.dayofbirth='The date should be in the correct format (YYYY-MM-DD).'
                break
            
            case 'Teams':
                const Teams= value.split(/, |,/)
                Teams.map(team=>{
                    regexLetters.test(team)?
                            errors.Teams='':
                            errors.Teams='Write a valid Team name'
                                })
                break
            case 'image':
                errors.image = imgTest(value)
                break

        }}
    return errors
}