import './CustomCard.css';

const CustomCard = ({imagem, corFundo, nome, cargo, deleteCard}) => {
    const ulImagem = imagem.includes('http') ? imagem : `https://github.com/${imagem}.png`;

    const deletarCard = (event) => {
        console.log('deleteCard', deleteCard)
        console.log('event', event)
    } 

    return (
            <div className='customCard'>
                    <button className='buttonClose' onClick={deletarCard}>x</button>
                <div className='cabecalho' style={{backgroundColor: corFundo}}>
                    <img src={ ulImagem } alt='foto de perfil'/>
                </div>
                <div className='rodape'>
                    <h4>{ nome }</h4>
                    <h5>{ cargo }</h5>
                </div>
            </div>
    )
}

export default CustomCard;