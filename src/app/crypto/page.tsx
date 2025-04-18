"use client";

import { useState } from "react";
import { Search, TrendingUp, TrendingDown, Filter, ChevronDown, Bitcoin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Dummy crypto data
const cryptoListings = [{
  id: 1,
  name: "Bitcoin",
  symbol: "BTC",
  price: "$64,831.25",
  change: "+2.4%",
  volume: "$42.8B",
  marketCap: "$1.26T",
  image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop",
  trend: "up",
  chart: "https://picsum.photos/200"
}, {
  id: 2,
  name: "Ethereum",
  symbol: "ETH",
  price: "$3,482.61",
  change: "+1.8%",
  volume: "$21.4B",
  marketCap: "$418.32B",
  image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop",
  trend: "up",
  chart: "https://picsum.photos/200"
}, {
  id: 3,
  name: "Cardano",
  symbol: "ADA",
  price: "$0.4563",
  change: "-0.7%",
  volume: "$682.1M",
  marketCap: "$16.12B",
  image: "https://picsum.photos/200",
  trend: "down",
  chart: "https://picsum.photos/200"
}, {
  id: 4,
  name: "Solana",
  symbol: "SOL",
  price: "$135.72",
  change: "+5.2%",
  volume: "$3.27B",
  marketCap: "$58.95B",
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
  trend: "up",
  chart: "https://picsum.photos/200"
}, {
  id: 5,
  name: "Ripple",
  symbol: "XRP",
  price: "$0.6023",
  change: "+1.2%",
  volume: "$1.85B",
  marketCap: "$32.48B",
  image: "https://picsum.photos/200",
  trend: "up",
  chart: "https://picsum.photos/200"
}, {
  id: 6,
  name: "Polkadot",
  symbol: "DOT",
  price: "$7.23",
  change: "-0.5%",
  volume: "$412.7M",
  marketCap: "$9.28B",
  image: "https://picsum.photos/200",
  trend: "down",
  chart: "https://picsum.photos/200"
}, {
  id: 7,
  name: "Chainlink",
  symbol: "LINK",
  price: "$14.87",
  change: "+3.1%",
  volume: "$528.4M",
  marketCap: "$8.36B",
  image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=2070&auto=format&fit=crop",
  trend: "up",
  chart: "https://picsum.photos/200"
}, {
  id: 8,
  name: "Avalanche",
  symbol: "AVAX",
  price: "$35.49",
  change: "+2.8%",
  volume: "$915.2M",
  marketCap: "$12.79B",
  image: "https://picsum.photos/200",
  trend: "up",
  chart: "https://picsum.photos/200"
}];
export default function CryptoPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  return <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="relative h-64 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop')"
    }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4">
          <h1 className="mb-6 text-center text-4xl font-bold text-white">Explore Cryptocurrencies</h1>
          <div className="w-full max-w-3xl">
            <div className="flex rounded-lg bg-white shadow-lg">
              <input type="text" placeholder="Search by name or symbol..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full rounded-l-lg border-0 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <button className="flex items-center justify-center rounded-r-lg bg-purple-600 px-6 text-white transition-colors hover:bg-purple-700">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Results */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">Cryptocurrency Market</h2>

          <div className="flex flex-wrap gap-2">
            {/* Filter buttons */}
            {["Market Cap", "Price", "Volume", "Change"].map(filter => <div key={filter} className="relative">
                <button onClick={() => setActiveFilter(activeFilter === filter ? null : filter)} className={cn("flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50", activeFilter === filter ? "border-purple-500 text-purple-600" : "text-gray-700")}>
                  <Filter className="mr-2 h-4 w-4" />
                  {filter}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>

                {/* Dropdown for filter (simplified) */}
                {activeFilter === filter && <div className="absolute right-0 z-10 mt-2 w-60 rounded-md bg-white p-4 shadow-lg">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900">Filter by {filter}</p>
                      <p className="text-xs text-gray-500">Filter options would go here</p>
                    </div>
                  </div>}
              </div>)}
          </div>
        </div>

        {/* Crypto Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cryptoListings.map((crypto, index) => <motion.div key={crypto.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img src={crypto.image} alt={crypto.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute left-0 top-0 m-3 flex items-center space-x-1 rounded-full bg-black/70 px-3 py-1">
                  <Bitcoin className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">{crypto.symbol}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{crypto.name}</h3>
                  <span className="font-mono text-lg font-bold text-gray-900">{crypto.price}</span>
                </div>

                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">24h Change</span>
                  <span className={cn("flex items-center font-medium", crypto.trend === "up" ? "text-green-600" : "text-red-600")}>
                    {crypto.trend === "up" ? <TrendingUp className="mr-1 h-4 w-4" /> : <TrendingDown className="mr-1 h-4 w-4" />}
                    {crypto.change}
                  </span>
                </div>

                <div className="mb-5 grid grid-cols-2 gap-4 text-xs text-gray-500">
                  <div>
                    <div className="mb-1 text-xs font-medium uppercase">Market Cap</div>
                    <div className="font-medium text-gray-900">{crypto.marketCap}</div>
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-medium uppercase">24h Volume</div>
                    <div className="font-medium text-gray-900">{crypto.volume}</div>
                  </div>
                </div>

                <button className="w-full rounded-md bg-purple-600 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700">
                  View Details
                </button>
              </div>
            </motion.div>)}
        </div>
      </section>
    </main>;
}