"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Fuel, CarFront, Star, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Car as CarType } from "@/services/dataService";

interface CarProps {
  car: CarType;
  featured?: boolean;
  showRating?: boolean;
  showActions?: boolean;
  className?: string;
}

export default function CarComponent({
  car,
  featured = false,
  showRating = true,
  showActions = true,
  className,
}: CarProps) {
  const [isFavorite, setIsFavorite] = useState(() => {
    // Check if this car is in favorites
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favoritesCars") || "[]");
      return favorites.some((favId: number) => favId === car.id);
    }
    return false;
  });

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favoritesCars") || "[]");
      
      let newFavorites;
      if (isFavorite) {
        newFavorites = favorites.filter((id: number) => id !== car.id);
      } else {
        newFavorites = [...favorites, car.id];
      }
      
      localStorage.setItem("favoritesCars", JSON.stringify(newFavorites));
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg",
        featured ? "border border-gray-200" : "",
        className
      )}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {showRating && car.rating && (
          <div className="absolute right-3 top-3 flex items-center rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow">
            <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
            {car.rating}
          </div>
        )}
        {showActions && (
          <button
            onClick={toggleFavorite}
            className="absolute left-3 top-3 rounded-full bg-white/90 p-2 text-gray-700 shadow transition-colors hover:text-red-500"
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                isFavorite ? "fill-red-500 text-red-500" : ""
              )}
            />
          </button>
        )}
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
          <span className="text-lg font-bold text-blue-600">{car.price}</span>
        </div>

        <div className="mb-4 flex items-center text-sm text-gray-500">
          <span className="mr-3 flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {car.year}
          </span>
          <span className="flex items-center">
            <Fuel className="mr-1 h-4 w-4" />
            {car.fuelType}
          </span>
        </div>

        <div className="mb-5 flex items-center text-sm text-gray-500">
          <CarFront className="mr-1 h-4 w-4" />
          <span>{car.transmission} • {car.mileage}</span>
        </div>

        <div className="flex items-center justify-between">
          {car.location && (
            <span className="text-xs text-gray-500">{car.location}</span>
          )}
          <Link
            href={`/cars/${car.id}`}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
