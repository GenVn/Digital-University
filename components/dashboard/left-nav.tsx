import Link from "next/link"
import CalendarIconSrc from "@/assets/img/icon-calendar.png"
import MapsIconSrc from "@/assets/img/icon-maps.png"
import PodcastsIconSrc from "@/assets/img/icon-podcasts.png"
import NoteIconSrc from "@/assets/img/icon-note.png"
import JobIconSrc from "@/assets/img/icon-job.png"
import ChatIconSrc from "@/assets/img/icon-chat.png"
import CompanyIconSrc from "@/assets/img/icon-company.png"
import CollectionIconSrc from "@/assets/img/icon-collection.png"
import Image, { StaticImageData } from "next/image"

interface INavItem {
  name: string
  iconSrc: StaticImageData
  route: string
}

const navItems: INavItem[] = [
  {
    name: "Sự kiện",
    iconSrc: CalendarIconSrc,
    route: "/event",
  },
  {
    name: "Bản đồ",
    iconSrc: MapsIconSrc,
    route: "/career-map",
  },
  {
    name: "Podcasts",
    iconSrc: PodcastsIconSrc,
    route: "/podcasts",
  },
  {
    name: "Ghi chú",
    iconSrc: NoteIconSrc,
    route: "/note",
  },
  {
    name: "Công ty",
    iconSrc: CompanyIconSrc,
    route: "/company",
  },
  {
    name: "Công việc",
    iconSrc: JobIconSrc,
    route: "/job",
  },
  {
    name: "Chat",
    iconSrc: ChatIconSrc,
    route: "/chat",
  },
  {
    name: "Bộ sưu tập",
    iconSrc: CollectionIconSrc,
    route: "/collection",
  },
]

export default function LeftNav() {
  return (
    <nav className="w-full flex flex-col gap-2 rounded-lg ">
      <Link
        href={"/profile"}
        className="flex gap-4 items-center w-full px-4 py-2 rounded-xl hover:bg-gray-200
          transition-all ease-in-out duration-300"
      >
        <Image
          className="rounded-full"
          src={"https://randomuser.me/api/portraits/men/45.jpg"}
          width={28}
          height={28}
          alt="user icon"
        />
        <span className="font-semibold text-base text-gray-600">Alex</span>
      </Link>

      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.route}
          className="flex gap-4 items-center w-full px-4 py-2 rounded-xl hover:bg-gray-200
          transition-all ease-in-out duration-300"
        >
          <Image
            src={item.iconSrc}
            width={28}
            height={28}
            alt={`${item.name} icon`}
          />
          <span className="font-semibold text-base text-gray-600">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  )
}
