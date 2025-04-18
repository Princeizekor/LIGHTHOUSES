"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Car, Bitcoin, Upload, Check } from "lucide-react";
import Link from "next/link";

export default function SellPage() {
  const [activeType, setActiveType] = useState<"car" | "crypto">("car");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-4xl font-bold"
            >
              List Your Assets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Sell your vehicle or cryptocurrency to our network of qualified buyers
            </motion.p>
          </div>

          {/* Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 flex justify-center"
          >
            <div className="inline-flex overflow-hidden rounded-lg bg-white p-1 shadow-sm">
              <button
                onClick={() => setActiveType("car")}
                className={cn(
                  "flex items-center space-x-2 rounded-md px-6 py-3 transition-all",
                  activeType === "car"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                <Car className="h-5 w-5" />
                <span>Sell Vehicle</span>
              </button>
              <button
                onClick={() => setActiveType("crypto")}
                className={cn(
                  "flex items-center space-x-2 rounded-md px-6 py-3 transition-all",
                  activeType === "crypto"
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                <Bitcoin className="h-5 w-5" />
                <span>Sell Crypto</span>
              </button>
            </div>
          </motion.div>

          {/* Car Form */}
          {activeType === "car" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h2 className="mb-6 text-2xl font-semibold">Vehicle Information</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="make" className="mb-2 block text-sm font-medium text-gray-900">
                      Make
                    </label>
                    <input
                      type="text"
                      id="make"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g. Toyota"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="model" className="mb-2 block text-sm font-medium text-gray-900">
                      Model
                    </label>
                    <input
                      type="text"
                      id="model"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g. Camry"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <label htmlFor="year" className="mb-2 block text-sm font-medium text-gray-900">
                      Year
                    </label>
                    <input
                      type="number"
                      id="year"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g. 2023"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mileage" className="mb-2 block text-sm font-medium text-gray-900">
                      Mileage
                    </label>
                    <input
                      type="number"
                      id="mileage"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g. 15000"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-900">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      id="price"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g. 25000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Describe your vehicle..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900">
                    Vehicle Photos
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="car-images" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          JPG, PNG or WEBP (MAX. 5MB per image)
                        </p>
                      </div>
                      <input id="car-images" type="file" className="hidden" multiple accept="image/*" />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  List Vehicle
                </button>
              </form>
            </motion.div>
          )}

          {/* Crypto Form */}
          {activeType === "crypto" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <h2 className="mb-6 text-2xl font-semibold">Cryptocurrency Information</h2>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="crypto-type" className="mb-2 block text-sm font-medium text-gray-900">
                      Cryptocurrency
                    </label>
                    <select
                      id="crypto-type"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select a cryptocurrency</option>
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="SOL">Solana (SOL)</option>
                      <option value="ADA">Cardano (ADA)</option>
                      <option value="XRP">Ripple (XRP)</option>
                      <option value="DOT">Polkadot (DOT)</option>
                      <option value="DOGE">Dogecoin (DOGE)</option>
                      <option value="AVAX">Avalanche (AVAX)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium text-gray-900">
                      Amount
                    </label>
                    <input
                      type="number"
                      id="amount"
                      step="0.000001"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="e.g. 0.5"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="price-per-unit" className="mb-2 block text-sm font-medium text-gray-900">
                      Price per Unit (USD)
                    </label>
                    <input
                      type="number"
                      id="price-per-unit"
                      step="0.01"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="e.g. 60000"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="payment-method" className="mb-2 block text-sm font-medium text-gray-900">
                      Payment Method
                    </label>
                    <select
                      id="payment-method"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select payment method</option>
                      <option value="bank">Bank Transfer</option>
                      <option value="paypal">PayPal</option>
                      <option value="cash">Cash in Person</option>
                      <option value="crypto">Other Cryptocurrency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="crypto-description" className="mb-2 block text-sm font-medium text-gray-900">
                    Description
                  </label>
                  <textarea
                    id="crypto-description"
                    rows={4}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Additional information about your offer..."
                  ></textarea>
                </div>

                <div>
                  <h3 className="mb-4 text-base font-medium text-gray-900">Verification</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-gray-700">
                        You will need to verify your identity before completing a transaction.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-gray-700">
                        We use escrow services to ensure secure transactions.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-gray-700">
                        A 2% platform fee applies to all successful transactions.
                      </span>
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-purple-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  List Cryptocurrency
                </button>
              </form>
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              By listing your assets, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
