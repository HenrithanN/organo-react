import './CustomInput.css'

interface CustomInputProps {
    obrigatorio?: boolean, 
    type?: string, 
    placeholder?: string, 
    label: string, 
    value: string, 
    changeInput: (valor: string) => void
}

const CustomInput = ({obrigatorio, type = 'text', placeholder, label, value, changeInput}: CustomInputProps) => {

    return (
        <div className={`custom-input ${type}-input`}>
            <label>
                {label}
            </label>
            <input 
                type={type}
                value={value}
                required={obrigatorio}
                placeholder={placeholder}
                onChange={(event) => changeInput(event.currentTarget.value)}
            />
        </div>
    )
}

export default CustomInput