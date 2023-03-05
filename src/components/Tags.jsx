import React from 'react'

const Tags = () => {
  return (
    <div className="flex justify-between mb-10 md:px-[300px] text-white">
        <button className="ring-[0.5px] ring-[#19F9FF] ring-inset px-5 py-5 shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg">Realistic</button>
        <button  className="ring-[0.5px] ring-[#19F9FF] ring-inset px-5 py-5 shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg">3D Pixar</button>
        <button  className="ring-[0.5px] ring-[#19F9FF] ring-inset px-5 shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg">Stylistic</button>
        <button className="ring-[0.5px] ring-[#19F9FF] ring-inset px-5 shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg">Futuristic</button>
        <button className="ring-[0.5px] ring-[#19F9FF] ring-inset px-5 shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg">Clay model</button>
        <button className="ring-[0.5px] ring-[#19F9FF] ring-inset px-5 shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg">Neon Lights</button>
    </div>
  )
}

export default Tags