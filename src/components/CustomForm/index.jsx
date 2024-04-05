import './CustomForm.css';
import TextInput from '../TextInput';
import CustomSelect from '../CustomSelect';
import CustomButton from '../CustomButton';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CustomForm = ({cadastrarUsuario, cadastrarTime, arrayTimes}) => {

    const cadastrarNovoUsuario = (event) => {
        event.preventDefault();
        const idUsuario = uuidv4();
        cadastrarUsuario({
            nomeValue, cargoValue, imagemValue, timeValue, idUsuario
        });

        limparCamposFormularioUsuario();
    }

    const cadastrarNovoTime = (event) => {
        event.preventDefault();

        const objNovoTime = { 
            idTime: uuidv4(), 
            nome: nomeTimeValue, 
            corPrimaria: corPrimariaValue, 
            corSecundaria: corSecundariaValue
        }

        cadastrarTime(objNovoTime);
        limparCamposFormularioTime();
    }

    const limparCamposFormularioUsuario = () => {
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const limparCamposFormularioTime = () => {
        setNomeTime('');
        setCorPrimaria('');
        setCorSecundaria('');
    }

    const [ nomeValue, setNome ] = useState('');
    const [ cargoValue, setCargo ] = useState('');
    const [ imagemValue, setImagem ] = useState('');
    const [ timeValue, setTime ] = useState('');

    const [ nomeTimeValue, setNomeTime ] = useState('');
    const [ corPrimariaValue, setCorPrimaria ] = useState('');
    const [ corSecundariaValue, setCorSecundaria ] = useState('');


    return (
        <section className='custom-form'>
            <form onSubmit={cadastrarNovoUsuario}>        
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextInput 
                    obrigatorio
                    value={nomeValue} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    changeInput={value => setNome(value)}
                />
                <TextInput 
                    obrigatorio
                    value={cargoValue} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    changeInput={value => setCargo(value)}
                />
                <TextInput 
                    obrigatorio 
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
            <form onSubmit={cadastrarNovoTime} style={{marginLeft: '10rem'}}>
                <TextInput 
                    obrigatorio 
                    value={nomeTimeValue} 
                    label="Nome do Time" 
                    placeholder="Digite o nome do novo time" 
                    changeInput={value => setNomeTime(value)}
                />
                <TextInput 
                    obrigatorio 
                    value={corPrimariaValue} 
                    label="Nome do Time" 
                    placeholder="Digite o codigo da cor primaria" 
                    changeInput={value => setCorPrimaria(value)}
                />
                <TextInput 
                    obrigatorio 
                    value={corSecundariaValue} 
                    label="Nome do Time" 
                    placeholder="Digite o codigo da cor secundaria" 
                    changeInput={value => setCorSecundaria(value)}
                />
                <CustomButton> Criar Time </CustomButton>

            </form>
        </section>
    )
}

export default CustomForm