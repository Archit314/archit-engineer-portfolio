import Terminal from "../component/common/Terminal"

function Home() {
    return (
        <Terminal
            children={

                <div className='text-gray-300 bg-gray-800 p-4'>

                    {/* Intro section */}
                    <div className='pb-6 pt-6 space-y-6'>

                        <div className='border-l-4 border-indigo-500 px-6 space-y-6'>
                            <div className='text-4xl font-bold'>
                                <span>Hi, I'm</span>
                                <span className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"> Archit Kumar </span>
                                <span>👋</span>
                            </div>

                            <div className='text-xl'>

                                <p className="text-gray-400">Senior Software Engineer</p>
                                <p className="text-gray-500">Building the future, one commit at a time.</p>
                            </div>

                        </div>
                    </div>

                    {/* About section */}
                    <div className='pb-6 pt-6 space-y-6'>
                        <h1 className="text-green-300">archit<span className="text-gray-300">@</span><span className="text-purple-400">dev:</span><span className="text-sky-300">~</span><span className="text-green-300">$</span><span className="text-gray-200"> ./about-me.sh</span></h1>

                        <div className='border-l-4 border-indigo-500 px-6 space-y-6'>

                            <div className='text-xl'>

                                <p>I build <span className="text-green-300">scalable systems</span> and love <span className="text-purple-400">clean code.</span></p>
                                <p>3+ years crafting software that makes a <span className="text-cyan-400">difference.</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className='pb-6 pt-6'>
                        <h1 className="text-green-300">archit<span className="text-gray-300">@</span><span className="text-purple-400">dev:</span><span className="text-sky-300">~</span><span className="text-green-300">$</span><span className="text-gray-200"> ls stats/</span></h1>

                        <div className='grid grid-cols-3 gap-4 p-4'>
                            <div className='border-2 bg-gray-900 border-sky-400 text-center p-5 rounded-2xl'>
                                <h1 className='text-4xl font-bold'>3+</h1>
                                <p className="text-gray-500">Years Experience</p>
                            </div>
                            <div className='border-2 bg-gray-900 border-sky-400 text-center p-5 rounded-2xl'>
                                <h1 className='text-4xl font-bold'>2+</h1>
                                <p className="text-gray-500">Projects</p>
                            </div>
                            <div className='border-2 bg-gray-900 border-sky-400 text-center p-5 rounded-2xl'>
                                <h1 className='text-4xl font-bold'>2.3k</h1>
                                <p className="text-gray-500">Commits</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            title='⚡ welcome.sh'

            page=''

            header=' cat intro.txt'

            cursorText=''
        />
    )
}

export default Home
