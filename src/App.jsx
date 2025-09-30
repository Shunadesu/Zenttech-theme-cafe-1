import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import VisitPage from './pages/VisitPage'
import StoryPage from './pages/StoryPage'
import TastePage from './pages/TastePage'

function HomePage() {
  return (
    <>
      <Hero />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <Menu />
        <About />
        <Gallery />
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/taste" element={<TastePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
