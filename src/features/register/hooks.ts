import { Nullable } from "primereact/ts-helpers";
import { useEffect, useState } from "react";
import { User, UserService, UserValidationError } from "../../services/userService";

export const useSaveInfo = () => {
    const [fullName, setFullName] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [birthDate, setBirthDate] = useState<Nullable<Date>>()
    const [university, setUniversity] = useState<string>('')
    const [yearEnding, setYearEnding] = useState<Nullable<Date>>()
    const [workName, setWorkName] = useState<string>('')
    const [duties, setDuties] = useState<string>('')

    const [isInvalid, setIsInvalid] = useState(false)

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
            const isSuccessful = await UserService.saveUser(registerData);
            alert(isSuccessful ? 'Вы успешно зарегистрировались' : 'Вы уже зарегистрированы')
        } catch (err: any) {
            if (err instanceof UserValidationError) {
                setIsInvalid(true)
            }
        }
    }

    return {
        fullName,
        gender,
        birthDate,
        clickSaveHandler,
        isInvalid,
        setGender,
        setFullName,
        setBirthDate,
        setUniversity,
        setYearEnding,
        setWorkName,
        setDuties
    }
}