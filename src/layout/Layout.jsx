import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"



const Layout = () => {

  return (
    <>
        <Header/>

            <div className="bg-center w-full min-h-screen mt-36">

                    <Outlet/>

            </div>

        <Footer/>
    </>


  )
}

export default Layout
