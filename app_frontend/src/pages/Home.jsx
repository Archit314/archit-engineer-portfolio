import React from 'react'

function Home() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-900'>
        {/* Inside Main Card */}
        <div className='border-4 p-2 rounded-xl w-full max-w-xl'>

            {/* Header */}
            <div className='flex bg-gray-400'>

                {/* Colors */}
                <div className='flex gap-2'>
                    <div className='bg-red-500 rounded-full w-3 h-3'></div>
                    <div className='bg-yellow-500 rounded-full w-3 h-3'></div>
                    <div className='bg-green-500 rounded-full w-3 h-3'></div>
                </div>

                <h1>⚡welcome.sh</h1>

                <div className='bg-green-500 rounded-full w-3 h-3'></div>
                <h2>bash</h2>
            </div>

            {/* Body */}
            <div className='bg-gray-500'>
                <h1>archit@dev:~$ cat intro.txt</h1>
            </div>

            {/* Footer */}
            <div>
                Footer
            </div>
            
        </div>
    </div>
  )
}

export default Home
