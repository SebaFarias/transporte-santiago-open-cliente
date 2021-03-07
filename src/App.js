import './App.css';
import socket from '../src/components/socket'
import AppRouter from './components/AppRouter/AppRouter.jsx'
import { AuthContextProvider } from './components/Context/AuthContext';

function App() {
  
  socket.emit( 'conectado' , "Hola desde cliente")

  return (
  <AuthContextProvider>
    <AppRouter/>
  </AuthContextProvider>
  );
}

export default App;
