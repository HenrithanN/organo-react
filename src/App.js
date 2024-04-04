import { useState } from "react";
import Banner from "./components/Banner";
import CustomForm from "./components/CustomForm";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [arrayTimes, setTimes] = useState([
    { key: uuidv4(), nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { key: uuidv4(), nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { key: uuidv4(), nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { key: uuidv4(), nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { key: uuidv4(), nome: 'UX e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5' },
    { key: uuidv4(), nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9' },
    { key: uuidv4(), nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ]);
  const [ usuariosValue, setUsuarios ] = useState([]);

  const mudarCorTime = (cor, nome) => {
    setTimes(arrayTimes.map(time => {
      if(time.nome.toUpperCase().trim() === nome.toUpperCase().trim()){
        time.corPrimaria = cor;
      }
      return time;
    }))
  }

  const cadastrarUsuario = (usuario) => {
    setUsuarios([...usuariosValue, usuario]);
  }

  const deletarUsuario = (usuario) => {
    console.log('deletarUsuariodeletarUsuariodeletarUsuario', usuario)
  }

  return (
    <div>
      <Banner />
      <CustomForm arrayTimes={arrayTimes} cadastrarUsuario={usuario => cadastrarUsuario(usuario)} />
      { arrayTimes.map(time => 
        <Time 
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          key={time.key}
          usuarios={usuariosValue.filter(usuario => usuario.timeValue === time.key)}
          deletarUsuario={deletarUsuario}
          mudaCorTime={mudarCorTime}
          >
        </Time>) 
      }
      <Rodape />
    </div>
  );
}

export default App;
