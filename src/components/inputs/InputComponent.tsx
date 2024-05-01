import './inputComponent.css'

interface IProps {
  name?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  value?: string | number | readonly string[] | undefined
  style?: React.CSSProperties
  isInvalid?: boolean
  disabled?: boolean
  type?: React.HTMLInputTypeAttribute
  readonly?: boolean
  required?: boolean
  headTitle?: string
  placeholder?: string
}

export const InputComponent = ({
  name,
  onChange,
  onBlur,
  style,
  value,
  isInvalid,
  disabled,
  readonly,
  type = 'text',
  required = false,
  headTitle,
  placeholder,
}: IProps) => {
  return (
    <div>
    {required ? <div className='input-required'>{headTitle}<span>*</span></div> : <div className='input-required'>{headTitle}</div>}
    <div className={!isInvalid ? 'search_input' : 'error-style'} style={style}>
      <input
        name={name}
        readOnly={readonly}
        className='text-input'
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
    {isInvalid && <span className='error-message'>Обязательное поле</span>}
    </div>
  )
}