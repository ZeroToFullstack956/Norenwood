import { useState } from 'react'
import { LandingIndex } from './components/home';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>

    <>

      <LandingIndex/>

    </>

    </ChakraProvider>
  )
}

export default App
