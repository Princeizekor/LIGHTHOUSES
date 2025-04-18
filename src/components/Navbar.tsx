"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, Search, Car as CarIcon, Bitcoin, LogIn, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Cars", href: "/cars" },
  { name: "Crypto", href: "/crypto" },
  { name: "Sell", href: "/sell" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-bold text-blue-600">LIGHTHOUSE</span>
            <span className="ml-1 text-lg font-bold text-purple-600">AUTO & CRYPTO</span>
          </Link>
          <div className="ml-10 hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden items-center space-x-6 md:flex">
          <button className="flex items-center text-gray-700 hover:text-blue-600">
            {/* <Search className="h-5 w-5" /> */}
          </button>
          <Link
            href="/login"
            className="flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
          >
            <LogIn className="mr-1.5 h-4 w-4" />
            Log In
          </Link>
          <Link
            href="/signup"
            className="flex items-center rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          >
            {/* <Menu className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 w-full max-w-xs overflow-y-auto bg-white px-6 py-6">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-blue-600">LIGHTHOUSE</span>
              <span className="ml-1 text-lg font-bold text-purple-600">AUTO & CRYPTO</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-1 text-gray-700"
            >
              {/* <X className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="mt-8 flex flex-col space-y-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center text-base font-medium",
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name === "Cars" && <CarIcon className="mr-2 h-5 w-5" />}
                {item.name === "Crypto" && <Bitcoin className="mr-2 h-5 w-5" />}
                {item.name === "Sell" && <Package className="mr-2 h-5 w-5" />}
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-10 space-y-4">
            <Link
              href="/login"
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Log In
            </Link>
            <Link
              href="/signup"
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="mr-2 h-4 w-4" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
