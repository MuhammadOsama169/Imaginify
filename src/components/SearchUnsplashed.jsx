import axios from 'axios';
import React, { useState } from 'react';

const SearchUnsplashed = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [result, setResult] = useState([]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    const url = `https://api.unsplash.com/search/photos?page=5&per_page=30&query=${searchValue}&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`;
    setSearch(false);
    axios.get(url).then((response) => {
      setResult(response.data.results);
    });
  };

  const handleEnterButton = (e) => {
    if (e.key === 'Enter') {
      const url = `https://api.unsplash.com/search/photos?page=5&per_page=30&query=${searchValue}&client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }`;
      setSearch(false);
      axios.get(url).then((response) => {
        setResult(response.data.results);
      });
    }
  };

  return (
    <>
      <h1 className="font-opensans md:text-[35px] text-[30px] text-white text-center mb-10">
        {' '}
        Search For High quality Images From{' '}
        <span className="font-opensans text-[35px] text-[#19F9FF]">
          Our Collection
        </span>
      </h1>
      <div className="flex flex-row justify-center">
        <input
          className="flex  rounded-l-lg indent-2 py-4 rounded-sm placeholder-gray-500 md:w-[800px] px-3 pl-8 outline-none focus:shadow-outline"
          placeholder="Find HD Images Here"
          type="search"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterButton}
        />
        <button
          onClick={handleButtonSearch}
          disabled={!searchValue}
          className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 max-w-7xl mx-auto">
        {result.map((photo) => (
          <div key={photo.id}>
            <a
              href={photo.urls.small}
              target="_blank"
              rel="noreferrer"
              className="relative"
            >
              <img
                className="w-full h-full max-h-[500px] object-cover"
                src={photo.urls.small}
              />
              {/* Download icon */}
              <div className="absolute flex justify-center items-center bottom-0 left-0 right-0 bg-black h-full bg-opacity-50 text-white p-2 text-center opacity-0 hover:opacity-100 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchUnsplashed;
