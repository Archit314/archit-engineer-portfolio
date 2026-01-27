import React from 'react'

function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen px-4 shadow-2xl overflow-hidden mt-19'>
        <div className='border-2 border-sky-500 w-full max-w-5xl rounded-xl overflow-hidden'>

            {/* Card Header */}
            <div className='flex items-center justify-between bg-gray-900/80 p-3'>
                <div className='flex gap-2 items-center'>
                    <div className='bg-red-500 rounded-full w-3 h-3'></div>
                    <div className='bg-yellow-500 rounded-full w-3 h-3'></div>
                    <div className='bg-green-500 rounded-full w-3 h-3'></div>
                    <div className='text-gray-300'>⚡ welcome.sh</div>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='bg-green-500 rounded-full w-3 h-3'></div>
                    <h1 className='text-gray-300'>bash</h1>
                </div>
            </div>

            {/* Card Body */}
            <div className='text-gray-300 bg-gray-800 p-4'>

                {/* Intro section */}
                <div className='pb-6 pt-6 space-y-6'>

                    <h1>archit@dev:~$ cat intro.txt</h1>

                    <div className='border-l-4 border-indigo-500 px-6 space-y-6'>
                        <h1 className='text-4xl font-bold'>Hi, I'm Archit Kumar 👋</h1>

                        <div className='text-xl'>

                            <p>Senior Software Engineer</p>
                            <p>Building the future, one commit at a time.</p>
                        </div>
                        
                    </div>
                </div>

                {/* About section */}
                <div className='pb-6 pt-6 space-y-6'>

                    <h1>archit@dev:~$ ./about-me.sh</h1>

                    <div className='border-l-4 border-indigo-500 px-6 space-y-6'>

                        <div className='text-xl'>

                            <p>I build scalable systems and love clean code.</p>
                            <p>3+ years crafting software that makes a difference</p>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className='pb-6 pt-6'>

                    <h1>archit@dev:~$ ls stats/</h1>

                    <div className='grid grid-cols-3 gap-4 p-4'>
                        <div className='border-2 border-sky-400 text-center p-5 rounded-2xl'>
                            <h1 className='text-4xl'>3+</h1>
                            <p>Years Experience</p>
                        </div>
                        <div className='border-2 border-sky-400 text-center p-5 rounded-2xl'>
                            <h1 className='text-4xl'>2+</h1>
                            <p>Projects</p>
                        </div>
                        <div className='border-2 border-sky-400 text-center p-5 rounded-2xl'>
                            <h1 className='text-4xl'>2.3k</h1>
                            <p>Commits</p>
                        </div>
                    </div>
                </div>

                {/* cursor section */}
                <div className='pb-6 pt-6 space-y-6'>

                    <h1>archit@dev:~$ </h1>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home
