"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Car, Bitcoin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CarComponent from "@/components/Car";

// Dummy data for cars
const featuredCars = [{
  id: 1,
  name: "Tesla Model S",
  price: "$79,990",
  image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Electric"
}, {
  id: 2,
  name: "BMW M4 Competition",
  price: "$84,100",
  image: "https://images.unsplash.com/photo-1617654112368-307921291f42?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Gasoline"
}, {
  id: 3,
  name: "Mercedes-Benz S-Class",
  price: "$109,800",
  image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Hybrid"
}, {
  id: 4,
  name: "Audi RS e-tron GT",
  price: "$139,900",
  image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Electric"
}];

// Dummy data for crypto
const featuredCrypto = [{
  id: 1,
  name: "Bitcoin",
  price: "$64,831.25",
  change: "+2.4%",
  image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop",
  symbol: "BTC",
  marketCap: "$1.26T",
  volume: "$42.8B"
}, {
  id: 2,
  name: "Ethereum",
  price: "$3,482.61",
  change: "+1.8%",
  image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2069&auto=format&fit=crop",
  symbol: "ETH",
  marketCap: "$418.32B",
  volume: "$21.4B"
}, {
  id: 3,
  name: "Cardano",
  price: "$0.4563",
  change: "-0.7%",
  image: "https://picsum.photos/200",
  symbol: "ADA",
  marketCap: "$16.12B",
  volume: "$682.1M"
}, {
  id: 4,
  name: "Solana",
  price: "$135.72",
  change: "+5.2%",
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
  symbol: "SOL",
  marketCap: "$58.95B",
  volume: "$3.27B"
}];
export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState<"cars" | "crypto">("cars");
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">Featured Listings</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover our handpicked selection of premium vehicles and top-performing cryptocurrencies
          </p>
        </div>

        {/* Tab Switch */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button onClick={() => setActiveTab("cars")} className={cn("flex items-center rounded-md px-4 py-2 transition-all", activeTab === "cars" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-blue-600")}>
              <Car className="mr-2 h-5 w-5" />
              <span>Cars</span>
            </button>
            <button onClick={() => setActiveTab("crypto")} className={cn("flex items-center rounded-md px-4 py-2 transition-all", activeTab === "crypto" ? "bg-white text-purple-600 shadow-sm" : "text-gray-600 hover:text-purple-600")}>
              <Bitcoin className="mr-2 h-5 w-5" />
              <span>Crypto</span>
            </button>
          </div>
        </div>

        {/* Cars Tab Content */}
        <div className={cn("space-y-6", activeTab !== "cars" && "hidden")}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredCars.map(car => (
              <CarComponent 
                key={car.id} 
                car={car} 
                featured={true} 
                showRating={false}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/cars" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700">
              View All Cars
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Crypto Tab Content */}
        <div className={cn("space-y-6", activeTab !== "crypto" && "hidden")}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredCrypto.map(crypto => <motion.div key={crypto.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={crypto.image} alt={crypto.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="font-semibold">{crypto.name}</h3>
                    <span className="font-mono text-purple-600">{crypto.price}</span>
                  </div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-gray-500">{crypto.symbol}</span>
                    <span className={cn("font-medium", crypto.change.startsWith("+") ? "text-green-600" : "text-red-600")}>
                      {crypto.change}
                    </span>
                  </div>
                  <div className="mb-4 text-sm text-gray-500">
                    Market Cap: {crypto.marketCap} • 24h Vol: {crypto.volume}
                  </div>
                  <Link href={`/crypto/${crypto.id}`} className="flex w-full items-center justify-center rounded-md bg-gray-100 py-2 text-center text-sm font-medium text-gray-800 transition-colors hover:bg-purple-600 hover:text-white">
                    View Details
                  </Link>
                </div>
              </motion.div>)}
          </div>
          <div className="mt-8 text-center">
            <Link href="/crypto" className="inline-flex items-center rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-purple-700">
              View All Cryptocurrencies
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>;
}
