import { useState } from 'react'
import { Cover } from "../components/Cover"
import { ImageResult } from "../components/ImageResult"
import Search from '../components/Search'

export const Home = () => {
    
  const [listImages, setListImages] =useState([])
  const [isLoading, setIsLoading] =useState(false);

  return (
    <>
        <Cover/>
        <Search setListImages={setListImages} setIsLoading={setIsLoading}/>
        <ImageResult listImages={listImages} isLoading={isLoading} />
    </>
  )
}
