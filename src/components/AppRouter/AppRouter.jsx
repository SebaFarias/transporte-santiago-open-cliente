import React, { useContext } from 'react'
import PerfilBar from '../PerfilBar/PerfilBar'
import Login from '../Login/Login'
import Chofer from '../Chofer/Chofer'
import Admin from '../Admin/Admin'
import Footer from '../Footer/Footer'
import { AuthContext } from '../Context/AuthContext'

const AppRouter = () => {

  const auth = useContext(AuthContext)
  
  return(
    <>
      <PerfilBar/>
      {auth.authState === false &&
        <Login/>
      }
      {auth.authState === 'chofer' &&
        <Chofer/>
      } 
      {auth.authState === 'admin' &&
        <Admin/>
      }
      <Footer />
    </>
  )
}

export default AppRouter