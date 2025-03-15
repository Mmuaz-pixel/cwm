import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-6 pb-3 px-8">
      <div className="text-4xl font-bold">CWM</div>

      <div className="flex items-center space-x-6">
        <button className="px-4 py-2 rounded-full bg-gray-800"><Link to='/'>Home</Link></button>
        <button className="px-4 py-2"><Link to='/token'>$CWM Token</Link></button>
      </div>
      
      <div></div>
    </nav>
  )
}

export default Navbar