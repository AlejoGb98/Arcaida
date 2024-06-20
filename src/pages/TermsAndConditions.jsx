import terms from '../tyc'

import Card from '../components/page-components/TyC'


const TermsAndConditions = () => {
  

  return (
    <section>
      <div className='contentGlass container w-10/12 flex flex-col items-center font-poppins text-center py-8 lg:py-20 mb-16 md:mb-24 px-6 lg:px-12'>
        <h1 className='text-xl lg:text-4xl mb-2 lg:mb-8 font-medium'>Terminos y condiciones</h1>
        <p className='text-xs lg:text-lg'>Por favor, lee detenidamente los siguientes términos y condiciones antes de suscribirte a nuestro plan de membresía en Arcaida.</p>
      

        <div className='grid lg:grid-cols-2 justify-around mt-6 lg:mt-12 gap-4 lg:gap-12 mx-2 lg:mx-12'>
          {
            terms && terms.map((term) => (
              <Card
                key={term.id}
                term={term}
              />
            ))
          }
        </div>
        
        <div className='mt-4 lg:mt-12'>
          <p className='lg:text-xl'>¡Esperamos que disfrutes de los beneficios de tu suscripción! </p>
          <p className='lg:text-2xl mt-2 lg:mt-6 font-medium'>Gracias por confiar en Arcaida</p>

        </div>
      </div>

    </section>
  )
}

export default TermsAndConditions
