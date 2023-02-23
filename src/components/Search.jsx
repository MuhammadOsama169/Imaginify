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
    <form className="relative my-8 max-w-md" onSubmit={handleSubmit}>
        <input value={InputValue} onChange={handleInputChange} className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50 w-full md:max-w-md focus:ring-primary outline-none focus:ring-1" type="text" placeholder="Unleash the power of AI to create" />
        <button type="submit" className="absolute bg-red-600 bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded-sm text-sm">
            Generate
        </button>
        
    </form>
  )
}

export default Search