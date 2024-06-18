import './App.css'
import { Homepage, Shop } from './pages';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
