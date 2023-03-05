import React from 'react'
import image1 from '../assets/space-water.png'
import image2 from '../assets/night-wild.png'
import image3 from '../assets/girl-riding-cat.png'
import image4 from '../assets/mexican-face-girl.jfif'
import image5 from '../assets/fantacy-city.png'


export const Gallery = () => {
  return (
    <div className="flex flex-row gap-5 justify-center">

      <div className="w-[600px] flex">
        <img className="rounded-xl" src={image1}/>
      </div>

      <div className="w-[400px] flex">

        <div className="flex flex-col w-[600px]">

          <div className="flex flex-row gap-5 justify-between mb-5">
            <img className="w-[200px] h-[200px] rounded-xl" src={image4}/>
            <img className="w-[180px] h-[200px] rounded-xl" src={image3}/>
          </div>
          
          <img className="rounded-xl" src={image2}/>

        </div>
      </div>

    </div>
  )
}
