import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../components/Card'
import { Cover } from "../components/Cover"
import { ImageResult } from "../components/ImageResult"
import Search from '../components/Search'
import { Gallery } from '../components/Gallery'
import SearchUnsplashed from '../components/SearchUnsplashed'
import { Images } from '../components/Images'
import { Slider } from '../components/Slider'

export const Home = () => {
    
  const [listImages, setListImages] =useState([])
  const [isLoading, setIsLoading] =useState(false);

  return (
    <>
    <Navbar/>
    {/* <Cover/> */}
    <Slider/>
    <Card/>
    <Gallery/>
    <Search setListImages={setListImages} setIsLoading={setIsLoading}/>
    <ImageResult listImages={listImages} isLoading={isLoading} />
    <SearchUnsplashed/>
    <Images/>
    </>
  )
}
