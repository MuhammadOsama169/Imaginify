import React from 'react';
import image1 from '../assets/deadman-reading.png';
import image2 from '../assets/futureistic-city.jfif';
import image3 from '../assets/magic.png';

export const Card = () => {
  return (
    <div className="my-10 font-opensans text-[#F7FDFF] break-words ">
      <h1 className="text-center text-4xl  md:mb-[100px] mb-10">
        Transforming your vision into reality.
      </h1>
      <div className="flex flex-col m-50 md:grid justify-center md:gap-x-[100px] md:grid-cols-[300px_300px_300px] mb-[100px] ">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-[50px] md:p-4 ">
          <img
            className="h-[400px] sm:w-[500px] mx-auto md:w-auto"
            src={image1}
          />
          <h3 className=" text-xl font-bold text-center pt-5">
            {' '}
            Generative Capabilities{' '}
          </h3>
          <p className="pt-3 font-light text-center">
            {' '}
            Generate new images based on a given set of parameters or input.{' '}
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-[50px] md:p-4">
          <img
            className="h-[400px] sm:w-[500px] mx-auto md:w-auto"
            src={image2}
          />
          <h3 className=" text-xl font-bold text-center pt-5">
            {' '}
            Customisation Options{' '}
          </h3>
          <p className="pt-3 font-light text-center">
            {' '}
            We help you customize the geneated images by adjusting various
            parameters.{' '}
          </p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-[50px] md:p-4">
          <img
            className="h-[400px] sm:w-[500px] mx-auto md:w-auto"
            src={image3}
          />
          <h3 className=" text-xl font-bold text-center pt-5">
            {' '}
            Input Compabilities{' '}
          </h3>
          <p className=" text-center pt-3 font-light ">
            {' '}
            You'll be able to work with a wide range of inputs, including text,
            sketches, etc.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
