import React from 'react'
import Body from '../Components/Body'
import About from '../Components/About'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
   <>
   
   <Body/>
   <About/>
   <Portfolio isHome={true}/>
   <Services/>
   <Contact/>
   
   </>
  )
}

export default HomePage