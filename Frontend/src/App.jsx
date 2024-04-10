import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './customComponents/Button'
import Text from './customComponents/Text';
import Routing from './routing/Routing';
import { valContext } from './context/context';

function App() {

  const [data,setData] = useState()

  return (
    <>
      <valContext.Provider value={{data,setData}}>
        <Routing />
      </valContext.Provider>
    </>
  );
}

export default App
