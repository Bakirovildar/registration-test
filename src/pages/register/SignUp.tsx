import { Nullable } from "primereact/ts-helpers"
import { useState } from 'react'
import Button from '../../components/buttons/Button'
import { InputComponent } from '../../components/inputs/InputComponent'
import { TextareaComponent } from '../../components/inputs/TextareaComponent'
import { CustomCalendar } from '../../components/inputs/calendar/CustomCalendar'
import { SelectComponent } from '../../components/selects/SelectComponent'
import { PersonalInfoComponent } from '../../features/register/PersonalInfoComponent'
import { useSaveInfo } from '../../features/register/hooks'
import './signUp.css'

export const SignUp = () => {
    const [date, setDate] = useState<Nullable<Date>>(null);

    const {
        fullName,
        clickSaveHandler,
        isInvalid,
        birthDate,
        gender,
        setBirthDate,
        setFullName,
        setGender,
        setUniversity,
        setDuties,
        setWorkName,
        setYearEnding
    } = useSaveInfo()

    return (
        <div className="signUp-container">
            <h1>Регистрация</h1>
            <div className='signUp-main'>
                <PersonalInfoComponent headTitle='О себе'>
                    <InputComponent
                        headTitle='ФИО'
                        placeholder='Введите ФИО'
                        required={true}
                        isInvalid={!fullName && isInvalid}
                        onChange={event => setFullName(event.target.value)} />
                    <div className='sign-justify'>
                        <SelectComponent
                            required
                            headTitle='Пол'
                            isInvalid={!gender && isInvalid}
                            options={['Мужской', 'Женский']}
                            onChange={value => setGender(value)}
                            placeholder='Выберите пол' />
                        <CustomCalendar
                            headTitle='Дата рождения'
                            isInvalid={!birthDate && isInvalid}
                            required
                            onChange={date => setBirthDate(date)} />
                    </div>
                </PersonalInfoComponent>

                <PersonalInfoComponent headTitle='Образование'>
                    <div className='sign-justify'>
                        <SelectComponent headTitle='ВУЗ' options={['МГУ', 'МГТУ', 'БГУ']} onChange={value => setUniversity(value)} placeholder='Выберите ВУЗ' />
                        <div className='calendar-year'>
                            <CustomCalendar headTitle='Год окончания' dateFormat='yy' onChange={(date) => setYearEnding(date)} />
                        </div>
                    </div>
                </PersonalInfoComponent>

                <PersonalInfoComponent headTitle='Работа'>
                    <SelectComponent headTitle='Место работы' options={['МГУ', 'МГТУ', 'БГУ']} onChange={value => setWorkName(value)} placeholder='Место работы' />
                    <TextareaComponent onChange={event => setDuties(event.target.value)} placeholder='Должностные обязанности' />

                    <div style={{ textAlign: 'center', marginTop: '4px' }}>
                        <Button onClick={clickSaveHandler} className='button-black'>Сохранить</Button>
                    </div>
                </PersonalInfoComponent>
            </div>
        </div>
    )
}