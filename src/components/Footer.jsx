import React from 'react';

const Footer = () => {
  return (
    <div className="relative  z-10 text-white px-6">
      {/* Gradient divider */}      
      <div className="max-w-6xl mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg mr-3"></div>
                <p className="text-white text-xl font-medium">CWM</p>
              </div>
              <p className="text-gray-400 max-w-md">Custom Wallet Maker to generate solana addresses of your own choice. </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              
              <div>
                <p className="text-gray-300 font-medium mb-4 text-sm tracking-wider uppercase">Socials</p>
                <ul className="space-y-3">
                  <li>
                    <a href="https://x.com/cwm_sol" className="z-10 text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center">
                      <span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>
                      X (formerly Twitter)
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      <span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>
                      <a href="#">Blog</a>
                      <span className="ml-2 px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full">Coming Soon</span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center">
                      <span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-6 md:mb-0">©2024 CWM | All Rights Reserved.</p>
          <div className="flex space-x-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Telegram</a>
            <a href="https://x.com/cwm_sol" className="hover:text-gray-300 transition-colors duration-200">X (formerly Twitter)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;