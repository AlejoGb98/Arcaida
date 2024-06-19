import React from 'react'

import Instagram from '../assets/instagram.png'
import Whastapp from '../assets/whatsapp.png'
import Location from '../assets/location.png'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import useWindowWidth from '../hooks/ReadScreenWidth'

const Footer = () => {

 const width = useWindowWidth();
  console.log(width)

  return (
    <footer className='font-unbounded glass py-3 lg:py-6 mb-6 mx-auto w-11/12 font-light text-xs lg:text-base'>
      <img src={Logo} className='w-24 lg:w-36 mx-auto mb-3 lg:mb-6'/>

      <div className='grid grid-cols-3 gap-2'>
        <div className='text-center flex flex-col gap-2 lg:gap-4 items-start mx-auto md:mb-8'>
          <a target='_blank' href='https://www.instagram.com/arcaida.secondhand/?hl=es'>
            <div className='flexCenter gap-2'>
              <img src={Instagram}/>
              {width > 768 && <p>arcaida.secondhand</p>}
            </div>
          </a>

          <a target='_blank' href=''>
            <div className='flexCenter gap-2'>
              <img src={Whastapp}/>
              {width > 768 && <p className=''>+598 987 654 321</p>}
            </div>
          </a>

          <a target='_blank' href='https://www.google.com/maps/place/Av.+18+de+Julio+1528,+11200+Montevideo,+Departamento+de+Montevideo/@-34.904816,-56.1829811,21z/data=!4m6!3m5!1s0x959f81caebf75397:0xe9e45af97fa4ffcf!8m2!3d-34.9046173!4d-56.1829019!16s%2Fg%2F11gdypbjjp?entry=ttu'>
            <div className='flexCenter gap-2'>
                <img src={Location}/>
                {width > 768 && <p>Av. 18 de Julio 1528 / Apto. 402</p>} 
            </div>
          </a>
        </div>

        <div className='mx-auto mb-8 flex flex-col gap-2'>
          <Link to='/'>Inicio</Link>
          <Link to='/como-funciona'>Como funciona</Link>
          <Link to='/beneficios'>Beneficios</Link>
          <Link to='/suscripcion'>Suscribirme</Link>
        </div>

        <div className='mb-8 mx-auto w-fit flex flex-col gap-2'>
          <Link to='/terminos-y-condiciones'>Terminos y Condiciones</Link>
          <Link to='/preguntas-frecuentes'>Preguntas Frecuentes</Link>
        </div>
      </div>

      <p className='text-center text-slate-700 font-light'>Developed by A & A ®</p>
    </footer>
  )
}

export default Footer
