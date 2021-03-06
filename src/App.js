import './App.css';
import socket from '../src/components/socket'

function App() {
  
  socket.emit( 'conectado' , "Hola desde cliente")

  return (
  <>hola  </>
  );
}

export default App;
