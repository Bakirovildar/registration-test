import Button from '../../components/buttons/Button'
import { InputComponent } from '../../components/inputs/InputComponent'
import { TextareaComponent } from '../../components/inputs/TextareaComponent'
import { SelectComponent } from '../../components/selects/SelectComponent'
import { PersonalInfoComponent } from '../../features/register/PersonalInfoComponent'
import { Nullable } from "primereact/ts-helpers";
import './signUp.css'
import { useEffect, useState } from 'react'
import { CustomCalendar } from '../../components/inputs/calendar/CustomCalendar'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../store/reducers'
import { useSaveInfo } from '../../features/register/hooks'

export const SignUp = () => {
    const [date, setDate] = useState<Nullable<Date>>(null);

    const { saveInfoHandler, fullName, clickSaveHandler } = useSaveInfo()

    return (
        <div className="signUp-container">
            <h1>Регистрация</h1>
            <div className='signUp-main'>
                <PersonalInfoComponent headTitle='О себе'>
                    <InputComponent
                        headTitle='ФИО'
                        placeholder='Введите ФИО'
                        required={true}
                        isInvalid={!fullName}
                        onChange={event => saveInfoHandler('fullName', event.target.value)} />
                    <div className='sign-justify'>
                        <SelectComponent required headTitle='Пол' options={['Мужской', 'Женский']} onChange={value => console.log(value)} placeholder='Выберите пол' />
                        <CustomCalendar headTitle='Дата рождения' required onChange={(date) => console.log(date)} />
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