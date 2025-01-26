import React from 'react'
import './service.css'
import { useProductContext } from '../../context/usecontext'



export default function Service() {
  const  {tex,settex,bgg,toggle,checked,handle_Change,cool} = useProductContext()
  

  return (
    <>
   
   <div style={{backgroundColor:cool?"white":"black",height:"700px"}}>
   <h1 className="h1"  style={{color:cool?"black":"white"}}>Our Services</h1>
    <p id='pp' style={{color:cool?"black":"white"}}>With a promise to serve you the best</p>
    <div className='flexbox'>
    <div className="bod">
    <div className="box1">
    <p className='p' style={{color:cool?"black":"white"}}>Fresh And Organic</p>
      <img className='img' src="https://th.bing.com/th/id/R.196b1d34cf24aa7de665f5e0af46f7a8?rik=fwsCyLu%2fhOFV1w&pid=ImgRaw&r=0" alt="fresh fruits" />
      
      <h5 style={{color:cool?"black":"white"}}>lasdkfndsl dfonsdofn sdfnsdffj dsiov  dsaoij sdif asdif cx zodshf asdof xo asodfh xocvhas ocxvh so zodvj laskdjo soi df ow oasdf d asdkhkghogiv  kzx cvohf d fl dsfloa odif asdkf.</h5>
      <button className='but'> Learn more </button>
    </div>
    
    </div>
    <div className="bod">
    <div className="box2">
      <p className="p" style={{color:cool?"black":"white"}}>Free Delivery</p>
      <img  className='img' src="https://th.bing.com/th/id/R.f229a1322f3cc743a93e36492d7f34ab?rik=vXcG4n7u7RyIKw&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
      <h5 style={{color:cool?"black":"white"}}>lasdkfndsl dfonsdofn soij sdif asdif cx zodshf asdof xo asodfh xocvhas ocxvh so zodvj laskdjo soi df ow oasdf d asdkhkghal laksdjf askdj ogiv  kzx cvohf d fl dsfloa odif asdkf.</h5>
      <button className='but' > Learn more</button>
      
    </div>
    
    </div>
    <div className="bod">
    <div className="box3">
      <p className="p" style={{color:cool?"black":"white"}}>Easy Payment Methods</p>
      <img  className='img' src="https://hatinco.com/images/imagesdnbscreen/BIG-CORPORATIONS.png" alt="" />
      <h5 style={{color:cool?"black":"white"}}>lasdkfndsl dfonsdofn sdfnsdffj dsiov  dsaoij sdif asdif cx zodshf asdof xo asodfh xocvhas ocxvh so zodvj laskdjo soi df ow oasdf d asdkhkghal laksd cvohf d fl dsfloa odif asdkf.</h5>
      <button className='but' > Learn more</button>
    </div>
    
    </div>
    </div>
  
      
   </div>

    </>
  )

}
