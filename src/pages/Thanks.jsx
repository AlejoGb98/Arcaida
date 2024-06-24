import React from 'react'
import BlackButton from '../components/BlackButton'

const Thanks = () => {
  return (
    <section className='contentGlass container w-11/12 lg:w-10/12 flex flex-col items-center font-unbounded text-center py-12 lg:py-20  md:mb-24 px-6 lg:px-12'>
       <h1 className='mb-4 md:mb-8'>¡ Tu suscripcion fue completada con exito !</h1>

        <p className='text-sm font-unbounded font-light md:text-base mb-4 md:mb-16'>
            Recibiras un mail con todos los pasos a seguir para completar tu membresia
        </p>

        <p className='text-sm font-light md:text-base mb-12 md:mb-6'>ID de la transaccion: </p>
        <BlackButton
            text={'Volver al Inicio'}
            link={'/'}
        />
    </section>
  )
}

export default Thanks
