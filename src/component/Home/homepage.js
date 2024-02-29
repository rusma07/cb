import React from 'react'
import Navhome from './navhome'
import Home from '../git/CookBook/home'
import Service from '../git/CookBook/service'
import Walpaper from './wallpaper'
import Footer from '../git/CookBook/footer'

export default function Homepage() {
  return (
    <>
        <Walpaper/>
        <br/>
       <div style={{marginTop:"946px"}}>
       <Home/>
       </div>
        <Service/>
        <Footer/>
    </>
  )
}
