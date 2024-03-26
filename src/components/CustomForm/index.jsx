import './CustomForm.css';
import TextInput from '../TextInput';
import CustomSelect from '../CustomSelect';

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

    return (
        <section className='custom-form'>
            <form>        
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextInput label="Nome" placeholder="Digite seu nome" />
                <TextInput label="Cargo" placeholder="Digite seu cargo" />
                <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
                <CustomSelect label="Times" options={arrayTimes} />
            </form>
        </section>
    )
}

export default CustomForm