"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Truck, Calendar, Fuel, Ruler, Share2, Heart, Car, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Car as CarType, carService } from "@/services/dataService";

export default function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  
  useEffect(() => {
    if (typeof id === "string") {
      const carId = parseInt(id, 10);
      const fetchedCar = carService.getCar(carId);
      
      if (fetchedCar) {
        setCar(fetchedCar);
      }
      
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto flex h-96 items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
          <p className="text-lg text-gray-600">Loading car details...</p>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="container mx-auto flex h-96 items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h2 className="mb-4 text-2xl font-bold">Car Not Found</h2>
          <p className="mb-6 text-gray-600">Sorry, we couldn't find the car you're looking for.</p>
          <Link
            href="/cars"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Back to Car Listings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/cars"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to listings
          </Link>
        </div>

        {/* Car Header */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{car.name}</h1>
            <p className="mt-2 text-gray-600">{car.location}</p>
          </div>
          <div className="text-2xl font-bold text-blue-600">{car.price}</div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Car Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="relative h-[400px]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Car Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-semibold">Vehicle Details</h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <div className="mt-1 flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                    <p className="font-medium">{car.year}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fuel Type</p>
                  <div className="mt-1 flex items-center">
                    <Fuel className="mr-2 h-4 w-4 text-blue-600" />
                    <p className="font-medium">{car.fuelType}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mileage</p>
                  <div className="mt-1 flex items-center">
                    <Ruler className="mr-2 h-4 w-4 text-blue-600" />
                    <p className="font-medium">{car.mileage}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transmission</p>
                  <div className="mt-1 flex items-center">
                    <Car className="mr-2 h-4 w-4 text-blue-600" />
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Car Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-semibold">Description</h2>
              <p className="text-gray-700">{car.description || "No description available for this vehicle."}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="mb-4 text-xl font-semibold">Features</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {[
                  "Navigation System",
                  "Bluetooth",
                  "Backup Camera",
                  "Sunroof",
                  "Heated Seats",
                  "Leather Interior",
                  "Keyless Entry",
                  "Premium Sound System",
                  "Alloy Wheels",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <h3 className="mb-4 text-lg font-semibold">Contact Seller</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="I'm interested in this vehicle..."
                    defaultValue={`I'm interested in this ${car.name}. Please contact me at your earliest convenience.`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Contact Seller
                </button>
              </form>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-2"
            >
              <button
                onClick={() => setFavorite(!favorite)}
                className={`flex w-1/2 items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${
                  favorite
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Heart
                  className={`mr-1.5 h-4 w-4 ${favorite ? "fill-red-700 text-red-700" : ""}`}
                />
                {favorite ? "Saved" : "Save"}
              </button>
              <button className="flex w-1/2 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                <Share2 className="mr-1.5 h-4 w-4" />
                Share
              </button>
            </motion.div>

            {/* Seller Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <h3 className="mb-4 text-lg font-semibold">Seller Information</h3>
              <div className="mb-4 flex items-center">
                <div className="mr-3 h-10 w-10 rounded-full bg-blue-100 text-blue-700">
                  <div className="flex h-full w-full items-center justify-center font-semibold">AC</div>
                </div>
                <div>
                  <p className="font-medium">LIGHTHOUSE Dealership</p>
                  <p className="text-xs text-gray-600">Member since 2023</p>
                </div>
              </div>
              <div className="mb-1 flex items-center text-sm">
                <Shield className="mr-2 h-4 w-4 text-green-600" />
                <span>Verified Seller</span>
              </div>
              <div className="flex items-center text-sm">
                <Truck className="mr-2 h-4 w-4 text-blue-600" />
                <span>23 Vehicles Listed</span>
              </div>
            </motion.div>

            {/* Similar Cars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <h3 className="mb-4 text-lg font-semibold">Similar Vehicles</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div className="mr-3 h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={`https://images.unsplash.com/photo-164${i}790551116-18e150f248e9?q=80&w=270&auto=format&fit=crop`}
                        alt={`Similar Car ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{["Mercedes GLE", "BMW X5", "Audi Q7"][i-1]}</p>
                      <p className="text-sm text-gray-500">${(50000 + i * 5000).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
