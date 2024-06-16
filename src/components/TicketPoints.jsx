import React from 'react'
import BlackButton from './BlackButton'

import Ticket from '../assets/ticket.png'


const TicketPoints = () => {
  return (
    <div className='font-unbounded mb-36 py-8 relative'>
        <img src={Ticket} alt="" className='w-screen' />
        <div className='flex items-center justify-around absolute inset-0'>
            <h3 className='text-xl'>Con cualquiera de tus planes accedes a nuestro sistema de puntos</h3>
            <BlackButton
                text='Quiero saber mas!'
                extraClass='text-lg'
                link='/como-funciona'/>
        </div>
    </div>
  )
}

export default TicketPoints
