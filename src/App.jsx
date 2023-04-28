import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignInPage } from './components/SignInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}
export default App;
