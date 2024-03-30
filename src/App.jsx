import { useState } from 'react'
import './App.css'

// components
import Navbar from './components/Navbar'

// functions
const darkTheme = () => {
  const body = document.querySelector('body')
  const navbar = document.querySelector('.navbar')
  const logo = document.querySelector('.navbar img')
  const buttonText = document.querySelector('.light-dark')
  buttonText.style.color = '#ffffff'
  logo.src = '/assets/techover-logo.png'
  navbar.style.color = '#ffffff'
  navbar.style.boxShadow = '0 0 10px 5px rgba(25, 25, 25, 0.5)'
  navbar.style.backgroundColor = 'rgba(43, 56, 68)'
  body.style.backgroundColor = 'rgb(32, 44, 54)'
}
const lightTheme = () => {
  const body = document.querySelector('body')
  const navbar = document.querySelector('.navbar')
  const logo = document.querySelector('.navbar img')
  const buttonText = document.querySelector('.light-dark')
  buttonText.style.color = '#000000'
  logo.src = '/assets/techover-logo-dark.png'
  navbar.style.boxShadow = '0 0 10px 5px rgba(91, 91, 91, 0.5)'
  navbar.style.color = '#000000'
  navbar.style.backgroundColor = '#ffffff'
  body.style.backgroundColor = '#ffffff'
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar darkTheme={darkTheme} lightTheme={lightTheme} />
        </>
    )
}

export default App
