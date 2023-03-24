import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../store/photoSlice';
import { STATUSES } from '../../store/photoSlice';


export const Images = ({isSearching}) => {
  const dispatch = useDispatch();
  const { data: photos, status } = useSelector((state) => state.photo);

  useEffect(() => {
    dispatch(fetchPhotos());
}, []);

if (status === STATUSES.LOADING) {
  return <h2>Loading....</h2>;
}

if (status === STATUSES.ERROR) {
  return <h2>Something went wrong!</h2>;
}

  return (
    <>
    {isSearching && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 max-w-7xl mx-auto">
      {photos.map((photo) => (
        <div key={photo.id}>
          <a href={photo.urls.regular} target="_blank" rel="noreferrer" className="relative">
            <img className='w-full h-full max-h-[500px] object-cover' src={photo.urls.regular} alt={photo.user.username} />
            {/* Download icon */}
            <div className="absolute flex justify-center items-center bottom-0 left-0 right-0 bg-black h-full bg-opacity-50 text-white p-2 text-center opacity-0 hover:opacity-100 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </div>
          </a>
        </div>
      ))}
    </div>
    )}
    </>
  )
}
