import React from 'react'
import image1 from '../assets/space-water.png'
import image2 from '../assets/fantacy-city.png'
import image3 from '../assets/night-wild.png'

export const Gallery = () => {
  return (
    <div className="grid md:grid-cols-2 p-10 justify-center gap-5">
        <div className="grid grid-col-[10px_10px]">
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            {/* <img className="w-[50%]" src={image2}/>
            <img className="w-[50%]" src={image3}/> */}
        </div>
        <div>
            <img src={image1}/>
        </div>

    </div>
  )
}
