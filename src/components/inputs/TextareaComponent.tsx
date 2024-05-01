import './textareaComponent.css'

type Props = {
  name?: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  value?: string | number | readonly string[] | undefined
  placeholder?: string
  isInvalid?: boolean
  disabled?: boolean
}

export function TextareaComponent({ name, onChange, value, isInvalid, disabled, placeholder }: Props) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={!isInvalid ? 'textarea-input' : 'error-style'}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  )
}