import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div 
    data-scroll data-scroll-speed="-.3"
      className="h-screen w-full bg-zinc-900 pt-1 "
      >
      <div className="textStructure mt-40 px-16">
        {["We Create", "Eye-Opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8.7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8.7vw] h-[4.7vw] mr-1 relative top-[1vw] rounded bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)]"
                  ></motion.div>
                )}
                <h1 className="text-[6.5vw] tracking-tighter leading-[6vw] uppercase font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-3 px-12">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="Start flex items-center gap-5">
          <div className="px-6 py-2 font-md text-[1vw] uppercase border-[2px] border-zinc-500 rounded-full">
            Start the project
          </div>
          <div className="w-9 h-9 flex items-center text-2xl justify-center border-[2px] border-zinc-500 rounded-full ml-[-10px]">
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
