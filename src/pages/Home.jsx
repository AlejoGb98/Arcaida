import React from 'react'
import { Link } from 'react-router-dom'

import Plans from '../components/page-components/Plans'
import TicketPoints from '../components/TicketPoints'
import BlackButton from '../components/BlackButton'

const Home = () => {
  return (
    <>
        <div className='contentGlass container font-unbounded text-center mx-auto py-20 mb-24 px-12'>
                
                <h1 className="text-6xl mb-24">Descubri el Estilo Sostenible</h1>

                <div className='px-72'>

                    <p className="text-2xl font-light mb-12">Compra, alquila y ahorra con nuestra colección de ropa de segunda mano de alta calidad.</p>

                    <p className="text-xl font-light mb-24">¿Que estas esperando?</p>

                </div>

                <div className="flex justify-around w-full text-lg">
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
