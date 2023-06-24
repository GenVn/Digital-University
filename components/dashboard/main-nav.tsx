"use client"

import Link from "next/link"
import { BiHome, BiBookmarks } from "react-icons/bi"
import { FaUserFriends } from "react-icons/fa"
import { BsCalendarDate } from "react-icons/bs"

export default function MainNavBar() {
  return (
    <nav className="flex w-[40%] h-full items-center justify-around">
      <div className="h-[90%] w-32 border border-white hover:rounded-xl hover:bg-gray-100">
        <Link className="flex items-center justify-center h-[95%]" href={"/"}>
          <BiHome className="w-[28px] h-[28px] fill-gray-500" />
        </Link>
        <div className="invisible w-full h-[5%] bg-green-400"></div>
      </div>
      <div className="h-[90%] w-32 border border-white hover:rounded-xl hover:bg-gray-100">
        <Link className="flex items-center justify-center h-[95%]" href={"/"}>
          <FaUserFriends className="w-[28px] h-[28px] fill-gray-500" />
        </Link>
        <div className="invisible w-full h-[5%] bg-green-400"></div>
      </div>
      <div className="h-[90%] w-32 border border-white hover:rounded-xl hover:bg-gray-100">
        <Link
          className="flex items-center justify-center h-[95%]"
          href={"/event"}
        >
          <BsCalendarDate className="w-[28px] h-[28px] fill-gray-500" />
        </Link>
        <div className="invisible w-full h-[5%] bg-green-400"></div>
      </div>
      <div className="h-[90%] w-32 border border-white hover:rounded-xl hover:bg-gray-100">
        <Link className="flex items-center justify-center h-[95%]" href={"/"}>
          <BiBookmarks className="w-[28px] h-[28px] fill-gray-500" />
        </Link>
        <div className="invisible w-full h-[5%] bg-green-400"></div>
      </div>
    </nav>
  )
}
