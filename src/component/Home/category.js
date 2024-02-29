import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import our1 from "../recpimg/our1.jpg"
import our2 from "../recpimg/our2.jpg"
import our3 from "../recpimg/our3.jpg"

import { styled } from 'styled-components';
import { useProductContext } from '../context/usecontext';
import { Link, NavLink, useParams } from 'react-router-dom';


const Header = styled.header`


.query{
    display:grid;

    margin-top:0px;
    width:100%;
    height:300px;
  
    
 }
 #searching{
    display:flex;
    margin-left:350px;
    margin-top:60px;
    
 }
 #searching>button{
    margin-left:5px;
    color:white;
    font-weight:600;
    cursor:pointer;
    border:none;
    font-size:20px;

    border-radius:10px;
    background-color:#393e46;
    height:60px;
    width:100px;
 }
 #searching>button:hover{
    cursor:pointer;
    background-color:#222831;
 }
 #searching>input{
    border:4px solid #FF00BF;
    color:black;
    font-weight:600;
    font-size:25px;
    height:40px;
    width:600px;
    border-radius:15px;
    
 }
 .button>button{
    border:none;
    background:none;
    color:#FF00BF;
    font-size:25px;
    height:10px;
    cursor:pointer;
    


 }
 .button>.active{
    background-color:#FF00BF;
    color:white;

 }
 .button>button:hover{
    border:none;
    background:none;
    color:#FF00BF;
    font-size:25px;


 }
 #categories{
    display:flex;
   padding-bottom:70px;
    margin-left:280px;


 }
 .main {
margin-top: 600px;
}
.card {
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 70%;
margin-top:10px;
text-align:center;
}

.card:hover {
   
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.containerr {
padding: 20px 16px;
}
#cards-group{

}
#cards{
    border-radius: 4px;
   margin-left:120px;
   
padding: .5rem;
    display: grid;

grid-template-columns: repeat(3, 1fr);

grid-auto-rows: auto;

grid-gap: 1rem;

}

.buttonvai>.Navlink{
    color: #fff;
    font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
    font-size: 18px;
  font-weight: 600;
}
.buttonvai {
  background-color: #FF00BF;
  border: 0;
  border-radius: 56px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
  font-size: 18px;
  font-weight: 600;
  outline: 0;
  padding: 16px 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.buttonvai:before {
  background-color: initial;
  background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
  border-radius: 125px;
  content: "";
  height: 50%;
  left: 4%;
  opacity: .5;
  position: absolute;
  top: 0;
  transition: all .3s;
  width: 92%;
}

.buttonvai:hover {
  box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .buttonvai{
    padding: 16px 48px;
  }
}


@media (max-width:480px){
 
 .p{
  position:absolute;
  top:30%
  font-size:20px;
  color:black;
 }
 .query{
    display:grid;
    margin-top:100px;
 }
 #searching{
    display:flex;
 }
 #searching>input{
    border:1px solid #FF00BF;
    font-size:25px;
    height:20px;
    width:200px;
    
 }
 .button>button{
    border:none;
    background:none;
    color:#FF00BF;
    font-size:25px;


 }
 #categories{
    display:flex

 }
 .main {
margin-top: 600px;
}
}

`;
export default function Category() {
    
   let {slug}= useParams()
   const { receipee,setreceipee , getpost,cool} = useProductContext()
   const [search, setsearch] = useState('')

   
  
   


useEffect(() => {
    
    getpost()
  
  
  }, [])

    const cate = [
     
        {
            name: "BREAKFAST"

        },
        {
            name: "DESSERT"

        },
        {
            name: "DINNER"

        },
        {
            name: "LUNCH"

        },
        {
            name: "SNACKS"

        }
    ]
 
    const [active, setactive] = useState("")
    
    return (
        <Header>
        <div style={{backgroundColor:cool?"white":"black" }}>
            <div className="caro" style={{ position: 'absolute', top: "0",left:"0", zIndex: "-1", opacity: "0.866" }}>

                <Carousel showThumbs={false} autoPlay={true} transitionTime={5} infiniteLoop={true} showStatus={false}  >
                    <div>
                        <img className="img  " src={our1} alt='picture' style={{ width: "100%", height: "1120px" }} />
                        <p className="p " style={{ position: "absolute", color: "#E1EBEE", top: "50%", left:"700px",fontSize: "80px", fontWeight: "bold", opacity: "1" }}>Our Receipe</p>
                    </div>
                    <div>
                        <img className="img" src={our2} alt='picture' style={{ width: "100%", height: "1120px" }} />
                        <p className="p" style={{ position: "absolute", color: "#E1EBEE", top: "50%", fontSize: "80px", fontWeight: "bold", left: "700px", zIndex: "2", opacity: "2" }}>Our Receipe</p>


                    </div>
                    <div>
                        <img className="img" src={our3} alt='picture' style={{ width: "100%", height: "1120px" }} />
                        <p className="p" style={{ position: "absolute", color: "#E1EBEE", top: "50%", fontSize: "80px", fontWeight: "bold", left: "700px", opacity: "1" }}>Our Receipe</p>


                    </div>



                </Carousel>

            </div>


            <div className='main' style={{marginTop:"1120px"}}>
                <div className='query'>
                    <div id="searching"  >
                        
                        <input id="search" name="search" value={search} onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search recipes...' />
                        <button disabled>Search</button>
                       

                    </div>
                    <div id="categories" >
                    <div className='button' >
                                    <button style={{ color: "#FF00BF", fontWeight: "bold", textDecoration: "underline  3px solid #FF00BF" } }  >
                                    <NavLink style={ {  color: "#FF00BF", textDecoration: "none" }}  to={`/courses`}>

                                    All
                                    </NavLink>
                                    </button>
                            </div>
                        {cate.map((value, i) => {

                            return (
                                <div className='button' >
                                    <button style={{ color: "#FF00BF", fontWeight: "bold", textDecoration: "underline  3px solid #FF00BF" } }  >
                                    <NavLink style={ {  color: "#FF00BF", textDecoration: "none" }} to={`/courses/category=/${value.name}`}>

                                    {value.name}
                                    </NavLink>
                                    </button>
                            </div>
                            )
                        })}


                    </div>

                </div>
                <div id="cards-group">
                    <div id="cards">
                    
                        {receipee.filter((receipee)=>{
        if(search ===""){
            return receipee;

        }
        else if(receipee.title.toLowerCase().includes(search.toLowerCase())){
            return receipee;


        }})
                        .map((index, i) => {
                            if(index.category === slug[0].toUpperCase() + slug.slice(1).toLowerCase()){
                                return (
                                <div key={i} style={{color:"black",background:"white" }} className="card">
                                    <img src={index.imageUrl} alt="Avatar" style={{ width: "100%",height:"200px" }} />
                                    <div className="containerr">
                                        <h4><b>{index.title}</b></h4>
                                        <button className="buttonvai"><Link className="Navlink" style={{textDecoration:"none"}} to= {`/courses/${index.id}/${index.slug}`}   key={index.id} > View Pages</Link></button>
                                    </div>
                                </div>
                            
                            )
                            }
                        })}
                    </div>

                </div>

            </div>
            </div>
        </Header>
    )
}
