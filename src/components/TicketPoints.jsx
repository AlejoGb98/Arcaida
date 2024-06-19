import React from 'react'
import BlackButton from './BlackButton'

import Ticket from '../assets/ticket.png'


const TicketPoints = () => {
  return (
    <div className='font-unbounded mb-4 lg:py-8 relative md:mb-20'>
        <img src={Ticket} alt="" className='w-screen h-20 lg:h-full' />
        <div className='flex items-center justify-around px-4 absolute inset-0'>
            <h3 className='text-xs lg:text-xl text-center'>Con cualquiera de tus planes accedes a nuestro sistema de puntos</h3>
            <BlackButton
                text='Quiero saber mas!'
                extraClass='text-xs'
                link='/como-funciona'/>
        </div>
    </div>
  )
}

export default TicketPoints
