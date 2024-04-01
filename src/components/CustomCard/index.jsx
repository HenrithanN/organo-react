import './CustomCard.css';

const CustomCard = (props) => {
    return (
        <div className='customCard'>
            <div className='cabecalho'>
                <img src='https://github.com/henrithanN.png' alt='foto de perfil'/>
            </div>
            <div className='rodape'>
                <h4>Jonathan Lima</h4>
                <h5>FrontEnd</h5>
            </div>
        </div>
    )
}

export default CustomCard;