import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [notifications, setNotifications] = useState([]);

  // Sample words for random wallet names
  const getRandomString = () => {
    length = Math.random();
    if(Math.random() > 0.5) {
      length = 2; 
    } else {
      length = 3;
    }
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useEffect(() => {
    // Add initial notifications with "visible" status to appear immediately
    const initialNotifications = [];
    for (let i = 0; i < 4; i++) {
      initialNotifications.push({
        id: Date.now() - i * 1000,
        word: getRandomString(),
        status: 'visible',  // Set status to 'visible' to show them immediately
      });
    }
    setNotifications(initialNotifications);
  
    // Set up interval to add new notifications every 5 seconds
    const interval = setInterval(() => {
      setNotifications((prev) => {
        let updated = prev.map((notif) =>
          notif.status === 'entering' ? { ...notif, status: 'visible' } : notif
        );
  
        // If there are already 4 notifications, make the oldest one exit
        if (updated.length > 4) {
          updated = updated.map((notif, idx) =>
            idx === 0 ? { ...notif, status: 'exiting' } : notif
          );
        }
  
        // Add new notification
        updated.push({
          id: Date.now(),
          word: getRandomString(),
          status: 'entering',
        });
  
        // Remove the notification that has exited
        updated = updated.filter((notif) => notif.status !== 'exited');
  
        // Remove the oldest notification after it finishes exiting
        updated = updated.filter((notif) => notif.status !== 'exiting' || notif.id !== prev[0]?.id);
  
        return updated;
      });
    }, 1500); // 1.5 seconds interval
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return (
    <div className="flex flex-col md:flex-row px-8 mt-24">
      {/* Left Content */}
      <div className="md:w-2/3">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">i</div>
          <span className="text-sm">Custom Wallet Maker</span>
        </div>
        <h1 className="text-5xl font-bold leading-tight mb-8">
          Obtain any Solana address you want.
        </h1>
        <h2 className="text-2xl text-gray-400 mb-6">The Solana Card</h2>
        <p className="text-lg text-gray-400 max-w-xl">
          Safely and securely generate a free Solana address with any keyword you chose!
        </p>
      </div>

      {/* Right Animation - iPhone style notifications */}
      <div className="md:w-1/3 relative h-96 mt-8 md:mt-0">
        <div className="absolute top-0 right-0 w-72 flex flex-col gap-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg transform transition-all duration-600 ease-in-out ${
                notification.status === 'entering'
                  ? 'translate-x-full opacity-0'
                  : notification.status === 'exiting'
                  ? '-translate-y-4 opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium text-white">New Wallet</span>
                </div>
                <span className="text-xs text-gray-400">now</span>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                User just created <span className="text-green-400 font-medium">{notification.word}</span> wallet
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
