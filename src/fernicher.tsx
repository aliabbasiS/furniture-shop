import { Button } from "@mui/material";
import Rating from "@mui/material/Rating/Rating";
import { useState } from "react";

const furnitureshop=()=>{
   const [num,setnum]=useState(1)
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
                <span className="font-semibold text-3xl ">01 <span className="text-gray-500 text-2xl ">/ 05</span> </span>
            </div>
            <div className="flex justify-between">
                <span className="font-semibold text-gray-400">Chair / <span className="text-black">Meyl Lounge Chair</span></span>
                <div className="gap-10 flex justify-between">
                    <img src="/public/backward.svg" alt="" />
                    <img src="/public/forward.svg" alt="" />
                </div>
            </div>

        </main>

        <section className="w-1/2 h-4/5 flex flex-col px-10  ">
        {/* Merl Lounge Chair */}
            <div className=" h-5/6  ">

                <h1 className="text-8xl font-bold ">Merl Lounge Chair</h1>
                <div className="flex my-6 justify-between">
                    <span className="text-3xl font-bold">$149.99</span>
                    <div className="flex items-center gap-4">

                    <Rating name="half-rating" defaultValue={4.6} precision={0.5} readOnly />
                    <span className="text-xl font-medium"> 4.6 / 5.0 (556)</span>
                    </div>
                </div>
                <span className="text-2xl font-semibold leading-8 ">Lsorem ipsum dolor sit amet, consectetur adipisicing elit. Harum voluptatum ducimus hic alias error unde aliquam, fugiat architecto obcaecati. Harum suscipit aspernatur perferendis eius sint dolores dolore magni eaque consequatur.
                Voluptatibus repellendus quas dolorem explicabo architecto tenetur, molestiae soluta est amet odio obcaecati. Quo corporis non impedit, accusamus libero soluta provident nemo qui repellat numquam optio placeat, beatae, quod fugit?</span>
                {/* color pallate */}
                <img className=" my-9 w-1/3 " src="/public/colorpalet.svg" alt="" />
                <div className="flex gap-6">

                <div   className="w-1/3 border  flex justify-between items-center border-gray-400 p-4 ">
                    <button className="w-1/3 flex justify-center p-1 " onClick={()=>{if(num>1){setnum(num-1)}}} > <img src="/public/minus.svg" alt="" /> </button>
                    <span className="w-1/3 flex justify-center text-3xl items-center "> {num}</span>
                    <button  onClick={()=>{if(num>0){setnum(num+1)}}} className="w-1/3 flex justify-center p-1 "> <img src="/public/plus.png" alt="" /> </button>

                </div>
                <Button onClick={()=>{console.log(num)}} className="w-1/3" variant="contained" color="success">Add to cart</Button>
                </div>
                <span className="mt-6"> Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</span>

            </div>

        </section>
        
        
    </div>
    </>
    
    )
}
export default furnitureshop