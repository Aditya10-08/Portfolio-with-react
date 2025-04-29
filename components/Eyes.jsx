import React, { useEffect, useState } from "react";

function Eye() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let DeltaX = mouseX - window.innerWidth / 2;
      let DeltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(DeltaY, DeltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
           <div className="relative  w-[50%] h-[50%] bg-zinc-900 rounded-full flex justify-center items-center">
           <div style={{transform: `translate(0%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
            <div className="  w-7 h-7 bg-zinc-100 rounded-full"></div>
           </div>
           </div>
          </div>
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
           <div className="relative flex items-center justify-center  w-[50%] h-[50%] bg-zinc-900 rounded-full">
           <div style={{transform: `translate(0%) rotate(${rotate}deg)`}} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
            <div className="  w-7 h-7 bg-zinc-100 rounded-full"></div>
           </div>
           </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Eye;
