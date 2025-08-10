import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar/Navbar.jsx";
import Side from './components/Side/Side.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Navbar />
      <Side />
      <Footer />
    </div>
  )
}

export default App;
