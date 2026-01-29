import { useState } from 'react'
import Footer from './component/common/Footer'
import Navbar from './component/common/Navbar'
import Terminal from './component/common/Terminal'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'

function App() {

  const [currentPage, setCurrentPage] = useState('home')

  const loadPage = () => {

    if(currentPage === 'home') {
      return <Home/>
    }
    else if(currentPage === 'about'){
      return <About/>
    }
    else if(currentPage === 'skills'){
      return <Skills/>
    }
  }

  return (
    <div className='bg-[linear-gradient(135deg,#0f0f1a_0%,#1a1a2e_50%,#16213e_100%)] min-h-screen'>
      <Navbar setCurrentPage={setCurrentPage}/>
      <main>
        {loadPage()}
      </main>
      <Footer/>
    </div>
  )
}

export default App
