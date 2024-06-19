import React from 'react'

const HowItWorks = () => {


  return (
    <div className='contentGlass container w-10/12 flex flex-col items-center font-unbounded text-center py-8 lg:py-20 mb-8 lg:mb-16 md:mb-24 px-6 lg:px-12'>
      <div className='mb-2 lg:mb-24'>
        <h1 className='text-lg lg:text-5xl mb-2 lg:mb-24'>Nuestro sistema de ArcPoints</h1>  
        <p className='text-sm lg:text-2xl lg:px-36 font-light mb-4 lg:mb-12'>En Arcaida, valoramos la lealtad y el apoyo de nuestros clientes. Por eso, estamos emocionados de presentar nuestro programa de puntos, diseñado especialmente para recompensarte cada vez que realizas una compra con nosotros. </p>
      </div>

      <div className='grid grid-cols lg:grid-cols-2 gap-4 lg:gap-10 justify-center'>
        <div className='planCardGlass px-6 lg:px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-2 lg:mb-4 lg:text-xl'>Como funciona?</h4>
          <p className='font-light text-sm lg:text-lg tracking-wide'>Por cada compra que realices en nuestra web, acumularás puntos de fidelidad que podrás canjear por prendas específicas y descuentos en tus futuras compras. ¡Es una forma sencilla de ganar mientras compras! </p>
        </div>

        <div className='planCardGlass px-6 lg:px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-2 lg:mb-4 lg:text-xl'>Acumulacion de ArcPoints</h4>
          <p className='font-light text-sm lg:text-lg tracking-wide'>Por cada $100 que gastes en nuestra web, recibirás 1 ArcPoint.
            Cuanto más compres, más puntos acumularás. ¡No hay límite en la cantidad de puntos que puedes ganar! 
          </p>
        </div>

        <div className='planCardGlass px-6 lg:px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-2 lg:mb-4 lg:text-xl'>Beneficios de los Puntos</h4>
          <p className='font-light text-sm lg:text-lg tracking-wide'>Una vez que hayas acumulado suficientes puntos, podrás canjearlos por beneficios, como productos gratuitos o promociones especiales.</p>
        </div>

        <div className='planCardGlass px-6 lg:px-12 py-4 mx-auto min-h-64 max-w-lg'>
          <h4 className='mb-2 lg:mb-4 lg:text-xl'>Productos Gratuitos</h4>
          <p className='font-light text-sm lg:text-lg tracking-wide'> Obtene productos seleccionados de nuestro catálogo de forma gratuita canjeando tus puntos acumulados. </p>
        </div>

      </div>
    
    </div>
  )
}

export default HowItWorks
