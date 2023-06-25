"use client"

import Link from "next/link"
import { BiHome, BiBookmarks } from "react-icons/bi"
import { FaUserFriends } from "react-icons/fa"
import { BsCalendarDate } from "react-icons/bs"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

const navItems = [
  {
    name: "Home",
    icon: BiHome,
    path: "/",
  },
  {
    name: "Event",
    icon: BsCalendarDate,
    path: "/event",
  },
  {
    name: "Connection",
    icon: FaUserFriends,
    path: "/connection",
  },
  {
    name: "bookmarks",
    icon: BiBookmarks,
    path: "/bookmarks",
  },
]

export default function MainNavBar() {
  const pathname = usePathname()

  return (
    <nav className="flex w-[40%] h-full items-center justify-around">
      {navItems.map((item) => (
        <div
          key={item.name}
          className={twMerge(
            "h-[90%] w-32 border border-white",
            pathname === item.path ? null : "hover:rounded-xl hover:bg-gray-100"
          )}
        >
          <Link
            className="flex items-center justify-center h-[95%]"
            href={item.path}
          >
            <item.icon
              className={twMerge(
                "w-[28px] h-[28px]",
                pathname === item.path ? "fill-blue-500" : "fill-gray-500"
              )}
            />
          </Link>
          <div
            className={twMerge(
              "w-full h-[10%] rounded-xl bg-blue-500 transition-all ease-in-out duration-150",
              pathname === item.path ? null : "invisible"
            )}
          ></div>
        </div>
      ))}
    </nav>
  )
}
