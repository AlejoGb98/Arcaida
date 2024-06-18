import React from 'react'
import { Link } from 'react-router-dom'

import Plans from '../components/page-components/Plans'
import TicketPoints from '../components/TicketPoints'
import BlackButton from '../components/BlackButton'

const Home = () => {
  return (
    <>
        <div className='contentGlass container w-10/12 flex flex-col items-center font-unbounded text-center py-20 mb-16 md:mb-24 px-6 lg:px-12'>
                
                <h1 className="text-lg lg:text-5xl mb-8 lg:mb-24">Descubri el Estilo Sostenible</h1>

                <div className='px-8 lg:px-72'>

                    <p className="lg:text-2xl font-light mb-4 lg:mb-12">Compra, alquila y ahorra con nuestra colección de ropa de segunda mano de alta calidad.</p>

                    <p className="text-lg lg:text-xl font-light mb-6 lg:mb-24">¿Que estas esperando?</p>

                </div>

                <div className="flex gap-4 md:gap-8 lg:gap-36">
                        <BlackButton
                            text='Suscribirme'
                            link='/suscripcion'
                        />

                        <BlackButton
                            text='Comprar'
                            link='https://arcaidasecondhand.com/'
                        />
                </div>

        </div>

        <Plans/>

        <TicketPoints/>
    </>

  )
}

export default Home
