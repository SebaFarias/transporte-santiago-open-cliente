import React, { useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = props => {

  const [ auth, setAuth ] = useState()

  return(
    <AuthContext.Provider value={ auth }>
      {props.children}
    </AuthContext.Provider>
  )
}