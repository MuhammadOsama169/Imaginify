import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import useAxios from './hooks/useAxios'
import { createContext } from 'react'

export const ImageContext = createContext();

function App() {

const {response, isLoading, error, fetchData} = useAxios(`search/photos?per_page=12page=1&query=random&client_id=${import.meta.env.VITE_ACCESS_KEY}`)

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
          </Routes>
      </Router>
    </ImageContext.Provider>
  )
}
export default App
