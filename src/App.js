import TextInput from "./components/TextInput";

function App() {
  return (
    <div>
      <form>        
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextInput label="Nome" placeholder="Digite seu nome" />
        <TextInput label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </div>
  );
}

export default App;
