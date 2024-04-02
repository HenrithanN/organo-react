import './CustomCard.css';

const CustomCard = ({imagem, corFundo, nome, cargo}) => {
    const ulImagem = imagem.includes('http') ? imagem : `https://github.com/${imagem}.png`;
    return (
            <div className='customCard'>
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