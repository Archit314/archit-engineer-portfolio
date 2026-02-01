function Terminal({children, title, page, header}) {
   return (
    <div className="w-full py-10">
        <div className="w-full p-px rounded-xl bg-linear-to-r from-green-300 via-purple-500 to-pink-500">
            <div className="w-full rounded-xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between bg-gray-900 p-3">
                    <div className="flex gap-2 items-center">
                    <div className="bg-red-500 w-3 h-3 rounded-full" />
                    <div className="bg-yellow-500 w-3 h-3 rounded-full" />
                    <div className="bg-green-500 w-3 h-3 rounded-full" />
                    <span className="text-gray-300">{title}</span>
                    </div>
                    <span className="text-gray-300">bash</span>
                </div>

                {/* Body */}
                <div className="bg-gray-800 text-gray-300 p-6">
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