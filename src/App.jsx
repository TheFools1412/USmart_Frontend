import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Courses from './pages/Courses'
import CourseDetail from "./components/CourseDetail"
import Contact from './pages/Contact'
import News from './pages/News'
import NewDetail from "./components/NewDetail"
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/new" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:slug" element={<NewDetail />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
