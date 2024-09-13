import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './authentication/Login'
import Signup from './authentication/Signup'
import AddToDo from './pages/AddToDo';
import Edit from './pages/Edit';

function App() {

  return (
    
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addtodo' element={<AddToDo />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
