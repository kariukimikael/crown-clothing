import './App.css'
import { Homepage } from './pages';
import { Routes, Route } from 'react-router-dom'

const HatsPage = () => {
  return ( 
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  )
}

export default App
