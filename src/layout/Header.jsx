import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <>
        <nav className='flex justify-around items-center glass fixed top-6 left-0 right-0 mx-auto w-11/12 p-4 z-50 lg:px-6 py-2.5 font-unbounded'>
            <Link to='/'>
                <img src={logo} className="w-28" alt="Arcaida Logo" />
            </Link>

            <div className='flex gap-12 text-lg'>

                <NavLink to='/' className=''> Inicio </NavLink>
                <NavLink to='/como-funciona' className=''> Como Funciona </NavLink>
                <NavLink to='/beneficios' className=''> Beneficios </NavLink>

            </div>

            <Link to='/suscripcion'>
                <button className='font-light w-fit border p-2 rounded-xl border-stone-700'>
                    Suscribirme
                </button>
            </Link>

        </nav>

        <div className='scroll-line'></div>
    </>
  )
}

export default Header
