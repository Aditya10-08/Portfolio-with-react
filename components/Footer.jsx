import React from "react";

function Footer() {
  return (
    <div className="w-full h-screen bg-zinc-900 px-15 py-20 flex gap-5">
      <div className="w-1/2 h-full flex flex-col justify-between ">
        <div className="heading ">
          <h1 className="text-[6vw] leading-none uppercase font-semibold tracking-tight">Eye-</h1>
          <h1 className="text-[6vw] leading-none uppercase font-semibold tracking-tight"> Opening</h1>
        </div>
      </div>
      <div className="w-1/2">
      <h1 className="text-[5.5vw] leading-none uppercase font-semibold tracking-tight">Presentations</h1>
      <h1 className="pt-10">S:</h1>
      <div className="details pt-5">
            {["Instagram" ,"Twitter / x" ,"LinkedIn"].map((item,index)=> (
                <a key={index} className={`text-md block capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
            )) }
      </div>
      <h1 className="pt-10">L:</h1>
      <div className="details pt-5">
            {["New-delhi" ,"India"].map((item,index)=> (
                <a key={index} className={`text-md block capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
            )) }
      </div>
      <h1 className="pt-10">L:</h1>
      <div className="details pt-5"> 
            {["try.aditya2210@gmail.com"].map((item,index)=> (
                <a key={index} className={`text-md block capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
            )) }
      </div>
      </div>
    </div>
  );
}

export default Footer;
