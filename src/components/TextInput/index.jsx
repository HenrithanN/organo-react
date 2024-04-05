import './TextInput.css'

const TextInput = ({obrigatorio, placeholder, label, value, changeInput}) => {

    const placeholderModificada = `${placeholder}...`;

    const onKeyUpInput = (event) => {
        changeInput(event.currentTarget.value);
    }

    return (
        <div className="text-input">
            <label>
                {label}
            </label>
            <input required={obrigatorio} value={value} onChange={onKeyUpInput} placeholder={placeholderModificada}/>
        </div>
    )
}

export default TextInput