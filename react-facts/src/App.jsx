import { useState } from 'react'
import viteLogo from '../public/vite.svg'
import reactLogo from './assets/react.svg' 


function Header(){
  return(
    
      <nav className='nav'>
        <img src={viteLogo} />
        <img src={reactLogo} />
        
        <ui className = 'nav-list'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ui>
      </nav>
  )
}

function MainContent(){

  return(
  <div>
    <h1>fun facts about react</h1>
     <ul>
         <li>was first released in 2013</li>
         <li>was originally created by Jordan Walke</li>
         <li>Has well over 100K stars on GitHub</li>
         <li>Is maintained by FaceBook</li>
     </ul>
  </div>
  )
}

function Footer(){
  return(
    <footer>
    <small>2022 Mickyas, all rights reserved ! </small>
   </footer>
  )
}
function MyReasons() {
  return(
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return ( 
            
      <MyReasons />
  
  )
  
}

export default App
