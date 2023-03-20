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
import { SliderHeading } from "./SliderHeading";

const slides = [
  {
    imageSrc: Img5,
  },
  {
    imageSrc: Img3,
  },
  {
    imageSrc: Img4,
  },
  {

    imageSrc: Img6,
  },
  {
  
    imageSrc: Img7,
  },
  {

    imageSrc: Img8,
  },
  {
 
    imageSrc: Img9,
  },
  {

    imageSrc: Img1,
  },
];

const slidesList = slides.map((el, index) => {
  return {id: index, ...el };
})


export const Slider = () => {
  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text"
    }
  ];

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
          
            {slidesList.map(({id, imageSrc}) => (
              <SwiperSlide key={id}>
                    {({ isActive }) => {
                      if (isActive){   return(
                        <>
                        <img className="block w-full h-full object-cover" src={imageSrc}/>
                          <motion.div
                          animate={{ opacity: [0, 0.2, 0.8, 1] }}
                          transition={{ ease: 'easeInOut', duration: 1}}
                          >
                            <SliderHeading/>
                          </motion.div>
                        </>
                      )}
                }}
              </SwiperSlide>
            )
            )}
        </Swiper>
      </div>
    </>
  );
};