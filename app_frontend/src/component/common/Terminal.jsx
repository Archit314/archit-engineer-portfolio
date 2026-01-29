function Terminal({children, title}) {
   return (
    <div className='flex items-center justify-center min-h-screen px-4 shadow-2xl overflow-hidden mt-19'>
        <div className='border-2 border-sky-500 w-full max-w-5xl rounded-xl overflow-hidden'>

            {/* Card Header */}
            <div className='flex items-center justify-between bg-gray-900/80 p-3'>
                <div className='flex gap-2 items-center'>
                    <div className='bg-red-500 rounded-full w-3 h-3'></div>
                    <div className='bg-yellow-500 rounded-full w-3 h-3'></div>
                    <div className='bg-green-500 rounded-full w-3 h-3'></div>
                    <div className='text-gray-300'>{title}</div>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='bg-green-500 rounded-full w-3 h-3'></div>
                    <h1 className='text-gray-300'>bash</h1>
                </div>
            </div>

            {/* Card Body */}
            <div className='text-gray-300 bg-gray-800 p-4'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Terminal