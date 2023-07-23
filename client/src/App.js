import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ProtectedRoute, LoginSignupProtectedRoute } from './utils/ProtectedRoutes'
import ReduxDemo from './ReduxDemo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/login" element = {<LoginSignupProtectedRoute component = {Login}/>}/>
          <Route path = "/signup" element = {<LoginSignupProtectedRoute component = {Signup}/>}/>
          <Route path = "/" element = {<ProtectedRoute component = {Home}/>}/>

          {/* ********** Redux Demo ******************* */}
          <Route path = "/test" element = {<ReduxDemo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
