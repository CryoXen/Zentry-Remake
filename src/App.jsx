// import React from 'react'
import About from "./components/About"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Features from "./components/Features"
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
        <NavBar />
        <Hero />
        <About />
        <Features />
    </main>
  )
}


export default App