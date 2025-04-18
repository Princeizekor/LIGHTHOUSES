"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Share2, Heart, AlertCircle, Clock, Percent, DollarSign } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Crypto, cryptoService } from "@/services/dataService";
export default function CryptoDetailPage() {
  const {
    id
  } = useParams();
  const [crypto, setCrypto] = useState<Crypto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    if (typeof id === "string") {
      const cryptoId = parseInt(id, 10);
      const fetchedCrypto = cryptoService.getCrypto(cryptoId);
      if (fetchedCrypto) {
        setCrypto(fetchedCrypto);
      }
      setIsLoading(false);
    }
  }, [id]);
  if (isLoading) {
    return <div className="container mx-auto flex h-96 items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600"></div>
          <p className="text-lg text-gray-600">Loading crypto details...</p>
        </div>
      </div>;
  }
  if (!crypto) {
    return <div className="container mx-auto flex h-96 items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h2 className="mb-4 text-2xl font-bold">Cryptocurrency Not Found</h2>
          <p className="mb-6 text-gray-600">Sorry, we couldn't find the cryptocurrency you're looking for.</p>
          <Link href="/crypto" className="rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700">
            Back to Crypto Listings
          </Link>
        </div>
      </div>;
  }
  return <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/crypto" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-purple-600">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to listings
          </Link>
        </div>

        {/* Crypto Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <img src={crypto.image} alt={crypto.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                {crypto.name} <span className="ml-2 text-base font-semibold text-gray-500">{crypto.symbol}</span>
              </h1>
              <div className="mt-2 flex items-center">
                <span className="text-2xl font-bold">{crypto.price}</span>
                <span className={`ml-2 flex items-center text-sm font-medium ${crypto.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {crypto.change}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Price Chart */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="mb-8 overflow-hidden rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Price Chart</h2>
                <div className="flex space-x-2">
                  {["1D", "1W", "1M", "3M", "1Y", "All"].map(period => <button key={period} className={`rounded-md px-2 py-1 text-xs font-medium ${period === "1M" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                      {period}
                    </button>)}
                </div>
              </div>
              <div className="relative h-64">
                <img src={crypto.chart || "https://picsum.photos/200"} alt="Price chart" className="h-full w-full rounded-lg object-cover" />
              </div>
            </motion.div>

            {/* Market Data */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Market Data</h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm text-gray-500">Market Cap</p>
                  <div className="mt-1 flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-purple-600" />
                    <p className="font-medium">{crypto.marketCap}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">24h Volume</p>
                  <div className="mt-1 flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-purple-600" />
                    <p className="font-medium">{crypto.volume}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">24h Change</p>
                  <div className="mt-1 flex items-center">
                    <Percent className="mr-2 h-4 w-4 text-purple-600" />
                    <p className={`font-medium ${crypto.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {crypto.change}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="mb-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">About {crypto.name}</h2>
              <p className="text-gray-700">
                {crypto.description || `${crypto.name} (${crypto.symbol}) is a cryptocurrency that's gaining attention in the digital asset market. It offers various features and benefits to investors and users alike.`}
              </p>
            </motion.div>

            {/* Technology Details */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Technology</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 text-base font-medium">Blockchain</h3>
                  <p className="text-sm text-gray-700">
                    {crypto.name === "Bitcoin" ? "Proof of Work (PoW)" : crypto.name === "Ethereum" ? "Proof of Stake (PoS)" : crypto.name === "Cardano" ? "Ouroboros Proof of Stake" : "Proof of Stake (PoS)"}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-medium">Smart Contract Support</h3>
                  <p className="text-sm text-gray-700">
                    {crypto.name === "Bitcoin" ? "Limited (via Taproot)" : "Full Smart Contract Support"}
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-base font-medium">Launch Date</h3>
                  <p className="text-sm text-gray-700">
                    {crypto.name === "Bitcoin" ? "January 3, 2009" : crypto.name === "Ethereum" ? "July 30, 2015" : crypto.name === "Cardano" ? "September 29, 2017" : crypto.name === "Solana" ? "March 16, 2020" : "Recent"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Buy/Sell Form */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Buy / Sell</h3>
              <div className="mb-4 flex">
                <button className="w-1/2 rounded-l-md bg-green-600 py-2 font-medium text-white hover:bg-green-700">
                  Buy
                </button>
                <button className="w-1/2 rounded-r-md bg-gray-200 py-2 font-medium text-gray-700 hover:bg-gray-300">
                  Sell
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="amount" className="mb-2 block text-sm font-medium text-gray-700">
                    Amount in {crypto.symbol}
                  </label>
                  <input type="number" id="amount" step="0.000001" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" placeholder={`0.1 ${crypto.symbol}`} />
                </div>
                <div>
                  <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-700">
                    Price (USD)
                  </label>
                  <input type="text" id="price" disabled className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" value={crypto.price} />
                </div>
                <div>
                  <label htmlFor="total" className="mb-2 block text-sm font-medium text-gray-700">
                    Total Price (USD)
                  </label>
                  <input type="text" id="total" disabled className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm" placeholder="$0.00" />
                </div>
                <button type="submit" className="w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Continue
                </button>
              </form>
            </motion.div>

            {/* Action Buttons */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="flex space-x-2">
              <button onClick={() => setFavorite(!favorite)} className={`flex w-1/2 items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${favorite ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                <Heart className={`mr-1.5 h-4 w-4 ${favorite ? "fill-red-700 text-red-700" : ""}`} />
                {favorite ? "Watchlisted" : "Watchlist"}
              </button>
              <button className="flex w-1/2 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                <Share2 className="mr-1.5 h-4 w-4" />
                Share
              </button>
            </motion.div>

            {/* Risk Warning */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="rounded-lg bg-yellow-50 p-6 shadow-md">
              <div className="flex items-start">
                <AlertCircle className="mr-3 h-5 w-5 flex-shrink-0 text-yellow-600" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">Risk Warning</h3>
                  <p className="mt-2 text-sm text-yellow-700">
                    Cryptocurrency trading involves significant risk. Prices can fluctuate widely and you could lose your entire investment. Always do your own research before trading.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Similar Cryptos */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Similar Cryptocurrencies</h3>
              <div className="space-y-4">
                {["Bitcoin", "Ethereum", "Cardano", "Solana"].filter(name => name !== crypto.name).slice(0, 3).map((name, i) => <div key={i} className="flex items-center">
                      <div className="mr-3 h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                        <img src={`https://images.unsplash.com/photo-16${i + 1}8843479313-40f8afb4b4d8?q=80&w=70&auto=format&fit=crop`} alt={name} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{name}</p>
                        <p className="text-xs text-gray-500">
                          {["BTC", "ETH", "ADA", "SOL"].filter((_, j) => name !== crypto.name)[i]}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        ${(30000 - i * 10000).toLocaleString()}
                      </div>
                    </div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>;
}