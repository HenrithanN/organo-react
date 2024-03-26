import './CustomSelect.css';

const CustomSelect = (props) => {
    return (
        <div className='select-input'>
            <label>{ props.label }</label>
            <select>
                {props.options.map((opcao) => {
                    return <option key={opcao.key}>{ opcao.value }</option>
                })}
            </select>
        </div>
    )
}

export default CustomSelect;