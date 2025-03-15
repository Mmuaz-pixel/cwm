import React from 'react'

const Landing = () => {
  return (
    <div className="px-8 mt-24">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">i</div>
        <span className="text-sm">Custom Wallet Maker</span>
      </div>

      <h1 className="text-5xl font-bold leading-tight mb-8">
        Obtain any Solana address you want.
      </h1>

      <h2 className="text-2xl text-gray-400 mb-6">The Solana Card</h2>

      <p className="text-lg text-gray-400 max-w-xl">
        Safely and securely generate a free Solana address with any
        keyword you chose!
      </p>
    </div>
  )
}

export default Landing