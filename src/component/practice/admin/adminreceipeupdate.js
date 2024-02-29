import React, { useEffect } from 'react'

import Adminsite from './adminsite'
import { styled } from 'styled-components'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Adminnav from './adminnav'
import { useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import {v4} from 'uuid'

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import {  auth, db, imagedb} from '../../../firebase/firebase-config'
import { Editor } from '@tinymce/tinymce-react'
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
.div4>label{
padding-left:20px;
font-size:25px;
font-weight:600;
margin-right:100px;

}
.div4{
margin-bottom:20px;
}
#but:hover{
opacity:0.8;

}
#but{
background-color:#17B169;
color:white;
border:none;
border-radius:10px;
width:100px;
height:40px;
font-size:25px;
margin-left:20px;
margin-top:20px;
cursor:pointer;

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
    padding-top:10px;
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
    width:855px;
    height:380px;
   
    padding-top:20px;
   
    overflow: scroll;
    
}
#d2::-webkit-scrollbar {
width: 12px;
}

#d2::-webkit-scrollbar-track {

-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
border-radius: 10px;
background:#CCCCFF;
border:1px solid solid;
}

#d2::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 

}





`;
export default function AdminUpdateReceipe(props) {

    const {id}=useParams()
    
    const  {receipeeRef,deletedata} = useProductContext()

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [head, sethead] = useState("")
    const [category, setcategory] = useState("")
    const [cover, setcover] = useState("")
    const [slug, setslug] = useState("")
    const catergoryoption=[
        "Dinner",
        "Breakfast",
        "Snacks"
    ]
   
    const navigate=useNavigate()
   
    
   
    const [perpost, setperpost] = useState("")
    const receipeepostRef = doc(receipeeRef,id);
    const getperpost=async()=>{
        const data= await getDoc(receipeepostRef)
        const filterdata = data.data()
        
        setperpost(filterdata)
        console.log(perpost)
        settitle(perpost.title)
        setdesc(perpost.desc)
        setcover(perpost.imageUrl)
        setcategory(perpost.category)
        sethead(perpost.head)
        setslug(perpost.slug)
      }
  
      useEffect(() => {
        getperpost()
        const getpost=async()=>{
            try {
                const postdoc=doc(receipeeRef,id);
                if(id){
                    const datas= await getDocs(receipeeRef)
                    const filterdata = datas.docs.map((doc)=>({
                        ...doc.data(),id:doc.id
                    }))
   
                }
             } catch (error) {
                console.log(error)
                
            }
           
          }
       getpost()
      }, [id])
      
 
      const upload=async(e)=>{
        const image=ref(imagedb,`Images/${v4()}`)
           
        uploadBytes(image,e.target.files[0]).then(data=>{
            getDownloadURL(data.ref).then(val=>{
                setcover(val)
                
            })

        })
    }
    
    
    const update=async(e)=>{
        e.preventDefault()

        try{ 
            const postdoc=doc(receipeeRef,id);

            await updateDoc(postdoc,{
                "title":title,"desc":desc,"head":head,"category":category,"imageUrl":cover
                
        })
        
           
            navigate("/admin/home/product")

        }
        catch(e){
            console.log(e)

        }
    }
    return (
        <Wrapper>
            <div>
                <Adminnav />
                <br />
                <div id="nav2">
                    <ul >
                        <li><Link style={{"textDecoration":"none","listStyle":"none","color":"white"}} to="/admin/home">Home</Link></li>
                        <li><Link  style={{"textDecoration":"none","listStyle":"none","color":"white"}} to="">Users</Link></li>
                        <li><Link style={{"textDecoration":"none","listStyle":"none","color":"white"}} to="/admin/home/product">Receipe</Link></li>
                    </ul>
                </div>
                <br />
                <div className='main-page'>
                    <div className='cont'>
                        <div className='div1'>

                            <div className='div3'>
                                <table id="table-1">
                                    <tr>
                                        <th id="au">AUTHENTICATION AND AUTHORIZATION</th>

                                    </tr>
                                    <tr>
                                        <td>
                                            <Link style={{"textDecoration":"none","listStyle":"none","color":"#17B169"}} to="/admin/home/user">Users</Link>
                                            <button><Link style={{"textDecoration":"none","color":"white"}} to="/admin/home/product/add">Add</Link></button>
                                        </td>

                                    </tr>
                                </table>
                                <br />
                                <table id="table-2">
                                    <tr>
                                        <th>COOKBOOK SITE</th>

                                    </tr>
                                    <tr>
                                        <td>
                                            <Link style={{"textDecoration":"none","listStyle":"none","color":"#17B169"}} to="/admin/home/product">Receipe</Link>
                                            <button><Link style={{"textDecoration":"none","color":"white"}} to="/admin/home/product/add">Add</Link></button>
                                        </td>
                                    </tr>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
                <div id="activity">
                    <div id="d1">
                        <h2>
                            Change Receipe
                        </h2>
                       
                    </div>
                    <div id="d2">
                      <form onSubmit={update}   >
                        <div className='div4'>
                            <label>Title</label>
                            <input type='text' value={title} style={{width:"400px",height:"30px"}} onChange={(e)=>{settitle(e.target.value)}} />
                        </div>
                        <div className='div4'>
                            <label>Description</label>
                            <textarea type='text' value={desc} rows={3} style={{width:"400px",height:"80px",marginLeft: "-78px"}}  onChange={(e)=>{setdesc(e.target.value)}} />
                        </div>
                        <div className='div4'>
                            <label>Slug</label>
                            <input type='text' style={{width:"400px",height:"30px"}} value={slug} onChange={(e)=>setslug(e.target.value)} />
                        </div>
                        
                        <div className='div4'>
                            <label>Category</label>
                            <select value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                            <option>Select any</option>
                            {catergoryoption.map((option,index)=>{
                                return(
                                    <option key={index} value={option || ""}>{option}</option>
                                )
                            })}
                            </select> 
                        </div>
                        <div className='div4'>
                            <label>Image </label>
                            <input type='file'  style={{width:"400px",height:"30px"}}  onChange={(e)=>{upload(e)}} />
                           
                        </div>
                        <div className='div4'>
                            <label>Content</label>
                            <Editor value={head}  onChange={(e) => { sethead(e.target.getContent()) }} apiKey="7e26wz6vwz9et9dj0qevp11xlsau2ty76cweojwtj7b1s18t" textareaName='content'  init={{
            height: 200,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
          />
                        </div>
                        <div>
                            <button id="but" type="submit" >Save</button>
                            <button style={{"marginLeft":"20px","cursor":"pointer", "backgroundColor":"red","color":"white"}} onClick={()=>{deletedata(id)}}>Delete</button>

                        </div>
                      </form>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
