import './CustomForm.css';
import TextInput from '../TextInput';

const CustomForm = (props) => {
    return (
        <form>        
            <h2>Preencha os dados para criar o card do colaborador</h2>

            <TextInput label="Nome" placeholder="Digite seu nome" />
            <TextInput label="Cargo" placeholder="Digite seu cargo" />
            <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
        </form>
    )
}

export default CustomForm