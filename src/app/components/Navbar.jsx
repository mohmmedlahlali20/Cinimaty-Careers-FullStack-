'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-8" src="/placeholder.svg?height=32&width=32" alt="Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/services" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/contact" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/services" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/contact" className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-300 dark:border-gray-700">
            <button
              onClick={toggleDarkMode}
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

