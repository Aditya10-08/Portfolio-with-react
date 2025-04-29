import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div
    data-scroll-section data-scroll data-scroll-speed="-.09" 
     className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex"
        >
          <h1 className="text-[15vw] leading-none tracking-tighter pt-4 mb-8 font-bold uppercase mr-32">
            Ready to work
          </h1>
          <h1 className="text-[15vw] leading-none tracking-tighter pt-4 mb-8 font-bold uppercase mr-32">
            Ready to work
          </h1>
          <h1 className="text-[15vw] leading-none tracking-tighter pt-4 mb-8 font-bold uppercase mr-32">
            Ready to work
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
