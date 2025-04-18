"use client";

import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import CarComponent from "@/components/Car";

// Dummy car data with more entries
const carListings = [{
  id: 1,
  name: "Tesla Model S Plaid",
  price: "$129,990",
  image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Electric",
  rating: 4.9,
  location: "San Francisco, CA"
}, {
  id: 2,
  name: "BMW M4 Competition",
  price: "$84,100",
  image: "https://images.unsplash.com/photo-1617654112368-307921291f42?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Gasoline",
  rating: 4.7,
  location: "Los Angeles, CA"
}, {
  id: 3,
  name: "Mercedes-Benz S-Class",
  price: "$109,800",
  image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Hybrid",
  rating: 4.8,
  location: "Miami, FL"
}, {
  id: 4,
  name: "Audi RS e-tron GT",
  price: "$139,900",
  image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Electric",
  rating: 4.9,
  location: "Seattle, WA"
}, {
  id: 5,
  name: "Porsche 911 Turbo S",
  price: "$216,100",
  image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=2069&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Gasoline",
  rating: 4.9,
  location: "Chicago, IL"
}, {
  id: 6,
  name: "Land Rover Range Rover",
  price: "$104,500",
  image: "https://picsum.photos/200",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Hybrid",
  rating: 4.6,
  location: "Dallas, TX"
}, {
  id: 7,
  name: "Chevrolet Corvette Z06",
  price: "$109,295",
  image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Manual",
  fuelType: "Gasoline",
  rating: 4.8,
  location: "Detroit, MI"
}, {
  id: 8,
  name: "Ferrari 296 GTB",
  price: "$322,986",
  image: "https://picsum.photos/200",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Hybrid",
  rating: 4.9,
  location: "Las Vegas, NV"
}];
export default function CarsPage() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // For demo purposes, we're not actually filtering the data
  // In a real app, you would filter based on these states and API calls

  return <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="relative h-64 bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop')"
    }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4">
          <h1 className="mb-6 text-center text-4xl font-bold text-white">Find Your Perfect Vehicle</h1>
          <div className="w-full max-w-3xl">
            <div className="flex rounded-lg bg-white shadow-lg">
              <input type="text" placeholder="Search by make, model, or keyword..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full rounded-l-lg border-0 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="flex items-center justify-center rounded-r-lg bg-blue-600 px-6 text-white transition-colors hover:bg-blue-700">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Results */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">Browse Vehicles</h2>

          <div className="flex flex-wrap gap-2">
            {/* Filter buttons */}
            {["Price", "Year", "Make", "Body Type", "Fuel Type"].map(filter => <div key={filter} className="relative">
                <button onClick={() => setActiveFilter(activeFilter === filter ? null : filter)} className={cn("flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50", activeFilter === filter ? "border-blue-500 text-blue-600" : "text-gray-700")}>
                  <Filter className="mr-2 h-4 w-4" />
                  {filter}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>

                {/* Dropdown for filter (simplified, would be expanded in real app) */}
                {activeFilter === filter && <div className="absolute right-0 z-10 mt-2 w-60 rounded-md bg-white p-4 shadow-lg">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900">Filter by {filter}</p>
                      <p className="text-xs text-gray-500">Filter options would go here</p>
                    </div>
                  </div>}
              </div>)}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {carListings.map((car, index) => (
            <CarComponent 
              key={car.id} 
              car={car} 
              className="transform transition-all duration-300 hover:translate-y-[-5px]"
            />
          ))}
        </div>
      </section>
    </main>;
}
