import './TextInput.css'

const TextInput = (props) => {

    const placeholderModificada = `${props.placeholder}...`;

    const onKeyUpInput = (event) => {
        props.changeInput(event.currentTarget.value);
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onKeyUpInput} placeholder={placeholderModificada}/>
        </div>
    )
}

export default TextInput