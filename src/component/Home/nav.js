import React, { useEffect, useState } from 'react'
import { Router, Route, Routes, Navigate, useNavigate } from 'react-router'
import { NavLink, Link } from 'react-router-dom'
import styled from "styled-components"
import Switch from "react-switch";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useProductContext } from '../context/usecontext';
import { auth } from '../firebase/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const Navv = styled.nav`
.Nav-bar .menu{
    display:none;
    position:absolute;
    top:0.75rem;
    right:0.5rem;
    flex-direction: column;
    justify-content:space-between;
    width:2.25rem;
    height:2rem;
}
.Nav-bar .menu span{
    height:0.4rem;
    width:100%;
    background-color:black;
    border-radius:0.2rem;
}

@media (max-width:680px){

    .Nav-bar .menu {
        display:flex;
        
    }
    .Nav-bar{
        flex-direction:column;
        align-items:start;
    }
    .Nav-bar .Nav-element{
        display:none;
        flex-direction:column;
        width:100%;
        margin-bottom:0.24rem;
    }
    .Nav-bar .Nav-element ul li{
        width:100%;
        text-align:center;
    }
    .Nav-bar  ul .open{
        display:flex;
    }
    .Nav-bar .Nav-element ul li navbar-link{
        margin:0.2rem 0.5rem;
    }

}
@media (max-width:640px){
    .Nav-bar .menu {
        display:flex;
        
    }
    .Nav-bar{
        flex-direction:column;
        align-items:start;
    }
    .Nav-bar .Nav-element{
        display:none;
        flex-direction:column;
        width:100%;
        margin-bottom:0.24rem;
    }
    .Nav-bar .Nav-element ul li{
        width:100%;
        text-align:center;
    }
    .Nav-bar  ul .open{
        display:flex;
    }
    .Nav-bar .Nav-element ul li navbar-link{
        margin:0.2rem 0.5rem;
    }
}
@media (max-width:810px){
    .Nav-bar .menu {
        display:flex;
        
    }
    .Nav-bar{
        flex-direction:column;
        align-items:start;
    }
    .Nav-bar .Nav-element{
        display:none;
        flex-direction:column;
        width:100%;
        margin-bottom:0.24rem;
    }
    .Nav-bar .Nav-element ul li{
        width:100%;
        text-align:center;
    }
    .Nav-bar  ul .open{
        display:flex;
    }
    .Nav-bar .Nav-element ul li navbar-link{
        margin:0.2rem 0.5rem;
    }
}



`;
export default function Nav() {
    
    const { tex, settex, bgg, toggle, checked, handle_Change, cool, userAuth, setuserAuth } = useProductContext()
    const [menu, setmenu] = useState(false);
    const [firebaseuser, setfirebaseuser] = useState("")
    const navigate = useNavigate();
    const logout = async () => {

        signOut(auth).then(() => {
            setuserAuth(false)
            toast.success('Logout Successfull')
            navigate("/")
        }).catch(() => {
            toast.error('Logout Unsuccessfull')
            

        });

    }
   
   
    if(userAuth){
        onAuthStateChanged(auth,(currentUser)=>{
            setfirebaseuser(currentUser)
        })
        
        
        

    }
    
   
const a= userAuth===true?(firebaseuser.email?.split('@')[0]):""

    const items = [
        <Dropdown.Item key={1}><NavLink to='/forgetpassword' >Forgot Password</NavLink></Dropdown.Item>,

    ];
    return (
        <>
        <ToastContainer />
            <Navv >
                <div className={`Nav-bar  text-black bg-white`} style={{ backgroundColor: cool ? "white" : "black", color: "black", position: "sticky", top: "0", borderRadius: "30px", marginTop: "20px", height: "130px" }} >
                    <div className='navbar-lists' style={{ display: "flex" }}  >
                        <div className='logo' style={{ color: cool ? "black" : "white", display: "flex", marginTop: "5px", fontWeight: "bold", fontStyle: "italic", fontFamily: "sans-serif", fontSize: "80px", marginLeft: "30px", cursor: "pointer" }} >
                            <label style={{ letterSpacing: "2px" }}>COOKBOOK </label>
                            <span style={{ fontSize: "30px", marginLeft: "20px", marginTop: "-30px", marginLeft: "10px", height: "30px", width: "179px", fontFamily: "serif" }}>the best online recipes</span>

                        </div>
                        <div className='menu' onClick={() => { setmenu(!menu) }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className='Nav-element' style={{ fontSize: '30px', textDecoration: "none", color: "black", cursor: "pointer", marginLeft: "150px", marginTop: "0px" }}>
                            <ul className={menu ? "open" : "Nav-brands"} style={{marginTop:"20px", listStyleType: "none", display: "flex", textDecoration: "none" }} >
                                <div className='nav-item' style={{ border: "none", display: "flex", fontWeight: "bold", fontFamily: "serif" }}>
                                    <li style={{position:"absolute",right:"58%"}} className="nav-items "> <NavLink className="navbar-link" to="/"
                                        style={{ textDecoration: "none", fontSize:"45px" ,color: cool ? "black" : "white" }}  >Home</NavLink></li>
                                    <li  className='nav-items ' style={{ position:"absolute",right:"50%",marginLeft: '40px', textDecoration: "none" }}><NavLink className="navbar-link" style={{ textDecoration: "none",fontSize:"45px" , color: cool ? "black" : "white" }} to="/about"
                                    >About</NavLink></li>
                                    <li  className='nav-items ' style={{position:"absolute",right:"40%", marginLeft: '40px', textDecoration: "none" }}><NavLink className="navbar-link" to="/courses"
                                        style={{ border: "none", fontSize:"45px" ,textDecoration: "none", color: cool ? "black" : "white" }}  >Courses</NavLink></li>

                                    
                                    <li style={{position:"absolute",right:"12%",display:"flex"}} className='nav-items ' >

                                    <DarkModeSwitch
                                    style={{ marginBottom:'10px'}}
                                    checked={!checked}
                                    onChange={handle_Change}
                                    size={70}
                                  />
                                        <label style={{ marginLeft: "10px",fontSize:"45px" , color: cool ? "black" : "white", float: "right" }}>{toggle}</label>
                                    </li>
                                    {userAuth === true ?
                                        <li className='nav-items ' style={{color: cool ? "black" : "white",position:"absolute",right:"2%", marginRight: "20px", textDecoration: "none" }}>
                                            <Dropdown  noCaret size="lg"   appearance="subtle" title="User">
                                                <Dropdown.Item disabled><p>Hello  {a}!<br />

                                                </p></Dropdown.Item>


                                                <Dropdown title="Setting" placement="leftStart">
                                                    {items}
                                                </Dropdown>
                                                <Dropdown.Item onClick={logout} >
                                                        Logout
                                                </Dropdown.Item>



                                            </Dropdown>
                                        </li>
                                        :
                                        <li style={{ display: "flex" }}>
                                            <li className='nav-items ' style={{position:"absolute",right:"32%", marginLeft: '40px', textDecoration: "none" }}><NavLink className="navbar-link" to="/login"
                                                style={{ border: "none", textDecoration: "none",fontSize:"45px" , listStyle: "none", color: cool ? "black" : "white" }} >Login</NavLink></li>
                                            <li className='nav-items ' style={{position:"absolute",right:"22%", marginLeft: '40px', textDecoration: "none" }}><NavLink className="navbar-link" to="/register"
                                                style={{ border: "none",fontSize:"45px" , textDecoration: "none", color: cool ? "black" : "white" }}  >Register</NavLink></li>
                                        </li>
                                    }



                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
                
            </Navv>

        </>
    )
}
