import React, { useState } from 'react'

const Search = ({setListImages,setIsLoading}) => {

  const [InputValue,setInputValue] = useState([])

  const handleInputChange =(e) =>{
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      setIsLoading (true);
      const response = await fetch("http://localhost:5500/openai/images" , {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          prompt: InputValue
        })
      })

      const jsonData =await response.json();
      setListImages(jsonData.data)

    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center mt-10">
    <h1 className="font-opensans text-[35px] text-white text-center">Give It A <span className="font-opensans text-[35px] text-[#19F9FF]">Go</span></h1>
      <form className=" my-8 max-full" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center ">
          <input value={InputValue}
          onChange={handleInputChange}
          type="text" 
          placeholder="Two Monkeys sitting in first class on a plane, wearing sunglasses and sipping on cocktails. 3D Realistic" 
          className="flex flex-col rounded-l-lg indent-2 py-4 rounded-sm placeholder-gray-500 md:w-[800px] px-3 pl-8 outline-none focus:shadow-outline " />

          <button type="submit" className=" bg-[#19F9FF] bottom-2.5 right-2.5 text-black px-2 py-2 rounded-r-lg text-md">
              Generate
          </button>
      </div>
    </form>
    </div>

  )
}

export default Search