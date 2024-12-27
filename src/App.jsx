// import React from 'react'
import About from "./components/About"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import History from "./components/History"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <History />
        <Contact />
        <Footer />
    </main>
  )
}


export default App