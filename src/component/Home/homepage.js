import React from 'react'
import Navhome from './navhome'

import Service from '../git/CookBook/service'
import Walpaper from './wallpaper'
import Home from '../git/CookBook/home'


export default function Homepage() {
  return (
    <>
        <Walpaper/>
        <br/>
       <div style={{marginTop:"946px"}}>
       <Home/>
       </div>
        <Service/>
     
    </>
  )
}
