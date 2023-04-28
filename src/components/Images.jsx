import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../store/photoSlice';
import { STATUSES } from '../../store/photoSlice';

export const Images = ({ isSearching }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data: photos, status } = useSelector((state) => state?.photo);
  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const handlePage = (selectedPage) => {
    const maxPage = Math.ceil(photos.length / 12);
    setPage(
      selectedPage < 1 ? 1 : selectedPage > maxPage ? maxPage : selectedPage
    );
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      {isSearching && (
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 max-w-7xl mx-auto p-5 md:p-0">
            {photos.slice(page * 12 - 12, page * 12).map((photo) => (
              <div key={photo?.id}>
                <a
                  href={photo.urls.regular}
                  target="_blank"
                  rel="noreferrer"
                  className="relative"
                >
                  <img
                    className="w-full h-full max-h-[500px] object-cover"
                    src={photo.urls.regular}
                    alt={photo.user.username}
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
          <div className="flex ">
            <div className="flex items-center justify-center my-10 text-center m-auto gap-5 px-2 py-2 rounded-l-md  text-sm font-medium">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                aria-hidden="true"
                onClick={() => handlePage(page - 1)}
              >
                <path
                  fillRule="evenodd"
                  d="M10.707 5.293a1 1 0 010 1.414L7.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              {[...Array(photos?.length / 10)].map((_, i) => {
                return (
                  <a
                    className={`items-center px-4 py-2 border bg-white text-sm font-medium ${
                      page === i + 1
                        ? 'text-blue-600 bg-blue-100'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    key={i}
                    onClick={() => handlePage(i + 1)}
                  >
                    {i + 1}
                  </a>
                );
              })}
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                aria-hidden="true"
                onClick={() => handlePage(page + 1)}
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 14.707a1 1 0 010-1.414L12.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
