import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { HdImages } from './pages/HdImages'
import useAxios from './hooks/useAxios'
import { createContext } from 'react'

//Creae Context
export const ImageContext = createContext();

function App() {

const {response, isLoading, error, fetchData} = useAxios(`search/photos?per_page=12page=1&query=random&client_id=Ej-5imFi2CYQ2OZdICwC5ySbN1v7BLCrOy7H6gg8UD4`)

const value = {
  response,
  isLoading,
  error,
  fetchData
}

return (
    <ImageContext.Provider value={value}>
      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/collection" element={<HdImages/>}></Route>
          </Routes>
      </Router>
    </ImageContext.Provider>
  )
}
export default App
