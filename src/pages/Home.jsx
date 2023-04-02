import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Card } from '../components/Card';
import { ImageResult } from '../components/ImageResult';
import Search from '../components/Search';
import { Gallery } from '../components/Gallery';
import SearchUnsplashed from '../components/SearchUnsplashed';
import { Images } from '../components/Images';
import { Slider } from '../components/Slider';

export const Home = () => {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setSearch] = useState(true);

  return (
    <>
      <Navbar />
      <Slider />
      <Card />
      <Gallery />
      <Search setListImages={setListImages} setIsLoading={setIsLoading} />
      <ImageResult listImages={listImages} isLoading={isLoading} />
      <SearchUnsplashed setSearch={setSearch} />
      <Images isSearching={isSearching} />
    </>
  );
};
