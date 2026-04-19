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
import { Analytics } from '@vercel/analytics/react'

import { useState } from 'react'

function App() {
  const [lang, setLang] = useState<'ja' | 'en'>('ja');

  return (
    <>
      <BrowserRouter>
        <div className='content'>
          <Header lang={lang} setLang={setLang} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe lang={lang} />} />
            <Route path='/Skill' element={<Skill lang={lang} />} />
            <Route path='/Products' element={<Products lang={lang} />} />
            <Route path='/MyJellyfish' element={<MyJellyfish lang={lang} />} />
            <Route path='/Research' element={<Research lang={lang} />} />
          </Routes>
        </div>
        <Footer lang={lang}/>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
