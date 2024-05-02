import { useEffect, useState } from "react"
import { concatFullName } from "../../entity/register/utils"
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
    const [isSuccessful, setIsSuccessful] = useState(false)

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

    useEffect(() => {
        if (!fullName || !gender || !birthDate) {
            setIsInvalid(false)
        }
    }, [fullName, gender, birthDate])

    const clickSaveHandler = async () => {
        if (!fullName || !gender || !birthDate) {
            setIsInvalid(true)
            return
        }

        const registerData = {
            fullName,
            gender,
            birthDate,
            university,
            yearEnding,
            workName,
            duties
        }

        const apiUser = await register()

        const isSuccessful = fullName !== concatFullName(apiUser.name.first, apiUser.name.last)

        alert(isSuccessful ? 'Вы успешно зарегистрировались' : 'Вы уже зарегистрированы')
        console.log(registerData);
    }

    return {
        fullName,
        saveInfoHandler,
        gender,
        birthDate,
        clickSaveHandler,
        isInvalid,
        setGender,
        setFullName,
        setBirthDate
    }
}
