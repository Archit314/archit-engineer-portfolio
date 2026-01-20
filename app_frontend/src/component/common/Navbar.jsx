import React from 'react'

function Navbar() {
  return (
    <div className='flex gap-100 justify-center text-green-300 bg-gray-800 p-5'>
        
        {/* Name section */}
        <div className='text-2xl'>
            <h1>~/archit-kumar</h1>
        </div>

        {/* Link section */}
        <div className=''>
            <ul className='flex gap-8'>
                <li>home</li>
                <li>about</li>
                <li>skills</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
