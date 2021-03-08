import React, { useContext } from 'react' 
import { Typography } from '@material-ui/core'
import { AuthContext } from '../Context/AuthContext'

const Lugar = ({ variant, nombre }) => {
  return (
    <Typography variant='h2'>
      Lugar
    </Typography>
  )
}

export default Lugar
