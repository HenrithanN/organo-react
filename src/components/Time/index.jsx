import './Time.css';
import CustomCard from '../CustomCard'

const Time = ({corPrimaria, corSecundaria, usuarios, nome, deletarUsuario, mudaCorTime, id}) => {

    const css = { backgroundColor: corSecundaria, backgroundImage: 'url(/imgs/fundo.png)'  }
    const listaUsuarios = usuarios
    const mostrarConteudo = listaUsuarios.length > 0;

    const mudaCor = (event) => {
        const corSelecionada = event.target.value;
        mudaCorTime(corSelecionada, id);
    }
    
    return (
        mostrarConteudo
        ?
            <section className='time' style={css}>

                <input type="color" className='inputColor' value={corPrimaria} onChange={mudaCor}/>
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className="customForm">
                { listaUsuarios.map(usuario => 
                    <CustomCard
                        corFundo={corPrimaria}
                        nome={usuario.nomeValue} 
                        cargo={usuario.cargoValue} 
                        imagem={usuario.imagemValue} 
                        time={usuario.timeValue} 
                        key={id}
                        deleteCard={deletarUsuario}
                />)}
                </div>
            </section>
        :
        ''
    )
}

export default Time;