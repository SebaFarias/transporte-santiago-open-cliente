import React, { useContext } from 'react' 
import { Grid } from '@material-ui/core'
import Lugar from '../Lugar/Lugar'
import { AuthContext } from '../Context/AuthContext'

const UbicacionActual = () => {

  const estoVaAVenirDelContext = {
    ubicaciones:[
      'hotel',
      'ruta',
      'club',
    ] 
  }

  return (
    <Grid container>
      {estoVaAVenirDelContext.ubicaciones.map( ubicacion => {
        return(
          <Grid item xs={12/estoVaAVenirDelContext.ubicaciones.length}>
            <Lugar
              variant='transparent'
              nombre={ubicacion}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default UbicacionActual