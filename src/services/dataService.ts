"use client";

// Type definitions
export interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  year: number;
  mileage: string;
  transmission: string;
  fuelType: string;
  rating?: number;
  location?: string;
  description?: string;
}
export interface Crypto {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: string;
  volume: string;
  marketCap: string;
  image: string;
  trend: "up" | "down";
  chart?: string;
  description?: string;
}

// Storage keys
const CARS_STORAGE_KEY = "autocrypto_cars";
const CRYPTO_STORAGE_KEY = "autocrypto_crypto";

// Initial car data
const initialCars: Car[] = [{
  id: 1,
  name: "Tesla Model S Plaid",
  price: "$129,990",
  image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
  year: 2023,
  mileage: "0 miles",
  transmission: "Automatic",
  fuelType: "Electric",
  rating: 4.9,
  location: "San Francisco, CA",
  description: "Experience the future of driving with the Tesla Model S Plaid. This all-electric luxury sedan offers unmatched performance with its tri-motor setup, delivering 1,020 horsepower and a 0-60 mph time of just 1.99 seconds."
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
  location: "Los Angeles, CA",
  description: "The BMW M4 Competition is the pinnacle of performance in the 4 Series lineup. With its twin-turbocharged 3.0-liter inline-six engine producing 503 horsepower and 479 lb-ft of torque, it offers exhilarating performance and precise handling."
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
  location: "Miami, FL",
  description: "The Mercedes-Benz S-Class represents the pinnacle of luxury and technology. This flagship sedan offers a sumptuous interior, cutting-edge technology, and a smooth, refined driving experience that sets the standard for luxury vehicles."
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
  location: "Seattle, WA",
  description: "The Audi RS e-tron GT combines electric performance with Audi's luxury and precision. This all-electric grand tourer delivers 637 horsepower and can accelerate from 0-60 mph in just 3.1 seconds while providing a range of up to 232 miles."
}];

// Initial crypto data
const initialCryptos: Crypto[] = [{
  id: 1,
  name: "Bitcoin",
  symbol: "BTC",
  price: "$64,831.25",
  change: "+2.4%",
  volume: "$42.8B",
  marketCap: "$1.26T",
  image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop",
  trend: "up",
  chart: "https://picsum.photos/200",
  description: "Bitcoin is the world's first cryptocurrency, a form of electronic cash. It is the first decentralized digital currency: the system works without a central bank or single administrator."
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
  chart: "https://picsum.photos/200",
  description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin."
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
  chart: "https://picsum.photos/200",
  description: "Cardano is a proof-of-stake blockchain platform that says its goal is to allow 'changemakers, innovators and visionaries' to bring about positive global change. It was founded by Charles Hoskinson, co-founder of Ethereum."
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
  chart: "https://picsum.photos/200",
  description: "Solana is a highly functional open source project that implements a new, permissionless, high-performance blockchain. It provides fast transaction processing and uses a unique method of ordering transactions to improve its speed."
}];

// Helper function to safely access localStorage
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  }
};

// Car data service
export const carService = {
  getCars: (): Car[] => {
    const storedCars = safeLocalStorage.getItem(CARS_STORAGE_KEY);
    if (storedCars) {
      return JSON.parse(storedCars);
    }

    // Initialize with default data if empty
    safeLocalStorage.setItem(CARS_STORAGE_KEY, JSON.stringify(initialCars));
    return initialCars;
  },
  getCar: (id: number): Car | undefined => {
    const cars = carService.getCars();
    return cars.find(car => car.id === id);
  },
  addCar: (car: Omit<Car, "id">): Car => {
    const cars = carService.getCars();
    const newCar = {
      ...car,
      id: cars.length > 0 ? Math.max(...cars.map(c => c.id)) + 1 : 1
    };
    cars.push(newCar);
    safeLocalStorage.setItem(CARS_STORAGE_KEY, JSON.stringify(cars));
    return newCar;
  },
  updateCar: (car: Car): Car | undefined => {
    const cars = carService.getCars();
    const index = cars.findIndex(c => c.id === car.id);
    if (index !== -1) {
      cars[index] = car;
      safeLocalStorage.setItem(CARS_STORAGE_KEY, JSON.stringify(cars));
      return car;
    }
    return undefined;
  },
  deleteCar: (id: number): boolean => {
    const cars = carService.getCars();
    const filteredCars = cars.filter(car => car.id !== id);
    if (filteredCars.length < cars.length) {
      safeLocalStorage.setItem(CARS_STORAGE_KEY, JSON.stringify(filteredCars));
      return true;
    }
    return false;
  }
};

// Crypto data service
export const cryptoService = {
  getCryptos: (): Crypto[] => {
    const storedCryptos = safeLocalStorage.getItem(CRYPTO_STORAGE_KEY);
    if (storedCryptos) {
      return JSON.parse(storedCryptos);
    }

    // Initialize with default data if empty
    safeLocalStorage.setItem(CRYPTO_STORAGE_KEY, JSON.stringify(initialCryptos));
    return initialCryptos;
  },
  getCrypto: (id: number): Crypto | undefined => {
    const cryptos = cryptoService.getCryptos();
    return cryptos.find(crypto => crypto.id === id);
  },
  addCrypto: (crypto: Omit<Crypto, "id">): Crypto => {
    const cryptos = cryptoService.getCryptos();
    const newCrypto = {
      ...crypto,
      id: cryptos.length > 0 ? Math.max(...cryptos.map(c => c.id)) + 1 : 1
    };
    cryptos.push(newCrypto);
    safeLocalStorage.setItem(CRYPTO_STORAGE_KEY, JSON.stringify(cryptos));
    return newCrypto;
  },
  updateCrypto: (crypto: Crypto): Crypto | undefined => {
    const cryptos = cryptoService.getCryptos();
    const index = cryptos.findIndex(c => c.id === crypto.id);
    if (index !== -1) {
      cryptos[index] = crypto;
      safeLocalStorage.setItem(CRYPTO_STORAGE_KEY, JSON.stringify(cryptos));
      return crypto;
    }
    return undefined;
  },
  deleteCrypto: (id: number): boolean => {
    const cryptos = cryptoService.getCryptos();
    const filteredCryptos = cryptos.filter(crypto => crypto.id !== id);
    if (filteredCryptos.length < cryptos.length) {
      safeLocalStorage.setItem(CRYPTO_STORAGE_KEY, JSON.stringify(filteredCryptos));
      return true;
    }
    return false;
  }
};