import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { db } from '../firebase/firebase-config';

const Wrap=styled.section`
    .div1{
        
        position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align:center;
  background: #f4f3f3;
 
    width: 800px;
    height: 600px;
    margin-top: 70px;
    }
    .div1>h1{
        font-size:50px;
    }
    .div2{
        display:flex;
        background: white;
        border:0.25pt solid #e8e8e8;
        text-align:start;
        width:500px;
        height:400px;
        position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left:30px;
  color:#002244;
        
        
        
    }
    #d1{}
    #d2{}
    #d3{
        display:grid;
    }
    #d3>input{
        width:463px;
        height:30px;
        
    }
    #d3>input:hover{
        width:463px;
        color:#0047AB;
    }
    #d4>button{
        cursor:pointer;
        border:none;
        border-radius:10px;
        font-size:20px;
        font-weight:bold;
        margin-top:15px;
        width:470px;
        height:50px;
        color:white;
        background:#002244;
        
    }
    #d4>button:hover{
        background:#0047AB;
    }
    #d5>#Link{
        list-style:none;
        text-decoration:none;
        text-align:center;
        font-size:25px;
        color:#0047AB;
        margin-top:50px;
        margin-left:150px;


    }
    #d5{
        margin-top:30px;
    }
     #d5>#Link:hover{
        list-style:none;
        text-decoration:underline solid #0047AB;
        text-align:center;
        font-size:25px;
        color:#0047AB;


    }

    `;
export default function Forgetpassword() {
  
    const [email, setemail] = useState("")
    const onchange=(e)=>{
        setemail(e.target.value)
    }
    const auth= getAuth()
   const navigate= useNavigate()
    const forgetpass=async(e)=>{
        e.preventDefault()
        
        try{
            await sendPasswordResetEmail(auth,email)
            alert("Please check your gmail for reset")
            navigate("/login")

        }
        catch(e){
            alert("We got something wrong error here")
        }

        
    }
  return (
    <Wrap>
        <div className="div1">
        <h1>CookBook</h1>
        <div className="div2">
            <form onSubmit={forgetpass}>
                <div id="d1">
                    <h2>Forgot your password</h2>
                </div>
                <div id="d2">
                   <p> Please enter the email address
                    you'd like your password reset
                    information sent to</p>
                </div>
                <div id="d3">
                    <label>
                        Enter email address
                    </label>
                    <input id="email" value={email} onChange={onchange} name="email" type="email" placeholder='123@gmail.com' />

                </div>
                <div id="d4">
                <button type="submit">Request reset link</button>

                </div>
                
                <div id="d5">
                    <Link id="Link" to="/login">Back to login</Link>
                </div>
                
            </form>
        </div>
      
    </div>
    </Wrap>
  )
}
