import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Protected from './components/Protected'
import { Home, Profile, About, Login } from './pages/'
const App = () => {

  return (
    <div>
      <Routes>
        <Route element={<Protected />}>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App