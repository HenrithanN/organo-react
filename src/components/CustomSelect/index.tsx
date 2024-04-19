import { ITime } from '../../shared/interfaces/ITimes';
import './CustomSelect.css';

interface CustomSelectProps {
    value: string, 
    options: ITime[], 
    label: string, 
    changeSelect: (value: any) => void
}

const CustomSelect = ({value, options, label, changeSelect}: CustomSelectProps) => {

    const onSelectChange = (event: any) => {
        changeSelect(event.currentTarget.value);
    }

    return (
        <div className='select-input'>
            <label>{ label }</label>
            <select onChange={onSelectChange} value={value}>
                <option value="" disabled>Selecione</option>
                {options.map((opcao) => {
                    return <option value={opcao.idTime} key={opcao.idTime}>{ opcao.nome }</option>
                })}
            </select>
        </div>
    )
}

export default CustomSelect;