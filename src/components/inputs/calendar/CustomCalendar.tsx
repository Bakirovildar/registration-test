import { Calendar } from 'primereact/calendar';
import iconCalendar from '../../../assests/svg/IconCalendar.svg'
import './customCalendar.css'
import { useEffect, useState } from 'react';
import { Nullable } from 'primereact/ts-helpers';

interface ICustomCalendar {
    dateFormat?: string
    required?: boolean
    headTitle?: string
    isInvalid?: boolean
    onChange: (date: Nullable<Date>) => void
}

export const CustomCalendar = ({ dateFormat, required, headTitle, isInvalid, onChange }: ICustomCalendar) => {
    const [date, setDate] = useState<Nullable<Date>>(new Date())

    useEffect(() => {
        onChange(date)
    }, [date])

    return (
        <div className='calendar'>
            <div style={{ position: 'relative', width: '100%' }}>
                {required ? <div className='input-required'>{headTitle}<span>*</span></div> : <div className='input-required'>{headTitle}</div>}
                <Calendar className={`p-calendar-endicon ${isInvalid && 'error-calendar'}`} dateFormat={dateFormat ? dateFormat : "dd.mm.yy"} value={date} onChange={(e) => setDate(e.value)} />
                <span className="calendar-icon">
                    <img src={iconCalendar} alt="" />
                </span>
                {isInvalid && <div className='error-message'>Обязательное поле</div>}
            </div>
        </div>
    );
};
