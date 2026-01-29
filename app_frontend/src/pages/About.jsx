import React from 'react'
import Terminal from '../component/common/Terminal'

function About() {
    return (
        <Terminal
            children={

                <div>
                    <div className='p-6'>archit@dev:~/about$ cat story.md</div>
                    <div className='flex flex-col gap-y-6 p-6'>
                        <div className='flex flex-col border-l-4 border-emerald-500 bg-emerald-950 gap-y-3 rounded-2xl p-4'>
                            <h1 className='text-3xl font-bold'>
                                🚀 My Journey
                            </h1>
                            <p className='text-gray-400'>
                                Started Coding 6 years ago, fell in love with building things. From games nobody played to system serving millions. Every bug taught me something new.
                            </p>
                        </div>
                        <div className='flex flex-col border-l-4 border-purple-500 bg-purple-950 rounded-2xl gap-y-3 p-4'>
                            <h1 className='text-3xl font-bold'>
                                💼 What I Do
                            </h1>
                            <p className='text-gray-400'>
                                I specialize in distributed systems, cloud architecture, and leading engineering teams to ship products. I turn coffee into code.
                            </p>
                        </div>
                        <div className='flex flex-col border-l-4 border-cyan-500 bg-cyan-950 rounded-2xl gap-y-3 p-4'>
                            <h1 className='text-3xl font-bold'>
                                🎮 Beyond Code
                            </h1>
                            <div class="grid grid-cols-4 gap-4">
                                <div className='bg-gray-900 rounded-2xl text-center p-3 text-base'>
                                    🍵 Coffee Enthusiast
                                </div>
                                <div className='bg-gray-900 rounded-2xl text-center p-3 text-base'>
                                    🎮 Gaming
                                </div>
                                <div className='bg-gray-900 rounded-2xl text-center p-3 text-base'>
                                    📚 Learning
                                </div>
                                <div className='bg-gray-900 rounded-2xl text-center p-3 text-base'>
                                    🏃‍♂️ Running & Exercise
                                </div>
                                <div className='bg-gray-900 rounded-2xl text-center p-3 text-base'>
                                    📽️ Movie & Series
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-6'>archit@dev:~/about$ </div>
                </div>
            }

            title='📖 about.md'
        />
    )
}

export default About
