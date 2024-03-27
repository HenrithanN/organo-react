import './CustomForm.css';
import TextInput from '../TextInput';
import CustomSelect from '../CustomSelect';
import CustomButton from '../CustomButton';
import { useState } from 'react';

const CustomForm = (props) => {
    
    const arrayTimes = [
        { key: 'A', value: 'Programação' },
        { key: 'B', value: 'Front-End' },
        { key: 'C', value: 'Data Science' },
        { key: 'D', value: 'Devops' },
        { key: 'E', value: 'UX e Design' },
        { key: 'F', value: 'Programação' },
        { key: 'G', value: 'Mobile' },
        { key: 'H', value: 'Inovação e Gestão' }
    ];

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log('valorCamposForm', nomeValue, cargoValue, imagemValue, timeValue);
    }

    const [ nomeValue, setNome ] = useState('');
    const [ cargoValue, setCargo ] = useState('');
    const [ imagemValue, setImagem ] = useState('');
    const [ timeValue, setTime ] = useState('A');


    return (
        <section className='custom-form'>
            <form onSubmit={onSubmitForm}>        
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextInput 
                    value={nomeValue} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    changeInput={value => setNome(value)}
                />
                <TextInput 
                    value={cargoValue} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    changeInput={value => setCargo(value)}
                />
                <TextInput 
                    value={imagemValue} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    changeInput={value => setImagem(value)}
                />
                <CustomSelect 
                    value={timeValue}
                    label="Times" 
                    options={arrayTimes} 
                    changeSelect={value => setTime(value)}
                />
                <CustomButton> Criar card </CustomButton>
            </form>
        </section>
    )
}

export default CustomForm