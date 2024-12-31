'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Briefcase, MapPin, Building, ArrowLeft } from 'lucide-react'



export default function NotFound() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/offers?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Oops! This job posting has vanished</h2>
          <p className="mt-2 text-lg text-gray-600">But don't worry, we've got plenty of other opportunities for you!</p>
        </div>

        <div className="mt-8">
          <form onSubmit={handleSearch} className="mt-2 flex rounded-md shadow-sm">
            <input
              type="text"
              required
              className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
              placeholder="Search for your dream job..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

     

        <div className="flex justify-center space-x-4 mt-8">
          <Link href="/" className="text-base font-medium text-blue-600 hover:text-blue-500 flex items-center">
            <Search className="h-5 w-5 mr-2" />
            Explore All Jobs
          </Link>
          <button onClick={() => router.back()} className="text-base font-medium text-blue-600 hover:text-blue-500 flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

