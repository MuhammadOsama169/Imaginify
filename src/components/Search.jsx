import React, { useState, useRef } from 'react';

const Search = ({ setListImages, setIsLoading }) => {
  const [InputValue, setInputValue] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/openai/images', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: InputValue,
        }),
      });

      const jsonData = await response.json();
      setListImages(jsonData.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputRef = useRef(null);
  function handleClickRealistic() {
    inputRef.current.value = 'Realistic';
  }
  function handleClick3D() {
    inputRef.current.value = '3D Pixar';
  }
  function handleClickStylistic() {
    inputRef.current.value = 'Stylistic';
  }
  function handleClickFuturistic() {
    inputRef.current.value = 'Futuristic';
  }
  function handleClickClay() {
    inputRef.current.value = 'Clay model';
  }
  function handleClickNeon() {
    inputRef.current.value = 'Neon Lights';
  }

  return (
    <div className="flex flex-col justify-center mt-10">
      <h1 className="font-opensans text-[35px] text-white text-center">
        Give It A{' '}
        <span className="font-opensans text-[35px] text-[#19F9FF]">Go</span>
      </h1>
      <form className=" my-8 max-full" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center ">
          <input
            value={InputValue}
            onChange={handleInputChange}
            ref={inputRef}
            type="text"
            id="message"
            placeholder="⚠️ Unfortunately DALL-E image generation is currently experiencing issues ⚠️"
            className="flex flex-col rounded-l-lg indent-2 py-4 rounded-sm placeholder-gray-500 md:w-[800px] px-3 pl-8 outline-none focus:shadow-outline "
          />

          <button
            type="submit"
            className=" bg-[#19F9FF] bottom-2.5 right-2.5 text-black px-2 py-2 rounded-r-lg text-md"
          >
            Generate
          </button>
        </div>
      </form>
      <div className="flex flex-wrap mx-auto justify-between gap-5 mb-10 md:px-[300px] text-white mt-10">
        <button
          onClick={handleClickRealistic}
          className="w-[100px] mx-auto mb-5 p-2 md:w-auto ring-[0.5px] ring-[#19F9FF] ring-inset md:px-5  shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg"
        >
          Realistic
        </button>
        <button
          onClick={handleClick3D}
          className="w-[100px] mx-auto mb-5 p-2 ring-[0.5px] ring-[#19F9FF] ring-inset md:px-5  shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg"
        >
          3D Pixar
        </button>
        <button
          onClick={handleClickStylistic}
          className="w-[100px] mx-auto mb-5 p-2 ring-[0.5px] ring-[#19F9FF] ring-inset md:px-5  shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg"
        >
          Stylistic
        </button>
        <button
          onClick={handleClickFuturistic}
          className="w-[100px] mx-auto mb-5 p-2 ring-[0.5px] ring-[#19F9FF] ring-inset md:px-5  shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg"
        >
          Futuristic
        </button>
        <button
          onClick={handleClickClay}
          className="w-[100px] mx-auto mb-5 p-2 ring-[0.5px] ring-[#19F9FF] ring-inset md:px-5  shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg"
        >
          Clay model
        </button>
        <button
          onClick={handleClickNeon}
          className="w-[100px] mx-auto mb-5 p-2 ring-[0.5px] ring-[#19F9FF] ring-inset md:px-5 md:py-5 shadow-[0_0_60px_-20px_rgb(25_249_255)] rounded-lg"
        >
          Neon Lights
        </button>
      </div>
    </div>
  );
};

export default Search;
