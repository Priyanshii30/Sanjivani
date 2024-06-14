"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useState } from "react";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "SanJivini:",
    },
    {
      text: "Cultivating",
    },
    {
      text: "Mental",
    },
    {
      text: "Wellness",
    },
    {
      text: "and ",
    },
    {
      text: "well",
    },
    {
      text: "being",
    },
   
  ];

  const [LoginIsOpen, setLoginIsOpen] = useState(false);
  const [SignUp, setSignUp] = useState(false);

  

  const handleclick = () => {
    setLoginIsOpen(true);
  };

  const HandleCLickSignUp = () => {
    setSignUp(true);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Team BitBuzz! Road to victory 
      </p> */}
      <TypewriterEffectSmooth words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link to={'/login'} >
        <button
      className="inline-flex items-center bg-black border-0 py-1 px-5 rounded black w-40 h-10 rounded-xl bg-white text-black border border-black text-lg"
      onClick={handleclick}
      style={{ background: "black", color: "white" }}
    >
      <span style={{ flex: 1 }}>Get Free</span>
        <RiArrowRightSLine />
    </button>
        </Link>
        <Link to={'/register'}>
          <button onClick={HandleCLickSignUp} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-lg" style={{fontWeight:'bold'}}>
            Signup
          </button>
        </Link>
      </div> */}
    </div>
  );
}
