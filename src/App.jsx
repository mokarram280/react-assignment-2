import React from 'react'
import NavbarArea from './Components/NavbarArea';
import { Header } from './Components/Header';
import { Dashboard } from './Components/Dashboard';

const App = () => {
  return (
    <main>
      <NavbarArea />
      <Header />
      <Dashboard />
    </main>
  )
}

export default App;