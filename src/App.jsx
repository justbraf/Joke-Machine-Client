import { Route, Routes } from 'react-router'
import GetAllJokes from './components/GetAllJokes'
import Home from './components/Home'
import GetJoke from './components/GetJoke'


function App() {
  return (
    <>
    {/* This header will appear on all pages because it is outside the routes */}
      <p className='text-5xl'>The Joke Machine</p>
      {/* Each route is defined with a path and a corresponding component to display */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jokes" element={<GetAllJokes />} />
        {/* The colon operator allows the following text to act as a parameter read from the URL */}
        <Route path="/joke/:jid" element={<GetJoke />} />
      </Routes>
    </>
  )
}

export default App
