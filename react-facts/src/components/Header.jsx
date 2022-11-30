import React from 'react'

import viteLogo from '../../public/vite.svg'
import reactLogo from '../assets/react.svg'

export default function Header(){
    return(
      
        <nav className='nav'>
          <div>
             <img src={viteLogo} />
             <img src={reactLogo} />
          </div>
          <ui className = 'nav-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ui>
        </nav>
    )
  }