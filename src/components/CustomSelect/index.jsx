import './CustomSelect.css';

const CustomSelect = (props) => {

    const onSelectChange = (event) => {
        props.changeSelect(event.currentTarget.value);
    }

    return (
        <div className='select-input'>
            <label>{ props.label }</label>
            <select onChange={onSelectChange} value={props.value}>
                <option value="">Selecione</option>
                {props.options.map((opcao) => {
                    return <option value={opcao.key} key={opcao.key}>{ opcao.nome }</option>
                })}
            </select>
        </div>
    )
}

export default CustomSelect;