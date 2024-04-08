import './CustomCard.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CustomCard = ({usuario, corFundo, deleteCard, favoritarCard}) => {
    const { cargoValue, imagemValue, nomeValue, favorito } = usuario;
    const ulImagem = imagemValue.includes('http') ? imagemValue : `https://github.com/${imagemValue}.png`;

    const favoritar = () => {
        favoritarCard(usuario);
    }

    const propsButton = {
        size: 30,
        onClick: favoritar,
        className: 'favButton'
    }

    return (
            <div className='customCard'>
                    <button className='buttonClose' onClick={() => deleteCard(usuario)}>x</button>
                <div className='cabecalho' style={{backgroundColor: corFundo}}>
                    <img src={ ulImagem } alt='foto de perfil'/>
                </div>
                <div className='rodape'>
                    <h4>{ nomeValue }</h4>
                    <h5>{ cargoValue }</h5>
                    <div>
                        {
                            favorito
                            ? <AiFillHeart {...propsButton} color='#ff0000'/> 
                            : <AiOutlineHeart {...propsButton}/>
                        }
                    </div>
                </div>
            </div>
    )
}

export default CustomCard;