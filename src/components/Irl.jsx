import React from 'react'

const Irl = () => {
  return (
    <>
      {/* Left Content */}
      <div className="flex-1 px-8">
        <h1 className="text-4xl font-bold">The more personalized, the harder</h1>
        <p className="text-gray-400 mt-2">
          Providing the personalized address you want, with the security you need.
        </p>

        {/* Features */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900">
              🚀 {/* Replace with actual icon */}
            </div>
            <div>
              <p className="text-lg text-white font-medium">Characters</p>
              <p className="text-gray-400 text-sm">Generating wallet addresses with up to three characters is typically fast and straightforward. However, as you increase the complexity to four or five characters, especially with both prefixes and suffixes, the generation process may take longer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900">
              🔄 {/* Replace with actual icon */}
            </div>
            <div>
              <p className="text-lg text-white font-medium">Time constraint</p>
              <p className="text-gray-400 text-sm">It is important to monitor the generation time closely and cancel the process if the duration exceeds your expectations. Please note that we cannot assist with wait times or delays in the generation process.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Irl