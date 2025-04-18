import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold text-blue-400">LIGHTHOUSE</span>
              <span className="ml-1 text-lg font-bold text-purple-400">AUTO & CRYPTO</span>
            </Link>
            <p className="mt-4 text-sm">
              The premier marketplace for automotive and cryptocurrency enthusiasts. Buy, sell, and trade with confidence.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Cars", "Crypto", "Sell", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm transition-colors hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Resources
            </h3>
            <ul className="space-y-2">
              {["How It Works", "Pricing", "FAQs", "Blog", "Support"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm transition-colors hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Subscribe to our newsletter
            </h3>
            <p className="mb-4 text-sm">
              Get the latest updates on market trends, new listings, and exclusive offers.
            </p>
            <form className="mt-4">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-l-md border-0 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {/* <Mail size={16} /> */}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-xs">
            &copy; {new Date().getFullYear()} LIGHTHOUSE AUTO & CRYPTO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
