import React from 'react'

const HowItWorks = () => {
  return (
    <div className='glass container mx-auto text-center font-unbounded py-12 mb-24 px-12'>
      
      <div className='mb-24'>
        <h1 className='text-5xl mb-8'>Nuestro sistema de ArcPoints</h1>  
        <p className='text-2xl font-light max-w-screen-lg mx-auto '>En Arcaida, valoramos la lealtad y el apoyo de nuestros clientes. Por eso, estamos emocionados de presentar nuestro programa de puntos, diseñado especialmente para recompensarte cada vez que realizas una compra con nosotros. </p>
      </div>

      <div className='grid grid-cols-2 gap-10 justify-center'>
        <div className='planCardGlass px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-4 text-xl'>Como funciona?</h4>
          <p className='font-light text-lg tracking-wide'>Por cada compra que realices en nuestra web, acumularás puntos de fidelidad que podrás canjear por prendas específicas y descuentos en tus futuras compras. ¡Es una forma sencilla de ganar mientras compras! </p>
        </div>

        <div className='planCardGlass px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-4 text-xl'>Acumulacion de ArcPoints</h4>
          <p className='font-light text-lg tracking-wide'>Por cada $100 que gastes en nuestra web, recibirás 1 ArcPoint.
            Cuanto más compres, más puntos acumularás. ¡No hay límite en la cantidad de puntos que puedes ganar! 
          </p>
        </div>

        <div className='planCardGlass px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-4 text-xl'>Beneficios de los Puntos</h4>
          <p className='font-light text-lg tracking-wide'>Una vez que hayas acumulado suficientes puntos, podrás canjearlos por beneficios, como productos gratuitos o promociones especiales.</p>
        </div>

        <div className='planCardGlass px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-4 text-xl'>Productos Gratuitos</h4>
          <p className='font-light text-lg tracking-wide'> Obtén productos seleccionados de nuestro catálogo de forma gratuita canjeando tus puntos acumulados. </p>
        </div>

      </div>
    
    </div>
  )
}

export default HowItWorks
