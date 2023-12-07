import { useState } from 'react'
import { LandingIndex } from './components/landing';
import { ChakraProvider } from '@chakra-ui/react';
import {HeroContent} from '../src/components/homeBanner/index.jsx'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>

    <>
      {/* <LandingIndex/> */}
      <HeroContent/>

    </>

    </ChakraProvider>
  )
}

export default App
