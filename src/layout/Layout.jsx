import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

import { useLocation } from "react-router-dom"

const Layout = () => {

  const path = useLocation();

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
            <Header
              path={path.pathname}
            />

                <div className="bg-center w-full md:px-0 mt-28 lg:mt-36">

                        <Outlet/>

                </div>

            <Footer/>
      </div>
    </>


  )
}

export default Layout
