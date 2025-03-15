import React, { useState, useEffect, useRef } from "react";
import nacl from "tweetnacl";
import bs58 from "bs58";

const WalletGenerator = () => {
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [wallets, setWallets] = useState([]);
  const [numWallets, setNumWallets] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showLongProcessMessage, setShowLongProcessMessage] = useState(false);
  const [hoverCancel, setHoverCancel] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(0);
  const controllerRef = useRef(new AbortController());
  const MAX_CONCURRENT_TASKS = navigator.hardwareConcurrency || 4;

  useEffect(() => {
    if (!loading) {
      setShowLongProcessMessage(false);
      return;
    }

    const timeout = setTimeout(() => {
      setShowLongProcessMessage(true);
    }, 10000); // Show message after 10 seconds

    return () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    if(!prefix && !suffix) {
      setEstimatedTime(0);
      return;
    }
    const attempts = Math.pow(58, prefix.length + suffix.length);
    const timePerAttempt = 0.08;
    setEstimatedTime(((attempts * timePerAttempt * numWallets)).toFixed(2));
  }, [prefix, suffix, numWallets]);

  const generateSingleWallet = async (signal) => {
    let attempts = 0;
    while (!signal.aborted) {
      attempts++;

      const keyPair = nacl.sign.keyPair();
      const publicKeyB58 = bs58.encode(keyPair.publicKey);
      const fullPrivateKeyB58 = bs58.encode(keyPair.secretKey);

      if (publicKeyB58.startsWith(prefix) && publicKeyB58.endsWith(suffix)) {
        return { publicKeyB58, fullPrivateKeyB58, attempts };
      }

      if (attempts % 100 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }
    throw new Error("Generation canceled");
  };

  const generateWallets = async () => {
    setLoading(true);
    setWallets([]);
    controllerRef.current = new AbortController();
    await new Promise((resolve) => setTimeout(resolve, 0));

    const batchSize = Math.min(numWallets, MAX_CONCURRENT_TASKS);
    let results = [];

    try {
      while (results.length < numWallets) {
        const remaining = numWallets - results.length;
        const batchCount = Math.min(batchSize, remaining);

        const batchResults = await Promise.all(
          Array.from({ length: batchCount }, () =>
            generateSingleWallet(controllerRef.current.signal)
          )
        );

        results = [...results, ...batchResults];
        setWallets(results);
      }
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  };

  const cancelGeneration = () => {
    controllerRef.current.abort();
    setLoading(false);
  };

  return (
    <div id="generator" className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-white">
      <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Solana Wallet Generator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm mb-2 font-semibold text-gray-300">
              Prefix (Case-Sensitive)
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder="Enter prefix..."
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-semibold text-gray-300">
              Suffix (Case-Sensitive)
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder="Enter suffix..."
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-semibold text-gray-300">
              Number of Wallets
            </label>
            <select
              className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
              value={numWallets}
              onChange={(e) => setNumWallets(Number(e.target.value))}
            >
              {[1, 2, 3, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Estimated Time Display */}
        {estimatedTime > 0 && (
          <p className="text-sm mb-6 text-center text-gray-400">
            Estimated Time: <strong>{estimatedTime} seconds</strong>
          </p>
        )}

        <div className="flex justify-center">
          <button
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative"
            onClick={loading ? cancelGeneration : generateWallets}
            onMouseEnter={() => setHoverCancel(true)}
            onMouseLeave={() => setHoverCancel(false)}
          >
            {loading ? (hoverCancel ? "Cancel" : "Generating...") : "Generate Wallets"}
          </button>
        </div>

        {showLongProcessMessage && (
          <p className="text-sm mt-4 text-center text-yellow-400">
            We are still working on generating your wallet. Complex words may take time.
            Do not refresh your browser.
          </p>
        )}

        {wallets.length > 0 && (
          <div className="mt-8 bg-gray-700/50 rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">
              Generated Wallets
            </h2>
            <div className="space-y-4">
              {wallets.map((wallet, index) => (
                <div key={index} className="p-4 bg-gray-600/20 rounded-lg border border-gray-500/30">
                  <p className="text-gray-200">
                    <strong>Public Key:</strong> {wallet.publicKeyB58}
                  </p>
                  <p className="text-gray-200">
                    <strong>Private Key:</strong> {wallet.fullPrivateKeyB58}
                  </p>
                  <p className="text-gray-400">
                    <strong>Attempts:</strong> {wallet.attempts}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletGenerator;