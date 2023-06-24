import Image from "next/image"
import { BsPeople } from "react-icons/bs"

const eventDatas = [
  {
    name: "Founders Meetup: Vietnam",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F541572059%2F1343780716473%2F1%2Foriginal.20230623-071904?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=c69cc122d86beb0ee1894123eeb33eae",
    date: "28 Tháng 6, 15:30",
    location: "The Sentry - Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "Tech in Asia",
    follower: "5.8k",
  },
  {
    name: "KlayVie Meetup - Shaping the Future of Tech",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F532562209%2F1585510109823%2F1%2Foriginal.20230609-044115?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C43%2C8000%2C4000&s=904089b74fd1d5d627c0449f2d76bff9",
    date: "6 Tháng 7, 21:00",
    location: "Capella Parkview • Hồ Chí Minh",
    price: 5.0,
    eventOrganizer: "KlayVie Foundation",
    follower: "1.2k",
  },
  {
    name: "DevX Global Tour Polygon Connect - APAC",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F534228179%2F701884336093%2F1%2Foriginal.20230612-163957?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C3240%2C1620&s=0f043826b70fa2009748dba39afcf39b",
    date: "5 Tháng 7, 13:00",
    location:
      "Thiskyhall Sala Convention Center, Ballroom 4 (entry via Mai Chi Tho Street) • Thủ Thiêm, Thành phố Hồ Chí Minh",
    price: 8.5,
    eventOrganizer: "Polygon Labs",
    follower: "20.8k",
  },
  {
    name: "NEAR APAC 2023 - Unlimited Future",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F516555689%2F1134384159683%2F1%2Foriginal.20230517-082233?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=3f4cc0f811fbf5971da803a0303cffe1",
    date: "2 Tháng 7, 9:00",
    location:
      "Thiskyhall Sala Convention Center • Thủ Thiêm, Thành phố Hồ Chí Minh",
    price: 10.2,
    eventOrganizer: "GFI - Golden Financial Innovation",
    follower: "12.8k",
  },
  {
    name: "LaunchSpace: Blink Pitch With Top Global VCs & Foundations",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F538360149%2F1614593417803%2F1%2Foriginal.20230619-022953?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=23%2C175%2C2688%2C1344&s=e1c1037fee0291e56f4e6009ab9db022",
    date: "10 Tháng 7, 14:30",
    location: "LaunchSpace: Blink Pitch With Top Global VCs & Foundations",
    price: 12.5,
    eventOrganizer: "IPX Foundation",
    follower: "5.8k",
  },
  {
    name: "Chiếu phim Bluey tại TP Hồ Chí Minh/Bluey Screenings in Ho Chi Minh City",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F539043809%2F310039427666%2F1%2Foriginal.20230620-012343?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C940%2C470&s=07f5aaba1c92fadf708ec86b6dc343a3",
    date: "5 Tháng 7, 18:30",
    location:
      "Institut d Echanges Culturels avec la France • Ho Chi Minh City, Thành phố Hồ Chí Minh",
    price: 7.5,
    eventOrganizer: "Australian Embassy Vietnam",
    follower: "5.8k",
  },
  {
    name: "Fin Voyage! Set Sail to Finland",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F530099939%2F581860147073%2F1%2Foriginal.20230606-105741?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e69373b2b438c502cd35f8778d334da0",
    date: "5 Tháng 7, 18:30",
    location: "Luxury Palace Restaurant • Hồ Chí Minh, Thành phố Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "Finest Future",
    follower: "5.8k",
  },
  {
    name: "The Financial Investment Expo 2023 (Vietnam)",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F508191229%2F1525449024763%2F1%2Foriginal.20230505-025853?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C43%2C1080%2C540&s=918a00bb7a95350d174116daae1c6a28",
    date: "5 Tháng 7, 18:30",
    location:
      "Sheraton Saigon Hotel & Towers, Ho Chi Minh City • Ho Chi Minh City, Thành phố Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "TFIEXPO",
    follower: "5.8k",
  },
]

export default function EventContent() {
  return (
    <div className="w-full flex flex-col py-2 px-8 bg-white gap-4">
      <span className="text-2xl text-gray-700 font-semibold">
        Sự kiện diễn ra ở Hồ Chí Minh
      </span>
      <div className="w-full grid grid-cols-4 gap-8 gap-y-8 justify-between">
        {eventDatas.map((event) => (
          <div
            key={event.name}
            className="hover:shadow-2xl hover:rounded-lg cursor-pointer gorup"
          >
            <div className="w-full h-36 rounded-lg relative">
              <Image
                src={event.imgSrc}
                fill={true}
                alt="event image"
                className="group-hover:rounded-lg"
              />
            </div>
            <div className="w-full p-4 mt-4 flex flex-col gap-2">
              <span className="text-lg text-gray-800 font-semibold">
                {event.name}
              </span>
              <span className="text-base text-red-600">{event.date}</span>
              <div className="text-sm text-gray-500 flex flex-col">
                <span className="line-clamp-1">{event.location}</span>
                <span>Start at {`${event.price}$`}</span>
              </div>
              <span className="text-sm text-gray-800 font-semibold">
                {event.eventOrganizer}
              </span>
              <span className="flex gap-2 items-center">
                <BsPeople className="w-4 h-4 fill-gray-800" />
                <p className="text-sm text-gray-800 font-semibold">
                  {`${event.follower} followers`}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
