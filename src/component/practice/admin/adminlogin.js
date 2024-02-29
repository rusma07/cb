// import { signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router';
// import { styled } from 'styled-components'
// import {db,auth} from '../../../firebase/firebase-config'
// import { doc } from 'firebase/firestore';

// const Wrapper = styled.section`
// .containerr{
//     background-color:#ffc;
// }
// form{
//     justify-content:center;
//     display:grid;
    
//     height:400px;
//     position :absolute;
//     border:0.25pt solid #e8e8e8;
//     top: 17%;
//     overflow:hidden;
//     left:30%;
//     overflow: hidden;
// width: 39em;
// min-width: 300px;

   
//     transform: translate(-50, -50%);

// }
// #div1{
    
//     width:600px;
//     color:white;
//     background-color: #17B169;
//     height:80px;
//     text-align:center;

// }
// #div2 input{
//     border:0.5pt solid #00FF40;
//     width:500px;
//     height:50px;
//     border-radius:8px;

    
    

// }
// #div3, #div4{
//     display:grid;
//     position:relative;
//     left:40px;
// }
// #div1 h1{
//     position :relative;
//     font-size:30px;
//     top:18px;
    
    
//     font-weight: 600;
// }
// #div2{
//     display:grid;
//     position:relative;
//     bottom:20px;
//     background:#fff;
// }
// label{
//     color:black;
//     font-weight:600;
//     font-size:20px;
// }
// #but{
//     margin-top:15px;
//     text-align:center
// }
// #but .button:hover{
// transition:0.5s;
// cursor:pointer;
// background-color:#4FFFB0;
// text-align:center;
// color:white;
// height:45px;
// width:130px;
// border:none;
// border-radius:8px;
// font-size:20px;

// }


// #but .button{

//     background-color:#17B169;
//     text-align:center;
// color:white;
//     height:45px;
//     cursor:pointer;
//     width:130px;
//     border:none;
//     border-radius:8px;
//     font-size:20px;

// }
// @media screen and (max-width:902px){
//     form{
//     justify-content:center;
//     display:grid;
    
//     height:400px;
//     position :absolute;
//     border:0.25pt solid #e8e8e8;
//     top: 17%;
//     overflow:hidden;
//     left:13%;
    
// width: 300px;
// min-width: 100px;

   
//     transform: translate(-50, -50%);

// }
// #div1{
    
//     width:300px;
//     color:white;
//     background-color: #17B169;
//     height:80px;
//     text-align:center;

// }
// #div2 input{
//     border:0.5pt solid #00FF40;
//     width:250px;
//     height:40px;
//     border-radius:8px;

    
    

// }
// #div3, #div4{
//     display:grid;
//     position:relative;
//     left:20px;
// }
// #div1 h1{
//     position :relative;
//     font-size:23px;
//     top:18px;
    
    
//     font-weight: 600;
// }
// #div2{
//     display:grid;
//     position:relative;
//     bottom:20px;
//     background:#fff;
// }
// label{
//     color:black;
//     font-weight:500;
//     font-size:20px;
// }
// #but{
//     margin-top:15px;
//     text-align:center
// }
// #but .button:hover{
// transition:0.5s;
// cursor:pointer;
// background-color:#4FFFB0;
// text-align:center;
// color:white;
// height:45px;
// width:130px;
// border:none;
// border-radius:8px;
// font-size:20px;

// }


// #but .button{

//     background-color:#17B169;
//     text-align:center;
// color:white;
//     height:45px;
//     cursor:pointer;
//     width:130px;
//     border:none;
//     border-radius:8px;
//     font-size:20px;

// }

// }


// `;
// export default function Adminlogin() {
   


//     const navigate=useNavigate()
//     //const [username, setusername] = useState("")
//     const [email, setemail] = useState("")
//     const [password, setpassword] = useState("")
   
//    // const isAdmin=  app.auth().user.uid='YjzWZQh5DyVoD5CiJzYvc7uylnH2'
//      const isAdmin=  doc(db,'user','YjzWZQh5DyVoD5CiJzYvc7uylnH2')
//      console.log(isAdmin)
//     const handleSubmit = async(e) => {
       
//         e.preventDefault()
//         if (isAdmin){
//             try {
//                 signInWithEmailAndPassword(auth,email , password)
//                   .then((userCredential) => {
          
//                     const user = userCredential.user;
                    
//                     console.log(user.admin)
                    
//                     navigate("/admin/home")
                    
//                   })
//               }
//               catch (e) {
//                 console.log(e)
//               }
          
//         }
//         else{
//             alert("invalid")
//         }
        
//       };
    
//   return (
//    <Wrapper>
//      <div className='containerr'>
//     <form id="form" onSubmit={handleSubmit} >
//     <div id="div1">
//     <h1>Cookbook administration </h1>
//     </div>
     
//        <div id="div2">
//        <div id="div3">
//         <label>Username:</label>
//         <input
//           type="email" 
//           value={email}
//           onChange={(e) => setemail(e.target.value)}
//         />        </div>
//         <div id="div4">
//         <label>Password:</label>
//         <input type="password" id="username" name="password" value={password} onChange={(e)=> setpassword(e.target.value)} />
//         </div>
//         <div id="but">
//         <input className='button' type='submit' value="Log in" />

//         </div>
//        </div>
//     </form>
      
//     </div>
//    </Wrapper>
//   )
// }
