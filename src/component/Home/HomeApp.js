import React from 'react'
import Nav from './nav'
import Navhome from './navhome'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Walpaper from './wallpaper'
import Homepage from "../Home/homepage"
import Login from '../Login/login'
import Register from '../register/register'
import Receipe from './receipe'
import Receipepost from './receipepost'
import { useProductContext } from '../context/usecontext'
import Forgetpassword from './forgetpassword'
import Aboutus from '../aboutus/aboutus'
import Category from './category'
import AdminAddReceipe from '../practice/admin/adminreceipe'




export default function Homeapp() {

  return (
    <div>
    <BrowserRouter>
    <Nav/>
        <Routes>
           
             <Route path='/' exact element={<  Homepage/>} />
             <Route path='/about' exact element={< Aboutus/>}/>
            <Route path='/courses' exact element={<Receipe />} />
            <Route path='/courses/:id/:slug' exact element={<Receipepost />} />
            <Route path='/courses/category=/:slug' exact element={<Category />} />
            <Route path='/addproduct' exact element={<AdminAddReceipe />} />
         
            <Route path='/forgetpassword' exact element={<Forgetpassword />} />
            <Route path='/login' exact element={<Login />} />
            
            <Route path='/register' exact element={<Register  />} />
       
            {/* <Route>
            <Route exact path='/admin' element={<Adminlogin/>}/>
            <Route exact path='/admincreateog' element={<Admincreate/>}/>
            <Route exact path='/admin/home' element={<Adminsite/>}/>
            <Route exact path='/forgetpassword' element={<Forgetpassword/>}/>
            <Route exact path='/admin/home/user' element={<Adminuserpa/>}/>

            <Route exact path='/admin/register' element={<Adminregister/>}/>
            <Route exact path='/admin/home/product' element={<Adminpa1/>}/>
            <Route exact path='/admin/home/product/add' element={<AdminAddReceipe/>}/>
            <Route exact path='/admin/home/product/update/:id' element={<AdminUpdateReceipe/>}/>
            <Route exact path='/admin/home/user/update/:id' element={<AdminUpdateUser/>}/>
            </Route> */}
           
        </Routes>
        
        
    </BrowserRouter>

      
    </div>
  )
}