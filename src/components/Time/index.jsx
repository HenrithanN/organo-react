import './Time.css';
import CustomCard from '../CustomCard'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const listaUsuarios = props.usuarios
    const mostrarConteudo = listaUsuarios.length > 0;
    return (
        mostrarConteudo
        ?
            <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className="customForm">
                { listaUsuarios.map(usuario => 
                    <CustomCard
                        nome={usuario.nomeValue} 
                        cargo={usuario.cargoValue} 
                        imagem={usuario.imagemValue} 
                        time={usuario.timeValue} 
                />)}
                </div>
            </section>
        :
        ''
    )
}

export default Time;