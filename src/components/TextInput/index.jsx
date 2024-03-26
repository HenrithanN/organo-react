import './TextInput.css'

const TextInput = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default TextInput