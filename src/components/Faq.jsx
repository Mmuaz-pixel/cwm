import React, { useState } from 'react';

const FAQItem = ({ question, children, highlight = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`border border-gray-800 rounded-lg mb-4 overflow-hidden transition-all duration-300 hover:border-gray-700 ${isOpen ? 'shadow-lg shadow-gray-900/20' : ''}`}>
      <button 
        className={`w-full text-left flex justify-between items-center p-5 transition-all duration-300 ease-in-out ${isOpen ? 'bg-gray-900/40' : 'hover:bg-gray-900/20'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`text-white font-medium ${highlight ? 'text-yellow-500' : ''}`}>{question}</span>
        <span className="text-gray-400 transition-transform duration-300 ease-in-out transform-gpu" style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'}}>
          +
        </span>
      </button>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '200px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className={`p-5 pt-0 text-gray-400 ${highlight ? 'text-yellow-500' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="bg-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-white text-4xl font-medium mb-4">
            Frequently Asked <span className="relative">
              Questions
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-400 mt-4">Find answers to common questions about Custom Wallet Maker</p>
        </div>
        
        <div className="space-y-4">
          <FAQItem question="How does wallet generation work?">
            This code generates wallets by creating a random signing private key, deriving its corresponding public key, checking if the public key matches a given prefix, and then combining the private and public keys to form a full private key, which is then encoded and returned.
          </FAQItem>
          
          <FAQItem question="How do I know my private keys are safe?">
            Your private keys are never exposed to the outside world during the generation process, as they are kept within the local environment and encoded securely using Base58 before being returned.
          </FAQItem>
          
          <FAQItem question="Can I use the private key from this custom generator to interact with the Solana blockchain?">
            Yes, once generated, the private key can be used to sign transactions and interact with the Solana blockchain, while the public key is used as the wallet address.
          </FAQItem>
          
          <FAQItem question="Why is my desired prefix or suffix not generating after a long period of time?">
            Generating a wallet with a specific prefix or suffix requires finding a random key pair that matches the condition, which can take a significant amount of time due to the randomness of key generation and the vast number of possible combinations.
          </FAQItem>
          
          <FAQItem question="What trading platforms can I use this wallet with?">
            You can use generated wallets on platforms that support import. Such as Axiom, Bullx, or popular telegram trading bots.
          </FAQItem>
          
          <FAQItem question="What happens if I don’t like the generated wallet address?">
            You can simply generate a new wallet address with different prefixes or suffixes until you find one you prefer.
          </FAQItem>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
