import React from 'react'
import NavbarArea from './Components/NavbarArea';
import { Dashboard } from './Components/Dashboard';
import { Incidents } from './Components/Incidents';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Started } from './Components/Started';
import { Describes } from './Components/Describes';
import { Step4 } from './Components/Step4';
import { Step5 } from './Components/Step5';
import { Locations } from './Components/Locations';

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='' element={<NavbarArea />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/incidents' element={<Incidents />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/started' element={<Started />} />
      <Route path='/describes' element={<Describes />} />
      <Route path='/step4' element={<Step4 />} />
      <Route path='/step5' element={<Step5 />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;