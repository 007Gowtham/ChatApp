import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainScreen from './Components/MainTab/MainScreen'
import SignIn from './Components/IntroTab/SignIn'
import SignUp from './Components/IntroTab/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <SignUp />
    </div>
  )
}

export default App
