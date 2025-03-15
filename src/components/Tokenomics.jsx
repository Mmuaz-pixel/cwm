import React from 'react';

const TokenomicsCard = ({ title, percentage, description, buttonText, icon, bottomItems }) => {
  const accentColor = title === 'Liquidity Pool' ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-400';
  
  return (
    <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      {/* Top accent line */}
      <div className={`h-1 w-16 absolute top-0 left-6 bg-gradient-to-r ${accentColor}`}></div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400">{icon}</div>
          <div className="text-gray-400 text-sm">{title}</div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-baseline">
            <span className="text-5xl font-medium text-white">{percentage}</span>
            <span className="text-xs text-gray-500 ml-2">/ {title}</span>
          </div>
          <p className="text-gray-400 text-sm mt-4">{description}</p>
        </div>
        
        {buttonText && (
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition-colors duration-200 mb-8">
            {buttonText}
          </button>
        )}
        
        <div className="space-y-4">
          {bottomItems.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.icon}
              <div className="ml-3">
                <span className="text-gray-300 text-sm">{item.title} </span>
                {item.subtitle && <span className="text-gray-500 text-sm">{item.subtitle}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tokenomics = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Token Address */}
        <div className="text-center mb-3">
          <p className="text-gray-400 text-sm">
            Token Address: <span className="text-yellow-500">DLUNTK8Or7CrpaXYnxHJYoBznUpvMP65uCwWOgYnRK</span>
          </p>
        </div>
        
        {/* Tokenomics Heading */}
        <h2 className="text-4xl font-medium text-center mb-4">Tokenomics</h2>
        <p className="text-gray-400 text-center mb-12">$SOLC counts with 0% Buy and Sell fees</p>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Treasury Card */}
          <TokenomicsCard 
            title="Treasury"
            percentage="10%"
            description="10% of the supply is treasured for operational costs down the line. (View Roadmap below)"
            buttonText="Buy $SOLC"
            icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>}
            bottomItems={[
              {
                icon: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>,
                title: "Multi-Sig",
                subtitle: "Treasury"
              },
              {
                icon: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
                title: "Multiple",
                subtitle: "Core Contributors"
              }
            ]}
          />
          
          {/* Liquidity Pool Card */}
          <TokenomicsCard 
            title="Liquidity Pool"
            percentage="80%"
            description="80% of the token supply will go to ensure liquidity of the token."
            buttonText="Buy $SOLC"
            icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18a3 3 0 11-6 0 3 3 0 016 0zM11 16a2 2 0 11-4 0 2 2 0 014 0zM6 16a2 2 0 11-4 0 2 2 0 014 0zM9 4a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
            bottomItems={[
              {
                icon: <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
                title: "Guaranteed Token",
                subtitle: "Liquidity"
              },
              {
                icon: <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>,
                title: "Price Targets",
                subtitle: "with Minimal Slippage"
              },
              {
                icon: <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>,
                title: "Purchase on Raydium",
                subtitle: ""
              }
            ]}
          />
          
          {/* Marketing Card */}
          <TokenomicsCard 
            title="Marketing"
            percentage="10%"
            description="10% is committed towards SolCard brand awareness and multi-niche marketing."
            buttonText="Contact for Partnership"
            icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg>}
            bottomItems={[
              {
                icon: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
                title: "World Class",
                subtitle: "Security"
              },
              {
                icon: <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>,
                title: "Top notch",
                subtitle: "Artists and Designers"
              }
            ]}
          />
        </div>
        
        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-400">Welcome to $SOLC, the token backing SolCard operations.</p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;