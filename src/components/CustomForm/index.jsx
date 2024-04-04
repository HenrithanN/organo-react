import './CustomForm.css';
import TextInput from '../TextInput';
import CustomSelect from '../CustomSelect';
import CustomButton from '../CustomButton';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CustomForm = ({cadastrarUsuario, arrayTimes}) => {

    const onSubmitForm = (event) => {
        event.preventDefault();
        const idUsuario = uuidv4();
        cadastrarUsuario({
            nomeValue, cargoValue, imagemValue, timeValue, idUsuario
        });

        limparCamposFormulario();
    }

    const limparCamposFormulario = () => {
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const [ nomeValue, setNome ] = useState('');
    const [ cargoValue, setCargo ] = useState('');
    const [ imagemValue, setImagem ] = useState('');
    const [ timeValue, setTime ] = useState('');


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
                    placeholder="Digite o endereço da imagem ou seu usuário do Github" 
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