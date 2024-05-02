import {Calendar} from 'primereact/calendar';
import iconCalendar from '../../../assests/svg/IconCalendar.svg'
import './customCalendar.css'
import {useEffect, useState} from 'react';
import {Nullable} from 'primereact/ts-helpers';
import {addLocale} from "primereact/api";

interface ICustomCalendar {
    dateFormat?: string
    required?: boolean
    headTitle?: string
    isInvalid?: boolean
    onChange: (date: Nullable<Date>) => void
}

addLocale('ru', {
    firstDayOfWeek: 1,
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
});
export const CustomCalendar = ({dateFormat, required, headTitle, isInvalid, onChange}: ICustomCalendar) => {
    const [date, setDate] = useState<Nullable<Date>>()

    useEffect(() => {
        onChange(date)
    }, [date])

    return (
        <div className='calendar'>
            <div style={{position: 'relative', width: '100%'}}>
                {required ? <div className='input-required'>{headTitle}<span>*</span></div> :
                    <div className='input-required'>{headTitle}</div>}
                <Calendar className={`p-calendar-endicon ${isInvalid && 'error-calendar'}`}
                          dateFormat={dateFormat ? dateFormat : "dd.mm.yy"}
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          view={dateFormat === "yy" ? "year" : "date"}
                          placeholder={dateFormat === "yy" ? "0000" : "00.00.0000"}
                          locale='ru'/>
                <span className="calendar-icon">
                    <img src={iconCalendar} alt=""/>
                </span>
                {isInvalid && <div className='error-message'>Обязательное поле</div>}
            </div>
        </div>
    );
};