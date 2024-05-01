import { useEffect, useState } from "react"

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
        switch (name) {
            case 'fullName':
                setFullName(value)
        }
    }

    useEffect(() => {
        console.log(fullName);

    }, [fullName])

    const clickSaveHandler = () => {
        
    }

    return {
        fullName,
        saveInfoHandler
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