'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode')
    setIsDarkMode(darkModePreference === 'true')
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/offers', label: 'Offers' },
    { href: '/condidateur', label: 'Condidateur' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 fixed w-full z-10 shadow-lg mb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-8" src="/placeholder.svg?height=32&width=32" alt="Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === link.href
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                        : 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>




          <div className="hidden md:flex space-x-4">
            <Link href="/login">
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
                Register
              </button>
            </Link>
          </div>


          <div className="hidden md:block">
            <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>


          <div className=" flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.href
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-300 dark:border-gray-700">
        <div className="mt-4">
            <Link href="/login">
              <button className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="w-full mt-2 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700">
                Register
              </button>
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className="mt-1 block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
         
        </div>
      </div>
    </nav>
  )
}

export default Navbar
