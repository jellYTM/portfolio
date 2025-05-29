import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './pages/Header.tsx'
import Home from './pages/Home.tsx'
import AboutMe from './pages/AboutMe.tsx'
import Skill from './pages/Skill.tsx'
import Products from './pages/Products.tsx'
import MyJellyfish from './pages/MyJellyfish.tsx'
import Research from './pages/Research.tsx'
import Footer from './pages/Footer.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Skill' element={<Skill />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/MyJellyfish' element={<MyJellyfish />} />
          <Route path='/Research' element={<Research />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
