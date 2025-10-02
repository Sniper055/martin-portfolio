import React from "react";
import myImage from "../assets/images/image1.jpg";
import { Link } from "react-router-dom";

const Body = () => {
  const [togglebackground,setToggleBackground] = React.useState(false)
  return (
    <section 
    onClick={()=>setToggleBackground((prevState) =>!prevState)}
     className={`transition-colors duration-500 mt-1 
      ${togglebackground ? 'bg-black ' : 'bg-blue-50'}`}
>
      <h1 className="text-center text-3xl font-bold p-6 text-violet-600">Welcome</h1>
      <div className="con container-xl lg:container m-auto flex  items-center justify-between bg-white w-full p-6 shadow ">
        
        {/* Profile Info */}
        <div className="profile flex flex-col md:flex-row items-center ">
          <img
            src={myImage}
            alt="my profile"
            className="w-100 h-110 rounded-full shadow-lg object-cover"
          />
          <div className="ml-10 md:text-left justify-center mt-5">
            <h1 className="name font-bold text-3xl text-violet-600">Hi, I'm Mr. Kpornyuie Martin</h1>
            <p className="underline text-lg">
              Database Administrator and Software Engineer
            </p>

             {/* Buttons */}
        <div className="flex mt-20 md:mt-10  justify-center">
          <Link
            to="/portfolio"
            className="rounded-md mr-6 bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </Link>
          <Link
            to="/cv"
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition duration-300"
          >
            Download CV
          </Link>
        </div>
          </div>
        </div>
        </div>
        
    </section>
  );
};

export default Body;
