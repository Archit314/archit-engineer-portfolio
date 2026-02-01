function Footer() {

  const madeWithKey = `made_with`
  return (
    <div className='text-green-500 text-xl flex justify-center p-6 bg-gray-900/70'>
      <h1 className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        <span>{`{ "`}</span>
        <span className="text-gray-500">{` made_with`}</span>
        <span>{`":`}</span>
        <span className="text-red-400">{` "❤️"`}</span>
        <span>{`, "`}</span>
        <span className="text-gray-500">{` by`}</span>
        <span>{`":`}</span>
        <span>{` "`}</span>
        <span className="text-green-300">{`Archit Kumar`}</span>
        <span>{`", "`}</span>
        <span className="text-gray-500">{`year`}</span>
        <span>{`": "`}</span>
        <span className="text-gray-500">{`2026`}</span>
        <span>{`" }`}</span>
      </h1>
    </div>
  )
}

export default Footer
