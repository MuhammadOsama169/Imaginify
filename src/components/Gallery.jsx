import React from 'react'
import image1 from '../assets/space-water.png'
import image2 from '../assets/night-wild.png'
import image3 from '../assets/girl-riding-cat.png'
import image4 from '../assets/mexican-face-girl.jfif'


export const Gallery = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 justify-center px-[50px] md:px-0">

      <div className="md:w-[500px] flex  md:p-0">
        <img className="rounded-xl sm:w-[500px] mx-auto mb-[50px] md:h-full" src={image1}/>
      </div>

      <div className=" md:w-[400px] flex  md:p-0">

        <div className="flex flex-col md:w-[600px]  mx-auto">

          <div className="flex flex-col md:flex-row md:gap-5 justify-between md:mb-5 gap-[50px] mb-[50px]">
            <img className="md:w-[200px] md:h-[200px] sm:w-[500px] mx-auto rounded-xl" src={image4}/>
            <img className="md:w-[180px] md:h-[200px] sm:w-[500px] mx-auto rounded-xl" src={image3}/>
          </div>
          
          <img className="rounded-xl md:w-[800px] sm:w-[500px] mx-auto" src={image2}/>

        </div>
      </div>

    </div>
  )
}
