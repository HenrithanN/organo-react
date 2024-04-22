import './Time.css';
import CustomCard from '../CustomCard'
import { IUsuario } from '../../shared/interfaces/IUsuario';


interface TimeProps {
    corPrimaria: string, 
    corSecundaria: string, 
    usuarios: IUsuario[], 
    nome: string, 
    deletarUsuario: (usuario: IUsuario)=> void, 
    favoritarCard: (usuario: IUsuario)=> void, 
    mudaCorTime: (corSelecionada: string, idTime: string)=> void, 
    idTime: string
}

const Time = ({corPrimaria, corSecundaria, usuarios, nome, deletarUsuario, favoritarCard, mudaCorTime, idTime}: TimeProps) => {

    const css = { backgroundColor: corSecundaria, backgroundImage: 'url(/imgs/fundo.png)'  }
    const listaUsuarios = usuarios
    const mostrarConteudo = listaUsuarios.length > 0;

    const mudaCor = (event: any) => {
        const corSelecionada = event.target.value;
        mudaCorTime(corSelecionada, idTime);
    }

    
    return (
        mostrarConteudo
        ?
            <section className='time' style={css}>

                <input type="color" className='inputColor' value={corPrimaria} onChange={mudaCor}/>
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className="customForm">
                { listaUsuarios.map((usuario, index) => 
                    <CustomCard
                        corFundo={corPrimaria}
                        usuario={usuario} 
                        key={index}
                        deleteCard={deletarUsuario}
                        favoritarCard={favoritarCard}
                />)}
                </div>
            </section>
        :
        <></>
    )
}

export default Time;