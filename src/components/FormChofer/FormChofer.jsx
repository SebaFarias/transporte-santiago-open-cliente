import React, { useContext, useState } from 'react'
import { 
  TextField,
}  from '@material-ui/core'
import { useForm } from 'react-hook-form'

const FormChofer = () => {

  const { handleSubmit, register, errors } = useForm()
  const [ submitting, setSubmitting ] = useState(false)
  const onSubmit = data => console.log( JSON.stringify(data))


  return(
    <form onSubmit={ handleSubmit(onSubmit) }>
      <TextField
        id='filled-secondary'
        label='Nombre ( Ej: Freddy T. )'
        variant='filled'
        color='secondary'
        name='nombre'
        inmputRef={register}
      />
      <button type='submit'></button>
      
    </form>  
  )
}

export default FormChofer