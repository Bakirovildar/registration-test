import { useMemo, useState } from 'react'
import Select, { SingleValue } from 'react-select'
import './select.css'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'

type IProps<T extends string> = {
    onChange: (value?: T) => void
    value?: { value: T; label: string } | null
    options: ReadonlyArray<T>
    isValid?: boolean
    required?: boolean
    headTitle?: string
    isInvalid?: boolean
    disabled?: boolean
    placeholder?: string
}

export function SelectComponent<T extends string>({
    options,
    onChange,
    value,
    isInvalid,
    isValid,
    disabled,
    headTitle,
    required = false,
    placeholder = 'Выберите значения',
}: IProps<T>) {
    const [isOpen, setIsOpen] = useState(false)

    const newOptions = useMemo(() => {
        return options.map((value) => ({ value: value, label: value }))
    }, [options])

    return (
        <div style={{ width: '100%' }}>
            {required ? <div className='input-required'>{headTitle}<span>*</span></div> : <div className='input-required'>{headTitle}</div>}
            <Select
                components={{
                    DropdownIndicator: () =>
                        isOpen ? (
                            <KeyboardArrowUp />
                        ) : (
                            <KeyboardArrowDown />
                        ),
                }}
                options={newOptions}
                onMenuOpen={() => setIsOpen(true)}
                onMenuClose={() => setIsOpen(false)}
                classNamePrefix={isInvalid || isValid ? 'error-select' : 'react-select'}
                placeholder={placeholder}
                value={value}
                isDisabled={disabled}
                onChange={(newValue: SingleValue<{ value: T; label: string }> | null) => onChange(newValue?.value)}
            />
            {isInvalid && <div className='error-message'>Обязательное поле</div>}
        </div>
    )
}