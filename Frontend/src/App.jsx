import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './customComponents/Button'

function App() {

  const handleClick = () => {
    console.log("hello world")
  }

  return (
    <>
      <Button>Click Here</Button>
    </>
  );
}

export default App
