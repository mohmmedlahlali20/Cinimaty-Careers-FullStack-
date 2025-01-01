'use client'

import { useState } from 'react'
import { Bell, Search, Menu } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'


export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost" 
              size="icon"
              className="mr-2 md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 text-gray-900 bg-gray-50 rounded-full focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <Button variant="ghost" size="icon" className="ml-3">
                <Bell className="h-6 w-6" />
              </Button>
              <div className="ml-3 relative">
                <div>
                  <Button variant="ghost" size="icon">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

