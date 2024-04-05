import './Time.css';
import CustomCard from '../CustomCard'

const Time = ({corPrimaria, corSecundaria, usuarios, nome, deletarUsuario, mudaCorTime, idTime}) => {

    const css = { backgroundColor: corSecundaria, backgroundImage: 'url(/imgs/fundo.png)'  }
    const listaUsuarios = usuarios
    const mostrarConteudo = listaUsuarios.length > 0;

    const mudaCor = (event) => {
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
                />)}
                </div>
            </section>
        :
        ''
    )
}

export default Time;