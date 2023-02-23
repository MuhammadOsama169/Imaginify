import { useState } from 'react'
import { Cover } from './components/Cover'
import { ImageResult } from './components/ImageResult'
import { Navbar } from './components/Navbar'
import Search from './components/Search'

function App() {

  const [listImages, setListImages] =useState([])
  const [isLoading, setIsLoading] =useState(false);

  return (
    <>
    <Navbar />
    <Cover/>
    <Search setListImages={setListImages} setIsLoading={setIsLoading}/>
    <ImageResult listImages={listImages} isLoading={isLoading} />
    </>
  )
}

export default App
