import { useState } from "react";
import Banner from "./components/Banner";
import CustomForm from "./components/CustomForm";
import Time from "./components/Time";

function App() {

  const arrayTimes = [
    { key: 'A', nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { key: 'B', nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { key: 'C', nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { key: 'D', nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { key: 'E', nome: 'UX e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5' },
    { key: 'F', nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9' },
    { key: 'G', nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ];
  const [ usuariosValue, setUsuarios ] = useState([]);

  const cadastrarUsuario = (usuario) => {
    setUsuarios([...usuariosValue, usuario]);
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
          >
        </Time>) 
      }
    </div>
  );
}

export default App;
