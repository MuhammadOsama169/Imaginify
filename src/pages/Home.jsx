import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../components/Card'
import { Cover } from "../components/Cover"
import { ImageResult } from "../components/ImageResult"
import Search from '../components/Search'

export const Home = () => {
    
  const [listImages, setListImages] =useState([])
  const [isLoading, setIsLoading] =useState(false);

  return (
    <>
    <Navbar/>
    <Cover/>
    <Card/>
    <Search setListImages={setListImages} setIsLoading={setIsLoading}/>
    <ImageResult listImages={listImages} isLoading={isLoading} />
    </>
  )
}
