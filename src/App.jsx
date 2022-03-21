import React from 'react'
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App