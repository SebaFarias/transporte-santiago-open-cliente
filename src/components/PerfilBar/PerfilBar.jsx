import React from 'react'
import { 
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core'

const PerfilBar = () => {
  return(
    <AppBar position='sticky'>
      <Toolbar>
      <Typography variant='h3'>
          Freddy T.
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default PerfilBar