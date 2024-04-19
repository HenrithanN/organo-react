import { IUsuario } from '../../shared/interfaces/IUsuario';
import './CustomCard.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface CustomCardProps {
    usuario: IUsuario, 
    corFundo: string, 
    deleteCard: (usuario: IUsuario) => void, 
    favoritarCard: (usuario: IUsuario) => void
}

const CustomCard = ({usuario, corFundo, deleteCard, favoritarCard}: CustomCardProps) => {
    const { cargo, imagem, nome, favorito } = usuario;
    const ulImagem = imagem.includes('http') ? imagem : `https://github.com/${imagem}.png`;

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
                    <h4>{ nome }</h4>
                    <h5>{ cargo }</h5>
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