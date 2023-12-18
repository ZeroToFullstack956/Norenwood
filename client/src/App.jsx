import { useState } from 'react'
import { VideoButton } from './components/landing';
import {HeroContent} from '../src/components/homeBanner/index.jsx' 
import { Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<HeroContent/>} />
          {/* create Service and booking routed in another route called protected routes */}
        {/* <Route path="/services" element={<ProtectedRoutes element={<Services />} />} /> */}
          {/* Appointments page Route */}
        {/* <Route path="/booking" element={<ProtectedRoutes element={<Appointments />} />} /> */}

          {/* Reviews page Route */}
          {/* <Route path="/reviews" element={<ProtectedRoutes element={<Reviews />} />} /> */}

          {/* Privacy Policy Route */}
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          {/* Terms of use Route */}
          {/* <Route path="/terms" element={<TermsAndConditions />} /> */}
      </>
      )
    )
  return (
    <>
    {/* <GoogleOAuthProvider clientId={`320440515782-44rgq2pmnk3j9in9t1f8g94jjom619vh.apps.googleusercontent.com`}> */}
    <RouterProvider router={router}/>
      
      {/* <VideoButton/> */}
      {/* <HeroContent/> */}
    {/* </GoogleOAuthProvider> */}
    </>
  )
}

export default App
