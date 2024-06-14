"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fmental-health&psig=AOvVaw02RdCZOJRceyNpvuLSZt4D&ust=1714373736146000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDV6P6p5IUDFQAAAAAdAAAAABAJ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp97Uw3tUR4e1-VfgJBWdi2X4DuLzuq9K1fig3kzfoHQ&s",
    "https://img.freepik.com/free-vector/hand-drawn-world-mental-health-day_52683-44659.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714176000&semt=ais"
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div
          className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
          color="black"
          style={{
            fontSize: "5.75rem",
            lineHeight: 1,
            height: "68vh",
            margin:"auto"
          }}
        >
          The hero section slideshow <br /> nobody asked for
        </div>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4" style={{marginBottom:'58px',border:
          '3px solid white'
        }}>
          <span style={{color:'white',fontWeight:'300'}}>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
