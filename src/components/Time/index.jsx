import './Time.css';
import CustomCard from '../CustomCard'

const Time = (props) => {
    console.log('propsprops', props)
    const css = { backgroundColor: props.corSecundaria }
    
    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <CustomCard />
        </section>
    )
}

export default Time;