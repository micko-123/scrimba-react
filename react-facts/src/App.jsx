import { useState } from 'react'
import viteLogo from '../public/vite.svg'
import reactLogo from './assets/react.svg' 
import './style.css'

import MainContent from './components/MainContent'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  // const [count, setCount] = useState(0)

  return (            
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
  )  
}

export default App
