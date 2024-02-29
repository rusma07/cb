import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; 

import { styled } from 'styled-components';
import { useProductContext } from '../context/usecontext';
import { useLocation } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

// const { cool} = useProductContext()

//     let {slug,id}=useParams()
 
//     const [index, setindex] = useState("")
//     const receipeeRef= doc(db,'receipe',id)
//     const getpost=async()=>{
//         const data= await getDoc(receipeeRef)
        
//         setindex(data.data())
        
//       }
     
//     const body= index.head
//     useEffect(() => {
//      getpost()
//     }, [])

const Header = styled.header`
.back{
    font-size: 1em;
    border-style: solid;
    border-width: 1px;
    border-color: #E0E0E0;
    padding: 10px;
    margin:20px;
    margin-top:10px;
    background-color: #eff4ee;
    max-width: 100%;
    outline: none;
    height:1500px;
}
#h1{
    margin-left:50px;
    font-family: Francois One;
    text-transform: uppercase;
    font-weight: bold;
    color: #0c0c0c;
    font-size: 60px;
    line-height: 1.07em;
    letter-spacing: -.02em;
   
    -ms-word-wrap: break-word;
    word-wrap: break-word;

}

.back>div>img{
    margin-top:50px;
    width:370px;
    height:350px;
    position: relative;
    text-align: center;
    z-index: 1;
    bottom:130px;
    float:right;
   

}
.back>div>.div1{
    margin-right:400px;
    
}
.div1>h2{
    line-height: 1.3em;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: #212121;
    font-size: 2em;
    margin: 0 !important;
    padding: 0 !important;
}
.div1>p{
    font-style: normal;
    font-weight: 400;
    font-size:30px;
    text-transform: none;
    display:block;
    box-sizing: border-box;
}
.div2{
    margin-top:190px;
    font-style: normal;
    font-size:30px;
    font-weight: 400;
    text-transform: none;
    counter-reset: wprm-advanced-list-counter;
    box-sizing: border-box;

}


`;
export default function Receipepost() {
    const { cool} = useProductContext()
   
    let {slug,id}=useParams()
 
    const [index, setindex] = useState("")
    const receipeeRef= doc(db,'receipe',id)
    const getpost=async()=>{
        const data= await getDoc(receipeeRef)
        
        setindex(data.data())
        
      }
     
    const body= index.head
    useEffect(() => {
     getpost()
    }, [])

   
    return (
        <Header>
        <div style={{backgroundColor:cool ? "black" : "white"}}>
            <div>
            <h1  style={{color:cool?"white":"black"}} id='h1'>{index.title}</h1>
            <p>&nbsp;</p>
            <div>
                <div className='back'>
                <div id='div'>
                    <div className='div1'>
                        <h2>{index.title}</h2>
                        <p> {index.desc} </p>
                    </div>
                    <img src={index.imageUrl} alt='Image' />
                </div>
                <div style={{fontSize:"24px",width:"100%",height:"24px",marginTop:"200px"}}>
                <hr style={{width:"1200px",marginBottom:"100px"}}/>

                </div>
                <div className='div2'>
                <div dangerouslySetInnerHTML={{__html:body}} />

                </div>

                </div>
            </div>
          

            </div>
        </div>
          

         
        </Header>
    )
}
