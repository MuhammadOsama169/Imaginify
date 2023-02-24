import React, { useContext, useState } from 'react'
import { ImageContext } from '../App';

const SearchUnsplashed = () => {
    const [searchValue, setSearchValue] = useState("");
    const {fetchData} = useContext(ImageContext);

    const handleInputChange = (e) =>{
      setSearchValue(e.target.value)
    }
    const handleButtonSearch = () => {
      fetchData(`search/photos?per_page=12page=1&query=${searchValue}&client_id=Ej-5imFi2CYQ2OZdICwC5ySbN1v7BLCrOy7H6gg8UD4`)
      setSearchValue("")
    }
    const handleEnterButton = e => {
      if(e.key === 'Enter'){
        fetchData(`search/photos?per_page=12page=1&query=${searchValue}&client_id=Ej-5imFi2CYQ2OZdICwC5ySbN1v7BLCrOy7H6gg8UD4`)
        setSearchValue("")
      }
    }

  return (
    <>
    <input 
    className=""
    placeholder='Find HD images here'
    type="search"
    value={searchValue}
    onChange={handleInputChange}
    onKeyDown={handleEnterButton}
    />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >Search
      </button>
    </>
  )
}

export default SearchUnsplashed