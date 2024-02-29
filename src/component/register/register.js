import React, { useState } from 'react'
import logback from "../recpimg/logback.jpg"
import { styled } from 'styled-components'
import "../register/register.css"
import food1 from "../recpimg/food1.png"
import food2 from "../recpimg/food2.png"
import { FaUserCircle, FaEye } from "react-icons/fa"
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase-config'
import { useProductContext } from '../context/usecontext'

const Wrapper = styled.body`
.register{
    background-image:url(${logback}) ;
background-repeat: no-repeat;
background-size: cover;
height: 1113px;
position: absolute;
left: 0px;
top: 0px;
z-index: -1;
width: 100%;
}
.div1{
  margin-top:100px;
  background-color: black;
  width:1800px;
  height:940px;
  position:absolute;
  top:5.5%;
  right:10%;
  
}
.div2{
  background-color: white;
  width:700px;
  height:940px;
  position:absolute;
  top:0%;
  right:62%;

}
.div3{
  background-color: white;
  width:1100px;
  height:940px;
  position:absolute;
  top:0%;
  right:0%;

}
.create{
  font-size:60px;
  margin-top:11px;
  font-weight:bold;
  text-align:center;
}
.su{
  margin-left:110px;
  display:grid;
  text-align:left;
  margin-bottom:5px;
}
.su label{
  margin-left:115px;
  margin-top:30px;
  font-size:35px;
  font-weight:bold;
}
.su div input{
  border-radius:10px;
  font-size:30px;
  font-weight:lighter;
  text-align:left;
  color:black;
  margin-top:5px;
  width:690px;
  height:50px;
  margin-left:10px;
  border-bottom:5px solid black;
  border-top:0;
  border-left:0;
  border-right:0;

}
.su div{
  display:flex;
}
.bute:hover{
  opacity:0.8;
}
.bute{
  margin-left: 36%;
  margin-top: 21px;
  background-color: black;
  color: white;
  font-size: 47px;
  text-align: center;
  border: none;
  border-radius: 12px;
  width: 325px;
  height: 85px;
}
#fa{
  
  width:80px;
  height:50px;
  margin-left:30px;
  margin-top:-9px
}
@media (max-width:810px){
  .register{
    background-image:url(${logback}) ;
background-repeat: no-repeat;
background-size: cover;
height: 1100px;
position: absolute;
left: 0px;
top: 0px;
z-index: -1;
width: 100%;
}
.div1{
  background-color: black;
  width:100px;
  height:570px;
  position:absolute;
  top:3%;
  right:10%;
  margin-top:120px
  
}
.div2{
  background-color: white;
  width:500px;
  height:570px;
  position:absolute;
  top:0%;
  right:55%;
  display:none;

}
.div3{
  background-color: white;
  width:600px;
  height:570px;
  position:absolute;
  top:0%;
  right:0%;

}
.create{
  font-size:40px;
  margin-top:-1px;
  font-weight:bold;
  text-align:center;
}
.su{
  display:grid;
  text-align:center;
  margin-bottom:5px;
}
.su label{
  font-size:25px;
  font-weight:bold;
}
.su div input{
  border-radius:10px;
  font-size:20px;
  font-weight:lighter;
  text-align:center;
  color:black;
  margin-top:5px;
  width:370px;
  height:30px;
  margin-left:10px;
  border-bottom:2px solid black;
  border-top:0;
  border-left:0;
  border-right:0;

}
.su div{
  display:flex;
}
.bute:hover{
  opacity:0.8;
}
.bute{
  margin-left:35%;
  margin-top:-3px;
  background-color:black;
  color:white;
  font-size:30px;
  text-align:center;
  border:none;
  border-radius:12px;
  width:200px;
  height:60px;
}
#fa{
  
  width:80px;
  height:50px;
  margin-left:30px;
  margin-top:-9px
}

}
@media (max-width:680px){
  .register{
    background-image:url(${logback}) ;
background-repeat: no-repeat;
background-size: cover;
height: 740px;
position: absolute;
left: 0px;
top: 0px;
z-index: -1;
width: 100%;
}
.div1{
  background-color: black;
  width:300px;
  height:270px;
  position:absolute;
  top:3%;
  right:10%;
  margin-top:100px
  
}
.div2{
  background-color: white;
  width:500px;
  height:570px;
  position:absolute;
  top:0%;
  right:55%;
  display:none;

}
.div3{
  background-color: white;
  width:360px;
  height:450px;
  position:absolute;
  top:0%;
  left:-9%;

}
.create{
  font-size:20px;
  margin-top:-1px;
  font-weight:bold;
  text-align:center;
}
.su{
  display:grid;
  text-align:center;
  margin-bottom:5px;
}
.su label{
  font-size:15px;
  font-weight:bold;
}
.su div input{
  border-radius:10px;
  font-size:15px;
  font-weight:lighter;
  text-align:center;
  color:black;
  margin-top:5px;
  width:250px;
  height:25px;
  margin-left:-10px;
  border-bottom:2px solid black;
  border-top:0;
  border-left:0;
  border-right:0;

}
.su div{
  display:flex;
}
.bute:hover{
  opacity:0.8;
}
#fa{
  
  width:50px;
  height:30px;
  margin-left:20px;
  margin-top:-2px
}
.bute{
  margin-left:5%;
  margin-top:1px;
  background-color:black;
  color:white;
  font-size:20px;
  text-align:center;
  border:none;
  border-radius:12px;
  width:27px;
  height:70px;
}

}
`;

