import { useState } from 'react'
import viteLogo from '../public/vite.svg'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return ( 
      <nav>
      <img src={viteLogo}/>
      <img src={reactLogo}/>
      <h1>fun facts about react</h1>
      <ul>
        <li>was first released in 2013</li>
        <li>was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by FaceBook</li>
      </ul>
      </nav>
  )
  
}

export default App
