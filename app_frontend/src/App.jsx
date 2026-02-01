import { useState } from 'react'
import Footer from './component/common/Footer'
import Navbar from './component/common/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

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
    else if(currentPage === 'projects'){
      return <Projects/>
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(135deg,#0f0f1a_0%,#1a1a2e_50%,#16213e_100%)]">
      <Navbar setCurrentPage={setCurrentPage}/>

      <main className="flex-1">
        <div className="w-full max-w-5xl mx-auto px-4">
          {loadPage()}
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
