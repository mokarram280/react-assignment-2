import React from 'react'
import NavbarArea from './Components/NavbarArea';
import { Dashboard } from './Components/Dashboard';
import { Incidents } from './Components/Incidents';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Started } from './Components/Started';

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='' element={<NavbarArea />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/incidents' element={<Incidents />} />
      <Route path='/started' element={<Started />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;