import { useEffect, useState } from "react"
import {saveUser, User} from "../../services/registerService";

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

    useEffect(() => {
        if (!fullName || !gender || !birthDate) {
            setIsInvalid(false)
        }
    }, [fullName, gender, birthDate])

    const clickSaveHandler = async () => {
        try {
            const registerData: User = {
                fullName,
                gender,
                birthDate,
                university,
                yearEnding,
                workName,
                duties
            }
            const isSuccessful = await saveUser(registerData);
            alert(isSuccessful ? 'Вы успешно зарегистрировались' : 'Вы уже зарегистрированы')
        } catch (err: any) {
            if (err.name === 'UserInputValidationError'){
                setIsInvalid(true)
            }
        }
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