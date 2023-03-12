import React, { useContext } from 'react'
import { ImageContext } from '../App';
import Skeleton from './Skeleton'
import Image from './Image';

export const Images = () => {
  const {response, isLoading}  =useContext(ImageContext);
  return (
    <>
    <div 
    className="grid px-[50px] mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto ">
      {isLoading ? 
      <Skeleton item={10} /> : response.map((data,key) => <Image key={key} data={data}/>)}
    </div>
    
    </>
  )
}
