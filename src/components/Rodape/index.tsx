
import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="/imgs/facebook.png" style={{maxWidth:50}} alt="" />
                </a>
            </li>
            <li>
                <a href="github.com" target="_blank">
                    <img src="/imgs/github.png" style={{maxWidth:50}} alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="/imgs/instagram.png" style={{maxWidth:50}} alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imgs/logo.png" alt="" />
       </section>
    </footer>)
}

export default Rodape