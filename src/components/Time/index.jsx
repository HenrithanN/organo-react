import './Time.css';
import CustomCard from '../CustomCard'

const Time = ({corPrimaria, corSecundaria, usuarios, nome, deletarUsuario}) => {

    const css = { backgroundColor: corSecundaria }
    const listaUsuarios = usuarios
    const mostrarConteudo = listaUsuarios.length > 0;

    return (
        mostrarConteudo
        ?
            <section className='time' style={css}>
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className="customForm">
                { listaUsuarios.map(usuario => 
                    <CustomCard
                        corFundo={corPrimaria}
                        nome={usuario.nomeValue} 
                        cargo={usuario.cargoValue} 
                        imagem={usuario.imagemValue} 
                        time={usuario.timeValue} 
                        key={usuario.nomeValue + listaUsuarios.length}
                        deleteCard={deletarUsuario}
                />)}
                </div>
            </section>
        :
        ''
    )
}

export default Time;