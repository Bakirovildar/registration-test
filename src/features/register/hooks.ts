import { useState } from "react"
import { concatFullName } from "../../entity/register/utils"
import { registerUser } from "../../services/register-service"
import { register } from "../../services/userApiService"

export const useSaveInfo = () => {
    const [fullName, setFullName] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [birthDate, setBirthDate] = useState<string>('')
    const [university, setUniversity] = useState<string>('')
    const [yearEnding, setYearEnding] = useState<string>('')
    const [workName, setWorkName] = useState<string>('')
    const [duties, setDuties] = useState<string>('')

    const [isInvalid, setIsInvalid] = useState(false)


    const saveInfoHandler = (name: string, value: string) => {
        const newLocal = 'gender'
        switch (name) {
            case 'fullName':
                setFullName(value);
                break;
            case newLocal:
                setGender(value);
                break;
            case 'birthDate':
                setBirthDate(value);
                break;
            case 'university':
                setUniversity(value);
                break;
            case 'yearEnding':
                setYearEnding(value);
                break;
            case 'workName':
                setWorkName(value);
                break;
            case 'duties':
                setDuties(value);
                break;
        }
    }

    

    const clickSaveHandler = async() => {
        const apiUser = await register()

        const isSuccessfull = registerUser(fullName, concatFullName(apiUser.name.first, apiUser.name.last))
    
        console.log(isSuccessfull);
        
    }

    return {
        fullName,
        saveInfoHandler,
        gender,
        birthDate,
        clickSaveHandler
    }
}



/*/
fullName: '',
        gender: '',
        birthDate: '',
        university: '',
        yearEnding: '',
        workName: '',
        duties: '' 
/*/