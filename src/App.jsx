import './App.css'
import { Homepage, Shop, RegisterLogin } from './pages';
import { Header } from './components'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<RegisterLogin />} />
      </Routes>
    </div>
  )
}

export default App
