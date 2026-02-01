function Navbar({setCurrentPage}) {
    const navLink =
    "relative text-gray-300 transition-colors duration-300 hover:text-green-300 \
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 \
    after:h-[2px] after:w-full after:bg-green-400 \
    after:transform after:-translate-x-1/2 after:scale-x-0 \
    after:transition-transform after:duration-300 \
    hover:after:scale-x-100";


  return (
    <div className='flex gap-100 justify-center bg-gray-900/70 p-5'>
        
        {/* Name section */}
        <div className='text-2xl'>
            <div>
                <span className="text-green-300">~/</span>
                <span className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">archit-kumar</span>
            </div>
        </div>

        {/* Link section */}
        <div className=''>
            <ul className='flex gap-8'>
                <button className={navLink} onClick={() => setCurrentPage('home')}>home</button>
                <button className={navLink} onClick={() => setCurrentPage('about')}>about</button>
                <button className={navLink} onClick={() => setCurrentPage('skills')}>skills</button>
                <button className={navLink} onClick={() => setCurrentPage('projects')}>projects</button>
                <button className={navLink}>contact</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
