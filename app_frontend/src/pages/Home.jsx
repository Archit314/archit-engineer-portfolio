import Terminal from "../component/common/Terminal"

function Home() {
    return (
        <Terminal
            children={

                <div className='text-gray-300 bg-gray-800 p-4'>

                    {/* Intro section */}
                    <div className='pb-6 pt-6 space-y-6'>

                        <div className='border-l-4 border-indigo-500 px-6 space-y-6'>
                            <h1 className='text-4xl font-bold'>Hi, I'm Archit Kumar 👋</h1>

                            <div className='text-xl'>

                                <p className="text-gray-400">Senior Software Engineer</p>
                                <p className="text-gray-500">Building the future, one commit at a time.</p>
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
                            <div className='border-2 bg-gray-900 border-sky-400 text-center p-5 rounded-2xl'>
                                <h1 className='text-4xl font-bold'>3+</h1>
                                <p>Years Experience</p>
                            </div>
                            <div className='border-2 bg-gray-900 border-sky-400 text-center p-5 rounded-2xl'>
                                <h1 className='text-4xl font-bold'>2+</h1>
                                <p>Projects</p>
                            </div>
                            <div className='border-2 bg-gray-900 border-sky-400 text-center p-5 rounded-2xl'>
                                <h1 className='text-4xl font-bold'>2.3k</h1>
                                <p>Commits</p>
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
