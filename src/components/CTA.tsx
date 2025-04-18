import Link from "next/link";
import { ArrowUpRight, Upload } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to sell your assets?</h2>
          <p className="mb-8 text-lg text-gray-600">
            Whether you're looking to sell your vehicle or trade cryptocurrency, we provide the platform to connect you with serious buyers.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/sell/car"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Upload className="mr-2 h-4 w-4" />
              List Your Vehicle
            </Link>
            <Link
              href="/sell/crypto"
              className="inline-flex items-center rounded-lg bg-purple-600 px-5 py-3 font-medium text-white transition-colors hover:bg-purple-700"
            >
              <Upload className="mr-2 h-4 w-4" />
              List Cryptocurrency
            </Link>
          </div>
          <div className="mt-8">
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600"
            >
              Learn how our platform works
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
