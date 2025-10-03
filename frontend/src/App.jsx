import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage  from './Pages/HomePage.jsx'
import  CreatePage  from './Pages/CreatePage.jsx'  // if we use  export default we dont put {} while importing
import NoteDetailPage  from './Pages/NoteDetailPage.jsx'
import toast from 'react-hot-toast' // for toast notifications

const App = () => {
  return (
    <div data-theme='dark' >
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} /> 
        <Route path='/note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
