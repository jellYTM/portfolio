import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header.tsx'
import Home from './Home.tsx'
import AboutMe from './AboutMe.tsx'
import Skill from './Skill.tsx'
import Products from './Products.tsx'
import MyJellyfish from './MyJellyfish.tsx'
import Research from './Research.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Skill' element={<Skill />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/MyJellyfish' element={<MyJellyfish />} />
          <Route path='/Research' element={<Research />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
