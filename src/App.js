import { useState } from "react";
import Banner from "./components/Banner";
import CustomForm from "./components/CustomForm";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [arrayTimes, setTimes] = useState([
    { id: uuidv4(), nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { id: uuidv4(), nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { id: uuidv4(), nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { id: uuidv4(), nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { id: uuidv4(), nome: 'UX e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5' },
    { id: uuidv4(), nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9' },
    { id: uuidv4(), nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ]);
  const [ usuariosValue, setUsuarios ] = useState([]);

  const mudarCorTime = (cor, id) => {
    setTimes(arrayTimes.map(time => {
      if(time.id === id){
        time.corPrimaria = cor;
      }
      return time;
    }))
  }

  const cadastrarUsuario = (usuario) => {
    setUsuarios([...usuariosValue, usuario]);
  }

  const deletarUsuario = (usuarioSelecionado) => {
    const usuariosFiltrados = usuariosValue.filter(usuario => usuario.idUsuario !== usuarioSelecionado.idUsuario);
    setUsuarios(usuariosFiltrados);
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
          key={time.id}
          id={time.id}
          usuarios={usuariosValue.filter(usuario => usuario.timeValue === time.id)}
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
