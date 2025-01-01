'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, ShoppingCart, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

const menuItems = [
  { id: 1, label: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
  { id: 2, label: "Users", icon: Users, link: "/dashboard/users" },
  { id: 3, label: "Offers", icon: ShoppingCart, link: "/dashboard/Offers" },
  { id: 4, label: "Settings", icon: Settings, link: "/dashboard/settings" },
]

export default function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  const [isCollapsible, setIsCollapsible] = useState(false)

  const pathname = usePathname()

  const activeMenu = menuItems.find(menu => pathname.includes(menu.link))

  const wrapperClasses = `h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col ${
    toggleCollapse ? "w-20" : "w-80"
  }`

  const collapseIconClasses = `p-4 rounded bg-light-lighter absolute right-0 ${
    toggleCollapse ? "-right-6" : "-right-6"
  }`

  const getNavItemClasses = (menu) => {
    return `flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap ${
      activeMenu?.id === menu.id ? "bg-light-lighter" : ""
    }`
  }

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible)
  }

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse)
  }

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <span
              className={`mt-2 text-lg font-medium text-text ${
                toggleCollapse ? "hidden" : ""
              }`}
            >
              Logo
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              {toggleCollapse ? <ChevronRight /> : <ChevronLeft />}
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu)
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link} className="flex py-4 px-3 items-center w-full h-full">
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={`text-md font-medium text-text-light`}
                    >
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

