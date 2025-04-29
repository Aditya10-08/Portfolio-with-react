import React from 'react'

function Skills() {
  return (
    <>
      <div className="w-full bg-[#CDEA68] text-black border-t-[1px] border-[#778b2c] p-12 flex">
        <div className="w-1/2">
          <h3 className="text-[1.5vw]">Skills:</h3>
          <h1 className="text-[5vw] leading-[5.2vw] max-w-xl tracking-tight mt-5 ">
            My Technical Skills & Expertise
          </h1>
          <h3 className="text-[1.5vw] mt-10 max-w-xl">
            I've worked with a variety of technologies in the web development
            world. From front-end to back-end, I bring a comprehensive skill set
            to every project.
          </h3>
        </div>
        <div className="w-1/2 px-[6vw] py-[3.2vw]">
          <ol>
            <li className="text-[2.2vw] tracking-tight pb-5">
              1. <u>Front-End Development</u>
            </li>
            <h4 className="text-[1.2vw] max-w-xl pb-8">
              HTML5, CSS3, JavaScript (ES6+), React.js, Vue.js, Responsive
              Design, CSS Preprocessors (SASS/LESS), Bootstrap, Tailwind CSS,
              Webpack, Accessibility Standards, Performance Optimization
            </h4>
            <li className="text-[2.2vw] tracking-tight pb-5">
              2. <u>Back-End Development</u>
            </li>
            <h4 className="text-[1.2vw] max-w-xl pb-8">
              Node.js, Express, Php, RESTful APIs, Authentication (JWT),
              Database Design, SQL (PostgreSQL, MySQL), NoSQL (MongoDB),
              Serverless Architecture, Microservices
            </h4>
            <li className="text-[2.2vw] tracking-tight pb-5">
              3. <u>Others Skills</u>
            </li>
            <h4 className="text-[1.2vw] max-w-xl">
              Node.js, Express, Php, RESTful APIs, Authentication (JWT),
              Database Design, SQL (PostgreSQL, MySQL), NoSQL (MongoDB),
              Serverless Architecture, Microservices
            </h4>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Skills