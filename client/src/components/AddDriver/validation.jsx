import axios from "axios"

const regexLetters = /[a-z]/gi
const lettersCheck = ['name','lastname','description','nationality']

const birthDayCheck = /^\d{4}-\d{2}-\d{2}$/

const regexURL = `/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)
(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
`


async function imgTest(img){
    if(regexURL.test(driver.image)){
        const res = await axios(img)
        return res.status===200?'':'El URL no es una pagina en funcionamiento'
    }else{
        return 'Ingrese un URL correcto'
    }
}

export function validate (driver,event){
//FALTA LA VALIDACION DEL ID

    let errors = {}
    event?driver[event.target.name]=event.target.value:null;
    lettersCheck.map(prop =>
        {regexLetters.test(driver[prop])
            ?errors[prop]='':
            errors[prop]='Only letters';
        })
    
    birthDayCheck.test(driver.dayofbirth)?
        errors.dayofbirth='':
        errors.dayofbirth='The date should be in the correct format (YYYY-MM-DD).'
    
    errors.image = imgTest(driver.image)
    
    const Teams= driver.Teams.split(/, |,/)
    Teams.map(team=>lettersCheck.test(team)?
                errors.Teams='':
                errors.Teams='Write a valid Team name'
                    )

    return errors

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