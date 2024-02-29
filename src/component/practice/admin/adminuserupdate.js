import React from 'react'

import { styled } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import Adminnav from './adminnav'
import { useState } from 'react'

import { useProductContext } from '../../context/usecontext'

const Wrapper = styled.section`
.main-page{
    position:fixed;
    margin-top:82px;
    margin-left:50px;
    border:0.25pt solid #e8e8e8;
    width:450px;
    height:489px;
}
#nav2{
    margin-top:52px;
    background-color:#50C878;
    color:white;
    text-decoration:none;
    list-style:none;
    width:100%;
    height:50px;
    position:fixed

}
#nav2>ul{
    display:flex;
    padding:1px;
   
    margin-left:40px;

}
#nav2>ul>li{
    font-size:25px;
    margin-left:14px;
    cursor:pointer;
    list-style: none;
}
#nav2>ul>li:hover{
    color:#faebd7;
    font-size:25px;
    margin-left:14px;
    cursor:pointer;
}









.div3{
    margin-top:80px;
}
.div3>#table-1{
    

    border:none;
    width:300px;
    height:50px;
    
}


.div3>#table-1>tr>th{
    background-color: #50C878;
    font-size:15px;
    
    color:white;
    height:55px;
    padding-right:80px;

    
    
}
.div3>#table-1>tr>td{
   
    font-size:17px;
    color: #17B169;
    height:55px;
    font-weight:bold;
    padding-left:20px;

    
    
}

.div3>#table-1>tr>td:hover{
    text-decoration:underline solid #17B169;
    font-size:17px;
    color: #17B169;
    height:55px;
    font-weight:bold;
    padding-left:20px;

    
    
}
.div3>#table-2{
    border:none;
    
    width:200px;
    height:100px;
    
}


.div3>#table-2>tr>th{
    background-color: #50C878;
    font-size:17px;
    
    color:white;
    height:55px;
    padding-right:220px;

    
    
}

.div3>#table-2>tr>td>button{
    cursor:pointer;
    background-color:#FF0800;
   color:white;
   width:50px;
   height:35px;
   border:none;
   border-radius:8px;
}
.div3>#table-2>tr>td{
background-color:#f0fff0;
padding-top:15px;
display:flex;
}
.div3>#table-1>tr>td{
background-color:#f0fff0;

display:flex;
padding-top:15px;
}

.div3>#table-2>tr>td>a{
   
   margin-right:313px;
}
.div3>#table-1>tr>td>button{
cursor:pointer;
   background-color:#FF0800;
  color:white;
  width:50px;
  height:35px;
  border:none;
  border-radius:8px;
}
.div3>#table-1>tr>td>button:hover{
text-decoration:none;
list-style:none;
   background-color:#F40009;
  color:white;
  width:50px;
  height:35px;
  border:none;
  border-radius:8px;
}
.div3>#table-2>tr>td>button:hover{
text-decoration:none;
list-style:none;
   background-color:#F40009;
  color:white;
  width:50px;
  height:35px;
  border:none;
  border-radius:8px;
}

.div3>#table-1>tr>td>a{
  
  margin-right:332px;
}
.div3>#table-2>tr>td{
   
    font-size:17px;
    color: #17B169;
    height:55px;
    font-weight:bold;
    padding-left:20px;
}

.div3>#table-2>tr>td:hover{
    text-decoration:underline solid #17B169;
    font-size:17px;
    color: #17B169;
    height:55px;
    font-weight:bold;
    padding-left:20px;

    
    
}
#activity{
    background-color:white;
    margin-top:83px;
    margin-left:505px;
    padding-right:22px;
    height:488px;
    position:fixed;
}
#activity>#d1{
    display:flex;
    padding-top:40px;
}
#activity>#d1>h2{
    font-size:30px;
    padding-left:40px;
    padding-right:330px;
    color:#5c5757;
}
#activity>#d1>button{
    margin-top:20px;
    font-size:20px;
    padding-left:15px;
    cursor:pointer;
    height:50px;
    color:white;
    background-color:#5c5757;
    text-align:center;
    border-radius:20px;

}
#d2{
    padding-top:20px;
    
}
#d3{
    display:block;
    overflow-y:scroll;
}
#myTable {

width: 100%;
border: 1px solid #ddd;
font-size: 18px;

}

#myTable th, #myTable td {
text-align: left;
padding: 12px;
}

#myTable tr {
border-bottom: 1px solid #ddd;
}

#myTable tr.header, #myTable tr:hover {
background-color: #f1f1f1;
}
#navl:hover{
text-decoration:underline solid #17B169;


}
#navl{
text-decoration:none;
color:black;
font-weight:black;
}
.container{
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  
  
}
.container .box{
    border:1px solid black;
  width: calc(33% - 10px);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 100px;
  border-radius: 5px;
  margin-top:70px;
  margin-left:370px;
}
.box .quote i{
margin-top: 10px;
font-size: 45px;
color: #17c0eb
}
.container .box .image{
  margin: 10px 0;
  height: 150px;
  width: 150px;
  background: #8e44ad;
  padding: 3px;
  border-radius: 50%;
}
.box .image img{
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}
.box p{
  text-align: justify;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
}
.box .name_job{
  margin: 10px 0 3px 0;
  color: #8e44ad;
  font-size: 18px;
  font-weight: 600;
}
.rating i{
  font-size: 18px;
  color: #8e44ad;
  margin-bottom: 5px;
}
.btns{
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.btns button{
  background: #8e44ad;
  width: 100%;
  padding: 9px 0px;
  outline: none;
  border: 2px solid #8e44ad;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  color: #8e44ad;
  transition: all 0.3s linear;
}
.btns button:first-child{
  background: none;
  margin-right: 5px;
}
.btns button:last-child{
    background: none;
  color: #fff;
  margin-left: 5px;
}
.btns button:first-child:hover{
  background: #8e44ad;
  color: #fff;
}
.btns button:last-child:hover{
  background: #8e44ad;
  color: #fff;
}
.btns button:hover{
  color: #fff;
}
@media (max-width:1045px){
  .container .box{
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }
}
@media (max-width:710px){
  .container .box{
    width: 100%;
  }
}



`;
export default function AdminUpdateUser() {

    const location = useLocation()
    const { item } = location.state







    return (
        <Wrapper>
            <div>
                <Adminnav />
                <br />
                <div id="nav2">
                    <ul >
                        <li><Link style={{ "textDecoration": "none", "listStyle": "none", "color": "white" }} to="/admin/home">Home</Link></li>
                        <li><Link style={{ "textDecoration": "none", "listStyle": "none", "color": "white" }} to="/admin/home/user">Users</Link></li>
                        <li><Link style={{ "textDecoration": "none", "listStyle": "none", "color": "white" }} to="/admin/home/product">Receipe</Link></li>
                    </ul>
                </div>
                <br />
               
                        <div id='d3'>
                            <div className="container" >
                                <div className="box">
                                    <div className="image">
                                        <img src="" />
                                    </div>
                                    <div className="name_job"> {item.username}  </div>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <p>
                                        User Id: {item.id} <br />
                                        Email: {item.email} <br />
                                        

                                    </p>
                                    <div className="btns">
                                        <button><Link style={{textDecoration:"none"}} to="/admin/home/user">Back</Link></button>
                                        <button><Link to="/forgetpassword" state={{item:item}} style={{textDecoration:"none"}}>Forgot Password?</Link></button>
                                    </div>
                                </div>

                            </div>

                        </div>


                
            </div>
        </Wrapper>
    )
}
