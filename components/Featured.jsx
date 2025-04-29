import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

function Featured() {
  const salienceText = " Salience Labs";
  const cardboardText = " Cardboard";

  const [salienceLetters] = useState(
    salienceText.split("").map(() => useAnimation())
  );
  const [cardboardLetters] = useState(
    cardboardText.split("").map(() => useAnimation())
  );

  const handleHover = (letterArray) => {
    letterArray.forEach((ctrl, i) => {
      ctrl.start({
        y: "0%",
        transition: {
          delay: i * 0.025,
          duration: 0.3,
          ease: [0.6, 0.01, -0.05, 0.95],
        },
      });
    });
  };
  
  const handleHoverEnd = (letterArray) => {
    letterArray.forEach((ctrl, i) => {
      ctrl.start({
        y: "100%",
        transition: {
          delay: i * 0.02,
          duration: 0.3,
          ease: [0.6, 0.01, -0.05, 0.95],
        },
      });
    });
  };
  

  return (
    <div className="w-full py-25">
      <div className="w-full px-15 border-b-[1px] border-zinc-700 pb-15">
        <h1 className="text-6xl">Featured projects</h1>
      </div>

      <div className="px-15 w-full mt-20">
        <div className="flex gap-7">
          <div className="text flex items-center gap-2 w-1/2">
            <GoDotFill />
            <h1 className="uppercase">Salience Labs</h1>
          </div>
          <div className="text flex items-center gap-2 w-1/2">
            <GoDotFill />
            <h1 className="uppercase">Cardboard Spaceship</h1>
          </div>
        </div>

        <div className="cards w-full flex gap-8 mt-5">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(salienceLetters)}
            onHoverEnd={() => handleHoverEnd(salienceLetters)}
            className="relative cardContainer w-1/2 h-[78vh] rounded-2xl"
          >
            <h1 className="card absolute flex overflow-hidden w-full left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-8xl text-[#CDEA68] font-semibold leading-none tracking-tight uppercase">
              {salienceText.split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={salienceLetters[index]}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt="Salience Labs"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(cardboardLetters)}
            onHoverEnd={() => handleHoverEnd(cardboardLetters)}
            className="relative cardContainer w-1/2 h-[78vh] rounded-2xl"
          >
            <h1 className="absolute flex overflow-hidden w-full right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-8xl text-[#CDEA68] font-semibold leading-none tracking-tight uppercase">
              {cardboardText.split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cardboardLetters[index]}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="h-full w-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg"
                alt="Cardboard Spaceship"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
