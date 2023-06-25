import Image from "next/image"
import { BsPeople } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"

const eventsInHCM = [
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

const eventsElseWhere = [
  {
    name: "Hội thảo CFO & Microsoft",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F539977649%2F247139433381%2F1%2Foriginal.20230621-045559?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C107%2C3402%2C1701&s=2020b57cadb4554cc055de7d4fdf3e1d",
    date: "20 Tháng 7, 15:30",
    location: "Novotel Saigon Centre • Hồ Chí Minh, Thành phố Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "TechData Foundation",
    follower: "5.8k",
  },
  {
    name: "TRẠI KINH DOANH ĐỘT PHÁ - TP. HCM (4,5,6/07/2023)",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F535498699%2F289536571328%2F1%2Foriginal.20200926-025339?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C44%2C5568%2C2784&s=8021042900ea9caea5e234e3ce411214",
    date: "4 Tháng 7, 15:30",
    location: "Queen Plaza Kỳ Hòa • TP. HCM., TP. HCM",
    price: 12.5,
    eventOrganizer: "Luật sư PHẠM THÀNH LONG",
    follower: "2.1k",
  },
  {
    name: "STANLEY COLLEGE - Agent Event (HCMC)",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F534656789%2F414681225445%2F1%2Foriginal.20230613-030837?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=108%2C0%2C1784%2C892&s=31cd75c143272e5ecb2a0a823d76c603",
    date: "4 Tháng 7, 15:30",
    location:
      "Én Restaurant & Event Space, M Floor • District 3, Thành phố Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "Stanley College",
    follower: "5.1k",
  },
  {
    name: "Hold A Drink hosted by Sors Digital Assets",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F541510819%2F1367628681803%2F1%2Foriginal.20230623-032203?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=b276c42d76f2b7c8e56e1feeea3a1634",
    date: "4 Tháng 7, 15:30",
    location:
      "Soul Classic Rooftop Bar • Ho Chi Minh City, Thành phố Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "Sors Digital Assets",
    follower: "384",
  },
  {
    name: "Monthly Podcast Meetup",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F474969009%2F485188543831%2F1%2Foriginal.20230322-113203?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=1c9c9506a97b57015567af3ed9b5ef60",
    date: "4 Tháng 7, 15:30",
    location: "Brick & Barrel • Thành phố Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "Seven Million Bikes",
    follower: "2.4k",
  },
  {
    name: "How to Improve Your Memory - Ho Chi Minh City",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F409307569%2F768571642273%2F1%2Foriginal.jpg?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1d95bd846f26a57d239c71c7115b12ae",
    date: "4 Tháng 7, 15:30",
    location: "Ho Chi Minh City • Ho Chi Minh City, Ho Chi Minh City",
    price: 12.5,
    eventOrganizer: "Seven Million Bikes",
    follower: "2.6k",
  },
  {
    name: "Switch Up Accelerator Roadshow: Web3 Leaders Meetup",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F540053329%2F1616279065313%2F1%2Foriginal.20230621-085258?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C79%2C2666%2C1333&s=2f366f6062588cc8b0a0ab6028999fed",
    date: "4 Tháng 7, 15:30",
    location: "Ho Chi Minh City • Ho Chi Minh, Ho Chi Minh City",
    price: 12.5,
    eventOrganizer: "VNB Foundation",
    follower: "7.5k",
  },
  {
    name: "[Tech Meetup] NextGen SAP: Revolutionizing Enterprise Technology Solution",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F538387179%2F1371364057673%2F1%2Foriginal.20230619-041119?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C46%2C1466%2C733&s=35fbcfb75e06a559331a8ef164e2f5bd",
    date: "4 Tháng 7, 15:30",
    location:
      "Callary Wedding & Events - Trung tâm Tiệc cưới và Hội nghị Callary • Hồ Chí Minh, Thành phố Hồ Chí Minh",
    price: 12.5,
    eventOrganizer: "FPT Software",
    follower: "7.5k",
  },
  {
    name: "Speed Reading Crash Course - Ho Chi Minh City",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F410563859%2F768571642273%2F1%2Foriginal.jpg?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=83fe60833c022f43006409e42822c54d",
    date: "4 Tháng 7, 15:30",
    location: "Ho Chi Minh City • Ho Chi Minh City, Ho Chi Minh City",
    price: 2.99,
    eventOrganizer: "Iris Reading",
    follower: "293",
  },
  {
    name: "Mindfulness Meditation: Wednesday Pause - Ho Chi Minh",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F158535789%2F262434237776%2F1%2Foriginal.20210929-234616?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C114%2C960%2C480&s=11a093f24ac47b7fd6d01d8a2d163b73",
    date: "4 Tháng 7, 15:30",
    location:
      "Zoom: www.bit.ly/wednesdaypause | or ID: 89120180107  | Password: kindermind • Ho Chi Minh",
    price: 2.99,
    eventOrganizer: "Noelle Lim",
    follower: "293",
  },
  {
    name: "Mindfulness Meditation: Wednesday Pause - Ho Chi Minh",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F409937859%2F768571642273%2F1%2Foriginal.jpg?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=fd77d5acc53850ba75601510f6dbe318",
    date: "4 Tháng 7, 15:30",
    location: "Effective Note-Taking- Ho Chi Minh City",
    price: 2.99,
    eventOrganizer: "Iris Reading",
    follower: "293",
  },
  {
    name: "International Finance Expo & Fintech Summit (Ho Chi Minh City)",
    imgSrc:
      "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F453560019%2F700916941403%2F1%2Foriginal.20230224-015851?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C4502%2C2251&s=8ab9adcae17c3e11f49764433aa36a50",
    date: "4 Tháng 7, 15:30",
    location: "18 Đ. An D. Vương • Ho Chi Minh City, Thành phố Hồ Chí Minh",
    price: 2.99,
    eventOrganizer: "FiFin",
    follower: "293",
  },
]

export function EventContentInLocation() {
  return (
    <div className="w-full flex flex-col py-2 px-8 bg-white gap-4">
      <span className="text-2xl text-gray-700 font-semibold">
        Sự kiện diễn ra ở Hồ Chí Minh
      </span>
      <div className="w-full grid grid-cols-4 gap-8 gap-y-8 justify-between">
        {eventsInHCM.map((event) => (
          <div
            key={event.name}
            className="hover:shadow-2xl hover:rounded-lg 
            cursor-pointer group transition-all ease-in-out
            duration-150"
          >
            <div className="w-full h-36 rounded-lg relative">
              <Image
                src={event.imgSrc}
                fill={true}
                alt="event image"
                className="group-hover:rounded-t-lg
                transition-all ease-in-out duration-150
                "
              />
              <div
                className="p-3 absolute rounded-full 
                transition-all ease-in-out duration-300
                right-3 bottom-0 bg-white translate-y-1/2
                border border-gray-300 hover:bg-gray-100"
              >
                <AiOutlineHeart className="w-5 h-5" />
              </div>
            </div>
            <div className="w-full p-4 mt-4 flex flex-col gap-2 relative">
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

export function EventContentElseWhere() {
  return (
    <div className="w-full flex flex-col py-2 mt-4 px-8 bg-white gap-4">
      <span className="text-2xl py-4 text-gray-700 font-semibold">
        Nhiều sự kiện khác
      </span>
      <div className="w-full grid grid-cols-4 gap-8 gap-y-8 justify-between">
        {eventsElseWhere.map((event) => (
          <div
            key={event.name}
            className="hover:shadow-2xl hover:rounded-lg 
            cursor-pointer group transition-all ease-in-out
            duration-150"
          >
            <div className="w-full h-36 rounded-lg relative">
              <Image
                src={event.imgSrc}
                fill={true}
                alt="event image"
                className="group-hover:rounded-t-lg
                transition-all ease-in-out duration-150
                "
              />
              <div
                className="p-3 absolute rounded-full 
                transition-all ease-in-out duration-300
                right-3 bottom-0 bg-white translate-y-1/2
                border border-gray-300 hover:bg-gray-100"
              >
                <AiOutlineHeart className="w-5 h-5" />
              </div>
            </div>
            <div className="w-full p-4 mt-4 flex flex-col gap-2 relative">
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
