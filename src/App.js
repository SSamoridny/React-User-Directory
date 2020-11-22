import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContainer from './components/Main'
import './components/App.css'

function App() {
  

  return (
    <div className="body">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;