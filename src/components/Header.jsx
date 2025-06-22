import React from 'react'
import trollFace from '../assets/react.svg'
const Header = () => {
  return (
     <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
  )
}

export default Header