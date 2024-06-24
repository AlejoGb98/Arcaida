import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout/Layout";
import NotFound from "../components/NotFound";
import Suscribe from "../pages/Suscribe";
import HowItWorks from "../pages/HowItWorks";
import Benefits from "../pages/Benefits";
import Thanks from "../pages/Thanks";

import '../../src/index.css';
import FrequentQuestions from "../pages/FrequentQuestions";
import TermsAndConditions from "../pages/TermsAndConditions";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element:<Home/>
            },
            {
                path: '/como-funciona',
                element: <HowItWorks/>
            },
            {
                path: '/beneficios',
                element: <Benefits/>
            },
            {
                path: '/suscripcion',
                element: <Suscribe/>
            },
            {
                path: '/terminos-y-condiciones',
                element: <TermsAndConditions/>
            },
            {
                path: '/preguntas-frecuentes',
                element: <FrequentQuestions/>
            },
            {
                path:'/suscripcion-completada',
                element:<Thanks/>
            }
        ]

    }
])