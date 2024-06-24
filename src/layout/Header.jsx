import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import logo from '../assets/logo.png'
import ReadScreenWidth from '../hooks/ReadScreenWidth'


const Header = ({path}) => {

    const width = ReadScreenWidth();

    const pathname = () => {
        switch(path){
        case '/' : return 'Inicio';
        case '/como-funciona' : return 'Como Funciona';
        case '/beneficios' : return 'Beneficios';
        case '/suscripcion' : return 'Suscribirme';
        case '/terminos-y-condiciones' : return 'Terminos y Condiciones'
        case '/preguntas-frecuentes' : return 'Preguntas Frecuentes'
        }

    }
    

    
  return (
    <>
        <nav className='flex lg:justify-around justify-between items-center glass fixed top-6 left-0 right-0 mx-auto w-11/12 lg:p-4 z-50 px-8 py-2.5 font-unbounded'>
            <Link to='/'>
                <img src={logo} className="w-20 md:w-20 lg:w-36" alt="Arcaida Logo" />
            </Link>

            {width < 768 ? 
                <div className="dropdown font-light">
                    <button className="dropdown-toggle text-xs" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       {pathname()}
                    </button>

                    <ul className="dropdown-menu menuGlass font-light text-xs px-3 mt-3">
                    <li className='mt-1'><NavLink to='/' className=''> Inicio </NavLink></li>
                    <li className='mt-1'><NavLink to='/como-funciona' className=''> Como Funciona </NavLink></li>
                    <li className='mt-1'><NavLink to='/beneficios' className=''> Beneficios </NavLink></li>
                    <li className='mt-1'><NavLink to='/suscripcion' className=''> Suscribirme </NavLink></li>
                    </ul>
              </div>
            : 
            <>
                <div className='flex gap-4 lg:gap-12 text-xs lg:text-lg'>

                    <NavLink to='/' className=''> Inicio </NavLink>
                    <NavLink to='/como-funciona' className=''> Como Funciona </NavLink>
                    <NavLink to='/' className=''> Beneficios </NavLink>

                </div>
                <Link to='/suscripcion-completada'>
                    <button className='font-light w-fit border-1 p-1 md:p-2 rounded-xl border-stone-700'>
                        Suscribirme
                    </button>
                </Link>
            </>
                }


        </nav>

        <div className='scroll-line'></div>
    </>
  )
}

export default Header
