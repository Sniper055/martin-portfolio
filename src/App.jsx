import React from 'react'
import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import AboutPage from './Pages/AboutPage'
import Portfolio from './Components/Portfolio'
import { PortfolioPage } from './Pages/PortfolioPage'
import ServicesPage from './Pages/ServicesPage'
import ContactPage from './Pages/ContactPage'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route   path='/' element={<MainLayout/>}>
                <Route index element= {<HomePage/>}/>
                <Route path='/about' element ={<AboutPage/>}/>
                <Route path = '/portfolio' element = {<PortfolioPage/>}/>
                <Route path='/services' element ={<ServicesPage/>}/>
                <Route path='/contact' element = {<ContactPage/>}/>
               

      </Route>
      
    )
  )
  return (
    <RouterProvider router = {router}/>
  )
}

export default App