export default function Register() {
  const navigate = useNavigate()
  const { userAuth, setuserAuth } = useProductContext()


  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")

  const reges = async (e) => {
    e.preventDefault()
    if (password === confirmpassword) {
      try {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (res) => {
            const user = res.user;
            await updateProfile(user, {
              displayname: username

            })
            setuserAuth(true)
            toast.success('Registered Successfull')
            navigate("/");
          })
      } catch (error) {
        toast.error('Please Fill All')
      }
    }
    else {
      toast.error('Password Not Matched')
    }
  }


  return (
    <>
    <ToastContainer />
      <Wrapper>

        <div className='register'>
          <div>
            <div className='div1'>
              <div className='div2'>
                <img src={`${food1}`} style={{ marginLeft: "50px", marginTop: "20px" }} width="500px" height="350px" />
                <img src={`${food2}`} width="657px" height="550px"  />
              </div>
              <div className='div3'>
                <div className='logo' style={{ display: "flex", marginTop: "5px", fontWeight: "bold", fontStyle: "italic", fontFamily: "sans-serif", fontSize: "70px", marginLeft: "10px", cursor: "pointer" }} >
                  <label style={{ letterSpacing: "2px" }}>COOKBOOK </label>
                  <span style={{ fontSize: "22px", marginLeft: "15px", marginTop: "15px", height: "30px", width: "148px", fontFamily: "serif" }}>the best online recipes</span>

                </div>
                <form onSubmit={reges}>
                  <h1 className='create'>Create an Account</h1>
                  <div className='su'>
                    <label>USERNAME</label>

                    <div><FaUserCircle id="fa" /><input type='text' value={username} onChange={(e) => { setusername(e.target.value) }} placeholder='Enter UserName' /></div>
                  </div>
                  <div className='su'>
                    <label>EMAIL</label>

                    <div><FaUserCircle id="fa" /><input type='email' value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Enter Email' /></div>
                  </div>
                  <div className='su'>
                    <label>PASSWORD</label>

                    <div><FaEye id="fa" /><input type='password' value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter Password' /></div>
                  </div>
                  <div className='su'>
                    <label>CONFIRM PASSWORD</label>

                    <div><FaEye id="fa" /><input type='password' value={confirmpassword} onChange={(e) => { setconfirmpassword(e.target.value) }} placeholder='Confirmation Password' /></div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p style={{ color: "black", textDecoration: "none", marginLeft: "240px", fontSize: "30px", textAlign: "start" }}>Already a member ? <a style={{ color: "red", fontWeight: "bold", border: "none" }} href='/login'>Log In</a></p>
                    <button style={{ color: "blue", display: "none", border: "none", backgroundColor: "white", width: "190px", height: "40px", marginTop: "10px", marginLeft: "100px", marginRight: "0px", fontSize: "20px" }}>Generate Password</button>
                  </div>
                  <input className='bute' type='submit' value="Register" />
                </form>

              </div>

            </div>
          </div>

        </div>
      </Wrapper>


    </>
  )
}
