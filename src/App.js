import './App.css';
import SimpleForm from './componentes/chatbot/SimpleForm';
import Renderizar from '../src/componentes/servicios/Renderizar';
import Login from './componentes/chatbot/login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       WatchStore | ChatBot
       <Login/>
      </header>
      
      <SimpleForm/> 
      
    </div>
  );
}

export default App;
