import React from 'react'

const Image = ({data}) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer" className="relative">
      <img className="h-72 w-full object-cover rounded-lg shadow-md hover:opacity-60" src={data.urls.small} alt={data.alt_description} />
      <div className="absolute flex justify-center items-center bottom-0 left-0 right-0 bg-black h-full bg-opacity-50 text-white p-2 text-center opacity-0 hover:opacity-100 transition duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      </div>
    </a>

  )
}

export default Image