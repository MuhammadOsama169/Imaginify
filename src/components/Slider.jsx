import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import Img1 from "../assets/dark-women.png";
import Img3 from "../assets/women-volncano.png";
import Img4 from "../assets/women-enhanced-face.png";
import Img5 from "../assets/ship-on-port.png";
import Img6 from "../assets/girl-listening-music.png";
import Img7 from "../assets/pixelated-world.png";
import Img8 from "../assets/cyberpunk.png";
import Img9 from "../assets/tree-purple.png";

const slides = [
  {
    id: 1,
    imageSrc: Img5,
  },
  {
    id: 2,
    imageSrc: Img3,
  },
  {
    id: 3,
    imageSrc: Img4,
  },
  {
    id: 4,
    imageSrc: Img6,
  },
  {
    id: 5,
    imageSrc: Img7,
  },
  {
    id: 6,
    imageSrc: Img8,
  },
  {
    id: 8,
    imageSrc: Img9,
  },
  {
    id: 7,
    imageSrc: Img1,
  },
  
  
]
export const Slider = () => {
  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text!"
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };
  return (
    <>
      <div className="margin-gap">
        <Swiper
        className="w-full h-[800px] flex justify-center items-center md:mt-[50px]"
          spaceBetween={30}
          centeredSlides
          autoplay={{
            delay: 8500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          
            {slides.map((slide,i) => (
              <SwiperSlide key={i}>
                <img className="block w-full h-full object-cover" src={slide.imageSrc} title={slide.title} subtext={slide.subtext}/>

                <motion.div
                initial={{x:-200}}
                  animate={{x:0}}
                  variants={container}
                  transition={{
                    duration:1,
                    delay: 1,
                  }}
                >
                  <div className="absolute md:top-[50%] top-[70%] left-[10%]">
                    <h1 className="text-2xl md:text-4xl font-bold text-white text-left">UNLOCK YOUR</h1>
                    <h1 className="text-3xl md:text-6xl font-bold text-redhot text-left">IMAGINATION</h1>
                    <h1 className="text-s text-white text-left">Get involved with the comminity filled with boundless creativity</h1>
                  </div>
                </motion.div>

              </SwiperSlide>
            )
            )}

        </Swiper>
      </div>
    </>
  );
};