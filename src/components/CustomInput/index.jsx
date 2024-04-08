import './CustomInput.css'

const CustomInput = ({obrigatorio, type = 'text', placeholder, label, value, changeInput}) => {

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