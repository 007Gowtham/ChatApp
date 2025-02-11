import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainScreen from './Components/MainTab/MainScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainScreen />
    </div>
  )
}

export default App
