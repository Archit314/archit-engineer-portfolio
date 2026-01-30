import Terminal from "../component/common/Terminal"

function Skills() {
  return (
    <Terminal
        children={
            <div className="flex flex-col gap-9 p-6">
                <h1>archit@dev:~/skills$ cat skills.md</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 border border-gray-600 rounded-2xl p-3">
                        <h1 className="text-base font-bold text-green-300">💻 Languages</h1>

                        <div className="grid grid-cols-5 gap-6">
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">JavaScript</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">TypeScript</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Python</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border border-gray-600 rounded-2xl p-3">
                        <h1 className="text-base font-bold text-purple-400">🕸️ Backend Framework</h1>

                        <div className="grid grid-cols-5">
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Express.js</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Adonis.js</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border border-gray-600 rounded-2xl p-3">
                        <h1 className="text-base font-bold text-cyan-400">🎨 Frontend Frameword & Libraries</h1>

                        <div className="grid grid-cols-5">
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">React.js</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Daisy UI</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">TailwindCss</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Bootstrap</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border border-gray-600 rounded-2xl p-3">
                        <h1 className="text-base font-bold text-orange-400">☁️ Cloud & DevOps</h1>

                        <div className="grid grid-cols-5">
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Forge</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">AWS</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Render</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Netlify</div>
                            <div className="border border-gray-600 rounded-xl p-1 w-max px-2">Cloudinary</div>
                        </div>
                    </div>
                </div>
                <h1>archit@dev:~/skills$ </h1>
            </div>
        }
    />
  )
}

export default Skills