function Navbar({setCurrentPage}) {
  return (
    <div className='flex gap-100 justify-center text-green-300 bg-gray-800 p-5'>
        
        {/* Name section */}
        <div className='text-2xl'>
            <h1>~/archit-kumar</h1>
        </div>

        {/* Link section */}
        <div className=''>
            <ul className='flex gap-8'>
                <button onClick={() => setCurrentPage('home')}>home</button>
                <button onClick={() => setCurrentPage('about')}>about</button>
                <button onClick={() => setCurrentPage('skills')}>skills</button>
                <li>projects</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
