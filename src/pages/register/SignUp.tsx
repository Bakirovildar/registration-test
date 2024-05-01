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

    const { saveInfoHandler, fullName, clickSaveHandler, isInvalid, birthDate, setBirthDate, setFullName, setGender, gender } = useSaveInfo()

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
                        onChange={event => saveInfoHandler('fullName', event.target.value)} />
                    <div className='sign-justify'>
                        <SelectComponent
                            required
                            headTitle='Пол'
                            isInvalid={!gender && isInvalid}
                            options={['Мужской', 'Женский']}
                            onChange={value => saveInfoHandler('gender', value)}
                            placeholder='Выберите пол' />
                        <CustomCalendar
                            headTitle='Дата рождения'
                            isInvalid={!birthDate && isInvalid}
                            required
                            onChange={date => saveInfoHandler('birthDate', date ? date.toISOString() : '' )} />
                    </div>
                </PersonalInfoComponent>

                <PersonalInfoComponent headTitle='Образование'>
                    <div className='sign-justify'>
                        <SelectComponent headTitle='ВУЗ' options={['МГУ', 'МГТУ', 'БГУ']} onChange={value => console.log(value)} placeholder='Выберите ВУЗ' />
                        <div className='calendar-year'>
                            <CustomCalendar headTitle='Год окончания' dateFormat='yy' onChange={(date) => console.log(date)} />
                        </div>
                    </div>
                </PersonalInfoComponent>

                <PersonalInfoComponent headTitle='Работа'>
                    <SelectComponent headTitle='Место работы' options={['МГУ', 'МГТУ', 'БГУ']} onChange={value => console.log(value)} placeholder='Место работы' />
                    <TextareaComponent onChange={event => console.log(event.target.value)} placeholder='Должностные обязанности' />

                    <div style={{ textAlign: 'center', marginTop: '4px' }}>
                        <Button onClick={clickSaveHandler} className='button-black'>Сохранить</Button>
                    </div>
                </PersonalInfoComponent>
            </div>
        </div>
    )
}