import './CustomCard.css';

const CustomCard = ({usuario, corFundo, deleteCard}) => {
    const { cargoValue, imagemValue, nomeValue } = usuario;
    const ulImagem = imagemValue.includes('http') ? imagemValue : `https://github.com/${imagemValue}.png`;

    return (
            <div className='customCard'>
                    <button className='buttonClose' onClick={() => deleteCard(usuario)}>x</button>
                <div className='cabecalho' style={{backgroundColor: corFundo}}>
                    <img src={ ulImagem } alt='foto de perfil'/>
                </div>
                <div className='rodape'>
                    <h4>{ nomeValue }</h4>
                    <h5>{ cargoValue }</h5>
                </div>
            </div>
    )
}

export default CustomCard;