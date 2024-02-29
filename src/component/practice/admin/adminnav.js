import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Wrapper= styled.section`
#nav{
    
    background-color: #17B169;
    position:fixed;
    width:1400px;
    height:80px;
    display:flex;
    
}
#nav> #div1{
    display:flex;
    
    
}
.nav-obj{
  
    margin-left:230px;
    padding:5px;
    display:flex;
    color:white;
    font-size:22px;
    
    float:right
}
.nav-obj>h3{
    font-weight:600;
}
.nav-obj>h3,#log,#a{
    text-decoration:none;
    margin-left:30px;
}
.nav-obj>#log,#a{
    font-size:21px;
    text-decoration:underline solid white;
    
}
.nav-obj>span{
    margin-left:4px;
}
.nav-obj>#log{
    margin-left:10px;
}
#div2>h2{

color:yellow;
font-weight:500;
width:500px;
height:80px;
font-size:33px;
padding:0px;
margin-left:10px;
}

@media screen and (max-width:902px){
#nav{
    background-color: #17B169;
    position:fixed;
    width:900px;
    height:80px;
    
}
#nav> #div1{
    display:grid;
    
    
}
.nav-obj{
  
    margin-left:0px;
    
   
    
    
    display:flex;
    position:relative;
    bottom:10px;
    right:0px;

    color:white;
    font-size:17px;
    height:20px;
    
    
}
.nav-obj>h3{
    font-weight:500;
    margin-right:1px;
    padding-right:2px;
}
.nav-obj>h3,#log,#a{
    margin-left:1px;
   
    color:white;
    text-decoration:none;
    list-style:none;
}
.nav-obj>#log,#a{
   
    font-size:17px;
    list-style:none;
    color:white;
    
    text-decoration:underline solid white;
    
}
.nav-obj>span{
    margin-left:1px;
}
.nav-obj>#log{
    margin-left:1px;
}
#div2>h2{

color:yellow;
font-weight:500;
width:300px;
height:40px;
font-size:23px;
padding:10px;
margin-left:50px;
text-align:center;
}

}






`;
export default function Adminnav() {
   
  return (
    <Wrapper>
        <nav id="nav" className='navbar d-flex'>
       <div id="div1" className='d-flex'>
       <div id="div2">
            <h2>
                Cookbook Administration
            </h2>
        </div>
        <div className='nav-obj d-flex'>
            <h3>WELCOME, ADMIN.</h3>
            <a id="a" style={{"color":"white","marginTop":"25px"}}  href="/admin/change-password">Change Password </a>
            <span style={{"color":"white","marginTop":"25px"}}>/</span>
            <a style={{"color":"white","marginTop":"25px"}} id="log">LOG OUT</a>
        </div>
       </div>
    </nav>
    </Wrapper>
  )
}
