import './CustomForm.css';
import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelect';
import CustomButton from '../CustomButton';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITime } from '../../shared/interfaces/ITimes';
import { IUsuario } from '../../shared/interfaces/IUsuario';

interface CustomFormProps {
    cadastrarUsuario: (value: any) => void,  
    cadastrarTime: (time: ITime) => void, 
    arrayTimes: ITime[]
}
const CustomForm = ({cadastrarUsuario, cadastrarTime, arrayTimes}: CustomFormProps) => {

    const cadastrarNovoUsuario = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const idUsuario = uuidv4();
        const favorito = false;
        
        const objNovoUsuario: IUsuario = {
            nome: nomeValue,
            cargo: cargoValue,
            imagem: imagemValue,
            favorito: favorito,
            idTime: timeValue,
            idUsuario: idUsuario
        }
        cadastrarUsuario(objNovoUsuario);

        limparCamposFormularioUsuario();
    }

    const cadastrarNovoTime = (event: React.FormEvent<HTMLFormElement>) => {
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

                <CustomInput 
                    obrigatorio
                    value={nomeValue} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    changeInput={value => setNome(value)}
                />
                <CustomInput 
                    obrigatorio
                    value={cargoValue} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    changeInput={value => setCargo(value)}
                />
                <CustomInput 
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
            <form onSubmit={cadastrarNovoTime}>
            <h2>Preencha os dados para criar um novo time</h2>

                <CustomInput 
                    obrigatorio 
                    value={nomeTimeValue} 
                    label="Nome do Time" 
                    placeholder="Digite o nome do novo time" 
                    changeInput={value => setNomeTime(value)}
                />
                <CustomInput
                    value={corPrimariaValue}
                    type='color'
                    label="Selecione a Cor Primária do Time"
                    changeInput={value => setCorPrimaria(value)}
                />
                <CustomInput
                    value={corSecundariaValue}
                    type='color'
                    label="Selecione a Cor secundária do Time"
                    changeInput={value => setCorSecundaria(value)}
                />
                <CustomButton> Criar Time </CustomButton>

            </form>
        </section>
    )
}

export default CustomForm