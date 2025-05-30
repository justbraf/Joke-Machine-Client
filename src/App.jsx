import { Route, Routes } from 'react-router'
import GetAllJokes from './components/GetAllJokes'
import Home from './components/Home'
import GetJoke from './components/GetJoke'
import NotFound from './components/NotFound'
import AddJoke from './components/AddJoke'
import ConfirmDelete from './components/ConfirmDelete'
import EditJoke from './components/EditJoke'


function App() {
  return (
    <>
      <div className="w-7/8 mx-auto mt-2">
        {/* This header will appear on all pages because it is outside the routes */}
        <p className='text-5xl'>The Joke Machine</p>
        {/* Each route is defined with a path and a corresponding component to display */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<GetAllJokes />} />
          <Route path="/joke/new" element={<AddJoke />} />
          {/* The colon operator allows the following text to act as a parameter read from the URL */}
          <Route path="/joke/:jid" element={<GetJoke />} />
          <Route path="/edit/:jid" element={<EditJoke />} />
          <Route path="/remove/:jid" element={<ConfirmDelete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
