function Terminal({children, title, page, header}) {
   return (
    <div className='flex items-center justify-center min-h-screen px-4 shadow-2xl overflow-hidden mt-19 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900'>
        <div className="p-px rounded-xl bg-linear-to-r from-green-300 via-purple-500 to-pink-500">

            <div className='w-full max-w-5xl rounded-xl overflow-hidden'>

                {/* Card Header */}
                <div className='flex items-center justify-between bg-gray-900 p-3'>
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
                    <h1 className="p-4 text-green-300">archit<span className="text-gray-300">@</span><span className="text-purple-400">dev:</span><span className="text-sky-300">~{page}</span><span className="text-green-300">$</span><span className="text-gray-200">{header}</span></h1>
                    {children}
                    <h1 className="p-4 text-green-300">archit<span className="text-gray-300">@</span><span className="text-purple-400">dev:</span><span className="text-sky-300">~{page}</span><span className="text-green-300">$</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Terminal