import React from 'react'
import background1 from '../assets/dark-women.png'

export const Cover = () => {


  return (
    <>
      <img className="h-[70vh] md:h-full w-full relative" src={background1}></img>
      <div className="absolute top-[50%] left-[10%]">
        <h1 className="text-2xl md:text-4xl font-bold  text-white">UNLOCK YOUR</h1>
        <h1 className="text-3xl md:text-6xl font-bold  text-redhot">IMAGINATION</h1>
        <h1 className="text-s  text-white">Get involved with the comminity filled with boundless creativity</h1>
      </div>
    </>


  )
}
