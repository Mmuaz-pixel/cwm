import React from 'react'
import Tokenomics from '../components/Tokenomics'
import StarryBackground from '../components/dots'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FAQSection from '../components/Faq'

const Token = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarryBackground />

      {/* Grid background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">

        {/* Vertical lines */}
        <div className="absolute left-1/16 top-0 bottom-0 w-px bg-gray-600" />
        <div className="absolute left-15/16 top-0 bottom-0 w-px bg-gray-600" />
      </div>

      {/* Subtle gray gradient overlay on the right side */}
      <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-gray-900 to-transparent z-0"></div>

      {/* Subtle gray gradient overlay on the left side */}
      <div className="absolute top-0 left-0 w-1/12 h-full bg-gradient-to-r from-gray-900 to-transparent z-0"></div>

      <div className="relative z-10 mx-32">
        {/* Navigation Bar */}
        <Navbar />
      </div>
      <div className="mx-8 my-3 border-t border-gray-700 opacity-30"></div>
      <Tokenomics />

      <div className="mx-8 my-3 border-t border-gray-700 opacity-30"></div>
      <FAQSection /> 
      <div className="mx-8 my-3 border-t border-gray-700 opacity-30"></div>
      <Footer />
    </div>

  )
}

export default Token