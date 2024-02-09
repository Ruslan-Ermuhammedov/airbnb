import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='deteil/:id' element={<Detail/>} />
      </Routes>
    </>
  )
}

export default App
