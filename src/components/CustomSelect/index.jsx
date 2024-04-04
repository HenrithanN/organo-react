import './CustomSelect.css';

const CustomSelect = ({value, options, label, changeSelect}) => {

    const onSelectChange = (event) => {
        changeSelect(event.currentTarget.value);
    }

    return (
        <div className='select-input'>
            <label>{ label }</label>
            <select onChange={onSelectChange} value={value}>
                <option value="" disabled>Selecione</option>
                {options.map((opcao) => {
                    return <option value={opcao.id} key={opcao.id}>{ opcao.nome }</option>
                })}
            </select>
        </div>
    )
}

export default CustomSelect;