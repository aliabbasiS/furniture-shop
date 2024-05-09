import { Button } from "@mui/material";
import Rating from "@mui/material/Rating/Rating";
import { useState } from "react";
import 'swiper/css';
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { swipernav } from "./swiperchange";





// const changecolor=()=>{
//     document.getElementById('cir1')?.classList.add('bg-white')
//     document.getElementById('cir1')?.classList.remove('bg-gray-300 ')
//     console.log('f')
// }

















const furnitureshop=()=>{
   const [num,setnum]=useState(1)
   const [change,setchange]=useState(1)
   const [isClicked, setIsClicked] = useState(false)
    return(
        <>
        
    <div className="h-screen flex flex-col w-screen bg-white">
     
        <header className="w-full pl-10 border flex  md:h-24 justify-between  text-center h-1/6">
            <img className="w-1/4 md:w-24" src="/public/logo.svg" alt="" />
            <ul className="flex gap-3 justify-center items-center font-semibold">
                <li className="headertext">Shop</li>
                <li className="headertext">COLLECTIVE</li>
                <li className="headertext">DESIGNERS</li>
                <li className="headertext">ABOUT US</li>
                <li className="headertext">CONTACT</li>
            </ul>
            <div className="flex ">
            <div className="flex p-3">
                <img className="p-4" src="/public/search.svg" alt="" />
            </div>
            <div className="flex p-3  border-l-2 border-gray-200">
                <img className="p-4" src="/public/shopcart.svg" alt="" />
            </div>
            </div>
        </header>
        <main className="mt-10 flex flex-col w-full  px-10">
            {/* back img */}
            <div className="flex justify-between">

                <button><img src="back.svg" className="w-7 mb-4" alt="" /></button>
                <span className="font-semibold text-3xl ">{`0${change}`} <span className="text-gray-500 text-2xl ">/ 05</span> </span>
            </div>
            <div className="flex justify-between">
                <span className="font-semibold text-gray-400">Chair / <span className="text-black">Meyl Lounge Chair</span></span>
                <div className="gap-10 flex justify-between">
                    <button onClick={()=>{
                        if(1<change)
                        setchange(change-1)}}><img src="/public/backward.svg" alt="" /></button>
                    <button onClick={()=>{
                        if(change<5)
                        setchange(change+1)}}> <img src="/public/forward.svg" alt="" /></button>
                </div>
            </div>

        </main>
        <div className="flex">


        <section className="w-1/2 h-screen px-10">
        {/* Merl Lounge Chair */}
            <div>

                <h1 className="text-6xl font-bold ">Merl Lounge Chair</h1>
                <div className="flex my-6 justify-between">
                    <span className="text-3xl font-bold">$149.99</span>
                    <div className="flex items-center gap-4">

                    <Rating name="half-rating" defaultValue={4.6} precision={0.5} readOnly />
                    <span className="text-xl font-medium"> 4.6 / 5.0 (556)</span>
                    </div>
                </div>
                <span className="text-xl font-semibold ">Lsorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptatum ducimus hic alias error unde aliquam, fugiat architecto obcaecati. Harum suscipit aspernatur perferendis eius sint dolores dolore magni eaque consequatur.
                Voluptatibus repellendus quas dolorem explicabo architecto tenetur, molestiae soluta est amet odio obcaecati. Quo corporis non impedit, accusamus libero soluta provident nemo qui repellat numquam optio placeat, beatae, quod fugit?</span>
                {/* color pallate */}
                <div>
                    <button  id="cir1" className={isClicked ? 'bg-gray-300' : 'bg-white'}>
                        <img className="mix-blend-multiply" src="/public/cer1.jpg" alt="" />
                    </button>
                </div>
                <div className="flex gap-6">

                <div   className="w-1/3 border  flex justify-between items-center border-gray-400 p-4 ">
                    <button className="w-1/3 flex justify-center p-1 " onClick={()=>{if(num>1){setnum(num-1)}}} > <img src="/public/minus.svg" alt="" /> </button>
                    <span className="w-1/3 flex justify-center text-3xl items-center "> {num}</span>
                    <button  onClick={()=>{if(num>0){setnum(num+1)}}} className="w-1/3 flex justify-center p-1 "> <img src="/public/plus.png" alt="" /> </button>

                </div>
                <Button onClick={()=>{console.log(num)}} className="w-1/3" variant="contained" color="success">Add to cart</Button>
                </div>
                <div className="mt-5 font-serif">

                    <span> Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</span>
                </div>

            </div>
            <div className="order-1 my-5 flex items-center justify-between" >
                <span style={{color:'#3AA39F'}} className="flex gap-3 font-semibold "><img src="/public/Vector.svg" alt="" />Add to Wishlist </span>
                <img className="p-4" src="/public/social.jpg" alt="" />
            </div>
           
        </section>
        
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        {swipernav}
      </Swiper>
          </div>
        
        
    </div>
    </>
    
    )
}
export default furnitureshop