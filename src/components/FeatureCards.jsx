import React from 'react'

const FeatureCards = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center max-w-2xl leading-tight">
        How it works?
      </h2>
      <p className="mt-3 text-lg text-gray-400 text-center">
        Solana wallet generation is secure due to the use of strong elliptic curve cryptography (Ed25519) to generate a private-public key pair.
      </p>

      {/* Features Cards */}
      <div className="mt-12 flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="relative flex-1 p-6 bg-opacity-70 rounded-xl border border-gray-700 backdrop-blur-md bg-gray-800">
          {/* Top Glow Effect */}
          <div className="absolute top-0 left-3 w-12 h-1 bg-white opacity-50 rounded-full"></div>
          {/* Icon Placeholder */}
          <div className="mb-4 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">🔗</span>
          </div>
          <h3 className="text-xl font-semibold">Unpredictability</h3>
          <p className="mt-2 text-gray-400 text-sm">
            The private key is derived from secure random data, ensuring unpredictability. In some cases, mnemonic seed phrases (BIP-39) provide a human-readable backup of the private key. Wallets store the private key securely, often encrypted, and may use hardware wallets for added protection
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative flex-1 p-6 bg-opacity-10 rounded-xl border border-gray-700 backdrop-blur-md bg-gray-800">
          {/* Top Glow Effect */}
          <div className="absolute top-0 left-3 w-12 h-1 bg-white opacity-50 rounded-full"></div>
          {/* Icon Placeholder */}
          <div className="mb-4 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">💳</span>
          </div>
          <h3 className="text-xl font-semibold">Official Libraries</h3>
          <p className="mt-2 text-gray-400 text-sm">
            Official libraries, like @solana/web3.js, follow best practices to ensure secure key generation. Overall, the process relies on cryptographic principles, secure randomness, and strong private key protection to safeguard user funds. Your private keys CANNOT be stored and are only accessible to you.


          </p>
        </div>
      </div>

      {/* Feature List */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
        ✔ Secure ✔ Compatible ✔ Unpredictable ✔ Official Libraries ✔ Solana Ecosystem
      </div>
    </>
  )
}

export default FeatureCards