import React from 'react';
import './aboutus.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Aboutus() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div  className="w-4/5 m-auto hey">
    <div > 
          <h1 className='text-purple-900 font-bold text-5xl text-center'>About Us</h1></div>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d)=>(
          <div className="bg-gray-100 h-[450px] text-black rounded-xl">
            <div className='h-56 rounded-t-xl bg-purple-900 flex justify-center items-center'>
              <img src={d.img} alt='' className='h-44 w-44 rounded-full'/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p>{d.review}</p>
              <button className='bg-purple-900 text-white text-lg px-6 py-1 rounded-xl'>Readmore</button>
          </div>
          {/* <div className=''>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-square-whatsapp"></i>
          </div> */}
         
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
}
const data=[
  {
    name:'Anjali Yadav',
    img:'https://th.bing.com/th/id/OIP.5o4Qj7efB7LSqPAiDDjZlQAAAA?pid=ImgDet&rs=1',
    review:"Hello, I’m Anjali, a web developer. I'm passionate about everything that goes into making websites work well." 
  },
  {
    name:'Bishesh Shrestha',
    img:'https://th.bing.com/th/id/OIP.5o4Qj7efB7LSqPAiDDjZlQAAAA?pid=ImgDet&rs=1',
    review:"Hey! I'm Bishesh, a web developer. I'm a software engineer who loves creating websites and apps."
  },
  {
    name:'Rushma Shrestha',
    img:'https://th.bing.com/th/id/OIP.5o4Qj7efB7LSqPAiDDjZlQAAAA?pid=ImgDet&rs=1',
    review:"Hi, I'm Rushma, a web developer. I am passionate about creating websites that are easy to use and understand."
  },
  {
    name:'Shreeti Bajracharya',
    img:'https://th.bing.com/th/id/OIP.5o4Qj7efB7LSqPAiDDjZlQAAAA?pid=ImgDet&rs=1',
    review:"Hello, I'm Shreeti, a web developer. I have always been interested in learning new technologies and languages."
  },
]

export default Aboutus;