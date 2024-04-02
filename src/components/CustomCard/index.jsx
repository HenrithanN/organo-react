import './CustomCard.css';

const CustomCard = (props) => {
    const ulImagem = props.imagem.includes('http') ? props.imagem : `https://github.com/${props.imagem}.png`;
    return (
            <div className='customCard'>
                <div className='cabecalho' style={{backgroundColor: props.corFundo}}>
                    <img src={ ulImagem } alt='foto de perfil'/>
                </div>
                <div className='rodape'>
                    <h4>{ props.nome }</h4>
                    <h5>{ props.cargo }</h5>
                </div>
            </div>
    )
}

export default CustomCard;