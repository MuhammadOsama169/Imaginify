import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../components/Card'
import { ImageResult } from "../components/ImageResult"
import Search from '../components/Search'
import { Gallery } from '../components/Gallery'
import SearchUnsplashed from '../components/SearchUnsplashed'
import { Images } from '../components/Images'
import { Slider } from '../components/Slider'
import BasicModal from '../components/BasicModal'

export const Home = ({userGoogle}) => {
    
  const [listImages, setListImages] =useState([])
  const [isLoading, setIsLoading] =useState(false);

  return (
    <>
    <Navbar userGoogle={userGoogle}/>
    <Slider/>
    <Card/>
    <Gallery/>
    <Search setListImages={setListImages} setIsLoading={setIsLoading}/>
    <BasicModal/>
    <ImageResult listImages={listImages} isLoading={isLoading} />
    <SearchUnsplashed/>
    <Images/>
    </>
  )
}
