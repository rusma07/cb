import React, { useContext, useEffect, useState } from 'react'
import themeContext from './createcontext'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'





export default function ThemeProvider({children}) {
    const [tex, settex] = useState("black")

    const [bgg, setbgg] = useState("white")
    const [cool, setcool] = useState(false)
    const [toggle, settoggle] = useState( JSON.parse(localStorage.getItem("toggle")) ||"Light ");
    const [checked, setchecked] = useState(false)
    const handle_Change=()=>{
    if(checked===false){
        settex("white")
        setbgg("black")
        settoggle("Dark")
        setchecked(!checked)
        setcool(! cool)


    }
    else  if(checked===true){
        settex("black")
        setbgg("white")
        settoggle("Light")
        setchecked(!checked)
        setcool(! cool)

    


}
}
const [userAuth, setuserAuth] = useState(false)
useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(toggle));
}, [toggle])

//admin crud
const [receipee, setreceipee] = useState([])

    
    
    const receipeeRef = collection(db,"receipe")
    const getpost=async()=>{
        const data= await getDocs(receipeeRef)
        
        setreceipee(data.docs.map((doc)=>({
            ...doc.data(),id:doc.id
        })))
      }
      
    const deletedata=async(id)=>{
      try {
          const postdoc=doc(receipeeRef,id);
          await deleteDoc(postdoc);
          alert("deleted")
         
          
      } catch (error) {
          console.log(error)
      }
  }
  const [open, setopen] = useState(false);
 
  const dotclick = () => {
    setopen(!open);
  };

  return (
    <div>
    <themeContext.Provider value={{dotclick,open,tex,settex,bgg,cool, userAuth,setuserAuth ,setbgg,toggle,settoggle,handle_Change,checked,setchecked,receipee,getpost,setreceipee,receipeeRef,deletedata}}  >
    {children}
       
    </themeContext.Provider>
      
    </div>
  )
}
const useProductContext=()=>{
    return useContext(themeContext)
}
export {useProductContext};
