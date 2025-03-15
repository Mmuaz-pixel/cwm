import React from 'react';
import StarryBackground from '../components/dots';
import FAQSection from '../components/Faq';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import FeatureCards from '../components/FeatureCards';
import Irl from '../components/Irl';
import WalletGenerator from '../components/WalletGenerator';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Light dots */}
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

      {/* Content container */}
      <div className="relative z-10 mx-32">
        {/* Navigation Bar */}
        <Navbar />

        {/* Subtle line divider under nav */}
        <div className="mx-8 border-t border-gray-700 opacity-30"></div>

        {/* Main Content */}
        <Landing />
      </div>

      {/* Subtle line divider at bottom */}
      <div className="mx-8 my-3 border-t border-gray-700 opacity-30"></div>

      <WalletGenerator /> 

      <div className="mx-8 my-3 border-t border-gray-700 opacity-30"></div>

      <section className="relative z-0 flex flex-col items-center justify-center px-6 py-16 text-white ">
        {/* Heading */}
        <FeatureCards />
      </section>

      <div className="mx-8 border-t border-gray-700 opacity-30"></div>

      <section className="relative z-0 flex items-center justify-center px-6 py-16 text-white mx-20 bg-gradient-to-b from-[#201c20] to-[#070707]">

        <Irl/>
      </section>

      <div className="mx-8 mb-3 border-t border-gray-700 opacity-30"></div>

      <section className="relative z-0 flex flex-col items-center justify-center px-6 py-16 text-white ">
        <FAQSection />
      </section>

      <div className="mx-8 mb-3 border-t border-gray-700 opacity-30"></div>

      <section className="relative z-0 flex flex-col items-center justify-center px-6 py-16 text-white ">
        <Footer />
      </section>
    </div>
  );
};

export default Home;