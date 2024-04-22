import { useState } from "react";
import Banner from "./components/Banner";
import CustomForm from "./components/CustomForm";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import { v4 as uuidv4 } from 'uuid';
import { ITime } from "./shared/interfaces/ITimes";
import { IUsuario } from "./shared/interfaces/IUsuario";

function App() {

  const [arrayTimes, setTimes] = useState<ITime[]>([
    { idTime: uuidv4(), nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { idTime: uuidv4(), nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { idTime: uuidv4(), nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { idTime: uuidv4(), nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { idTime: uuidv4(), nome: 'UX e Design', corPrimaria: '#D86EBF', corSecundaria: '#FAE5F5' },
    { idTime: uuidv4(), nome: 'Mobile', corPrimaria: '#FEBA05', corSecundaria: '#FFF5D9' },
    { idTime: uuidv4(), nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ]);

  const [ usuariosValue, setUsuarios ] = useState<IUsuario[]>([
      { idUsuario: uuidv4(), favorito:false, nome: 'JONATHAN HENRIQUE RIBEIRO LIMA', cargo: 'Analista', imagem: 'henrithanN', idTime: arrayTimes[0].idTime},
      { idUsuario: uuidv4(), favorito:false, nome: 'JONATHAN HENRIQUE RIBEIRO LIMA', cargo: 'Analista', imagem: 'henrithanN', idTime: arrayTimes[1].idTime},
      { idUsuario: uuidv4(), favorito:false, nome: 'JONATHAN HENRIQUE RIBEIRO LIMA', cargo: 'Analista', imagem: 'henrithanN', idTime: arrayTimes[2].idTime},
      { idUsuario: uuidv4(), favorito:false, nome: 'JONATHAN HENRIQUE RIBEIRO LIMA', cargo: 'Analista', imagem: 'henrithanN', idTime: arrayTimes[3].idTime},
      { idUsuario: uuidv4(), favorito:false, nome: 'JONATHAN HENRIQUE RIBEIRO LIMA', cargo: 'Analista', imagem: 'henrithanN', idTime: arrayTimes[4].idTime},
      { idUsuario: uuidv4(), favorito:false, nome: 'JONATHAN HENRIQUE RIBEIRO LIMA', cargo: 'Analista', imagem: 'henrithanN', idTime: arrayTimes[5].idTime},
      { idUsuario: uuidv4(), favorito:false, nome: 'JONATHAN HENRIQUE RIBEIRO LIMA', cargo: 'Analista', imagem: 'henrithanN', idTime: arrayTimes[6].idTime},
  ]);


  const mudarCorTime = (cor: string, idTime: string) => {
    setTimes(arrayTimes.map(time => {
      if(time.idTime === idTime){
        time.corPrimaria = cor;
      }
      return time;
    }))
  }

  const cadastrarTime = (time: ITime) => {
    setTimes([...arrayTimes, time]);
  }
  
  const cadastrarUsuario = (usuario: IUsuario) => {
    setUsuarios([...usuariosValue, usuario]);
  }

  const deletarUsuario = (usuarioSelecionado: IUsuario) => {
    const usuariosFiltrados = usuariosValue.filter(usuario => usuario.idUsuario !== usuarioSelecionado.idUsuario);
    setUsuarios(usuariosFiltrados);
  }

  const favoritarCard = (usuarioSelecionado: IUsuario) => {
    const usuariosModificados = usuariosValue.map((usuario) => {
      if(usuario.idUsuario === usuarioSelecionado.idUsuario){
        usuario.favorito = !usuario.favorito;
      }
      return usuario;
    })
    
    setUsuarios(usuariosModificados);
  }

  const retornaUsuariosFiltradosPorTime = (time: ITime) =>{
    const listaUsuarios = usuariosValue.filter(usuario => usuario.idTime === time.idTime);
    return listaUsuarios;
  }
  
  return (
    <div>
      <Banner url="/imgs/banner.png" descricao="O banner principal da página."/>
      <CustomForm 
        arrayTimes={arrayTimes} 
        cadastrarUsuario={usuario => cadastrarUsuario(usuario)} 
        cadastrarTime={time => cadastrarTime(time)} 
      />
      { arrayTimes.map(time => 
        <Time 
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          key={time.idTime}
          idTime={time.idTime}
          usuarios={retornaUsuariosFiltradosPorTime(time)}
          deletarUsuario={deletarUsuario}
          mudaCorTime={mudarCorTime}
          favoritarCard={favoritarCard}
          />) 
      }
      <Rodape />
    </div>
  );
}

export default App;
