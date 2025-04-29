import React from "react";

function About() {
  return (
    <>
      <div className="w-full py-[8vw] px-[4vw]  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="text-[3.7vw] tracking-tight leading-[4.5vw] max-w-6xl ">
          Full Stack Web Developer blending creative with <u>clean</u>,{" "}
          <u>efficient</u> <u>code to build impactful digital experiences.</u>
        </h1>
        <div className="w-full flex border-t-[1px] border-[#778b2c] mt-15">
          <div className="w-1/2 py-5">
            <h1 className="text-lg">What you can expect:</h1>
          </div>
          <div className="w-full flex py-5">
            <div className="w-1/2 pl-[10vw]">
              <h3 className="mb-10">
                As a Full Stack Developer, I am responsible for developing
                scalable front-end and back-end solutions, managing APIs and
                databases, optimizing performance, collaborating across teams,
                and continuously enhancing technical expertise.
              </h3>
              <h3>
                And also deliver end-to-end solutions by building interfaces,
                managing servers, solving technical challenges, and adapting to
                evolving technologies.
              </h3>
            </div>
            <div className="w-1/2 px-[11.5vw] py-[6vw]">
              <div className="social-handles text-md space-y-1">
                <h2 className="font-semibold">Connect Socially:</h2>
                <a className="underline block" href="">Github</a>
                <a className="underline block" href="">LinkedIn</a>
                <a className="underline block" href="">Twitter / X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
