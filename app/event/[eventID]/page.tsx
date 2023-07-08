import Image from "next/image"
import { AiOutlineCalendar, AiOutlineHeart } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"
import { BsClockHistory, BsTicketDetailed } from "react-icons/bs"
import { FaRegShareSquare } from "react-icons/fa"

const eventsInHCM = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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

interface EventDetailProps {
  params: {
    eventID: string
  }
}

export default function EventDetailPage({ params }: EventDetailProps) {
  return (
    <div className="w-full bg-white min-h-screen p-4 rounded-md">
      <div
        className="w-full relative h-[300px] rounded-lg
      "
      >
        <Image
          src={
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F516555689%2F1134384159683%2F1%2Foriginal.20230517-082233?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=2b793be5890e8475a97f2bc7f11a8dda"
          }
          alt="Image Event"
          fill={true}
          className="rounded-lg"
        />
      </div>
      <div className="flex mt-4">
        {/* left info */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Chủ nhật, 2 Tháng 7</p>
            <h2 className="text-4xl font-bold">
              NEAR APAC 2023 - Unlimited Future
            </h2>
          </div>
          <p className="text-gray-600 text-sm font-semibold">
            Unlimited Future - Khám phá tương lai không giới hạn cùng Near APAC
          </p>
          <div className="w-full py-4 px-8 bg-gray-200 rounded-lg flex gap-4">
            <div className="w-[48px] h-[48px] bg-white rounded-full relative">
              <Image
                src={
                  "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F375612699%2F1134384159683%2F1%2Foriginal.20221018-125000?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=494%2C496%2C3203%2C3203&s=7fee88edb2f5ffa009b18d7550d32392"
                }
                fill={true}
                alt="eventOrganizer avt"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-sm">
                GFI - Golden Financial Innovation
              </p>
              <p>604 followers</p>
            </div>
            <div className="ml-auto flex items-center justify-normal">
              <div className="py-3 px-6 bg-blue-400 font-semibold text-sm rounded-lg">
                Follow
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h2 className="font-bold text-xl">Thời gian và địa điểm</h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                  <AiOutlineCalendar className="w-6 h-6 fill-blue-600" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-base font-semibold">Thời gian sự kiện</p>
                  <p className="text-sm font-semibold text-gray-600">
                    9:30am 2 Tháng 7 - 5pm 10 Tháng 7
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                  <MdLocationOn className="w-6 h-6 fill-blue-600" />
                </div>
                <div className="flex max-w-[70%] flex-col justify-center">
                  <p className="text-base font-semibold">Địa điểm</p>
                  <p className="text-sm font-semibold text-gray-600 ">
                    Thiskyhall Sala Convention Center 10 Đường Mai Chí Thọ Thủ
                    Thiêm, Thành phố Hồ Chí Minh 71110
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h2 className="font-bold text-xl">Thông tin về sự kiện</h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                  <BsClockHistory className="w-6 h-6 fill-blue-600" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-semibold text-gray-600 ">
                    Còn lại 1 ngày 7 tiếng
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                  <BsTicketDetailed className="w-6 h-6 fill-blue-600" />
                </div>
                <div className="flex max-w-[70%] flex-col justify-center">
                  <p className="text-sm font-semibold text-gray-600 ">
                    Vé eMobile Ticket
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h2 className="font-bold text-xl">
              Unlimited Future - Khám phá tương lai không giới hạn cùng Near
              APAC
            </h2>
            <div className="text-sm font-semibold text-gray-600">
              <p>
                Sự kiện Blockchain quốc tế chính thức của NEAR Foundation tại
                khu vực Châu Á Thái Bình Dương (APAC).
              </p>
              <p>
                Với vị thế là một trong những nền tảng blockchain top đầu thế
                giới hiện nay, NEAR APAC sẽ là một sự kiện blockchain chất lượng
                và quy mô lớn nhất khu vực APAC với chuỗi hoạt động kéo dài liên
                tục từ tháng 6 đến tháng 9 năm 2023 cho nhiều đối tượng: nhà đầu
                tư, nhà phát triển, startups, doanh nghiệp web2 và web3, quỹ đầu
                tư, đơn vị truyền thông, KOL, trường đại học, sinh viên, và tất
                cả mọi người quan tâm đến công nghệ và cơ hội phát triển nghề
                nghiệp trong lĩnh vực blockchain.
              </p>
            </div>
            <h3 className="font-bold text-lg">
              Sự kiện với quy mô 8.000+ người tham gia, bao gồm:
            </h3>
            <ul className="list-disc pl-5 text-sm font-semibold text-gray-600 leading-6">
              <li>
                <p className="inline font-bold text-gray-700">100+ speaker </p>
                là những lãnh đạo ảnh hưởng ngành Blockchain của thế giới như
                NEAR Foundation, Google, Microsoft, Animoca Brands, Chainlink,
                Circle,...
              </li>
              <li>
                <p className="inline font-bold text-gray-700">
                  50+ quỹ đầu tư{" "}
                </p>
                hàng đầu thế giới trong Web 2 và Web 3
              </li>
              <li>
                <p className="inline font-bold text-gray-700">
                  1000+ developer{" "}
                </p>
                web2 & web3.
              </li>
              <li>
                <p className="inline font-bold text-gray-700">
                  100+ công ty và tập đoàn{" "}
                </p>
                công nghệ hàng đầu tại APAC.
              </li>
              <li>
                <p className="inline font-bold text-gray-700">
                  10+ trường đại học{" "}
                </p>
                công nghệ top đầu Việt Nam.
              </li>
              <li>
                <p className="inline font-bold text-gray-700">
                  20+ game studio{" "}
                </p>
                khu vực APAC
              </li>
              <li>
                <p className="inline font-bold text-gray-700">300+ dự án </p>
                khởi nghiệp web3.
              </li>
              <li>
                <p className="inline font-bold text-gray-700">
                  100+ đơn vị media{" "}
                </p>
                ở Việt Nam và quốc tế.
              </li>
              <li>
                <p className="inline font-bold text-gray-700">
                  5+ Hiệp hội blockchain{" "}
                </p>
                khu vực APAC.
              </li>
              <li>Hàng loạt Bootcamp với nhiều ngôn ngữ lập trình khác nhau</li>
              <li>Chuỗi hoạt động uni tour tại các trường đại học top đầu</li>
              <li>
                Hackathon quy mô lớn nhất tại APAC - Web3 Hackathon festival,
                cho các nhà lập trình và sáng tạo ở cả Web2 và Web3
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-600">
              và còn nhiều sự kiện khác...
            </p>
            <h3 className="font-bold text-lg">
              Đến tham dự sự kiện, bạn sẽ được:
            </h3>
            <ul className="list-disc pl-5 text-sm font-semibold text-gray-600 leading-6">
              <li>
                Cập nhật xu hướng đầu tư và kinh nghiệm phân bổ danh mục từ các
                quỹ đầu tư thành công hàng đầu ở quốc tế.
              </li>
              <li>
                Cập nhật những tiến bộ công nghệ mới nhất và những hướng phát
                triển hiệu quả cho các builder trong lĩnh vực web3..
              </li>
              <li>
                Được tham gia những bootcamp đào tạo miễn phí với nhiều ngôn ngữ
                lập trình khác nhau.
              </li>
              <li>
                Cơ hội nhận các giải thưởng hackathon lên đến hàng tỷ đồng.
              </li>
              <li>
                Được chia sẻ về xu hướng phát triển nghề nghiệp trong lĩnh vực
                web3 và cơ hội tuyển dụng ngay tại sự kiện.
              </li>
              <li>
                Được tiếp xúc với các quỹ đầu tư hàng đầu thế giới và cơ hội gọi
                vốn trực tiếp ngay tại event.
              </li>
              <li>
                Kết nối với các đơn vị truyền thông hàng đầu trong lĩnh vực để
                mang sản phẩm ra quốc tế.
              </li>
              <li>
                Trải nghiệm các công nghệ tiên tiến hàng đầu trong lĩnh vực web2
                và web3 ngay tại sự kiện.
              </li>
              <li>
                Cơ hội kết nối và mở rộng quan hệ đối tác với rất nhiều cá nhân
                và tổ chức có ảnh hưởng trong lĩnh vực.
              </li>
              <li>
                Được tham gia chương trình biểu diễn nghệ thuật đặc sắc với các
                thần tượng hot nhất hiện nay.
              </li>
              <li>
                Nhiều chương trình bốc thăm và game với tổng giải thưởng
                300.000.000 vnđ cho người tham dự trong suốt 2 ngày sự kiện.
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-600">
              Và rất nhiều giá trị khác cho người tham gia tại sự kiện…
            </p>
            <h3 className="font-bold text-lg">Thông tin sự kiện:</h3>
            <ul className="list-disc pl-5 text-sm font-semibold text-gray-600 leading-6">
              <li>
                <p className="inline font-bold text-gray-700">Thời gian: </p>
                9h30 - 17h00 ngày 09 - 10/09/2023
              </li>
              <li>
                <p className="inline font-bold text-gray-700">Địa điểm: </p>
                Lầu 5 - Thiskyhall Convention - HCMC
              </li>
              <li>
                <p className="inline font-bold text-gray-700">Ban tổ chức: </p>
                Near Foundation, GFI, VBI.
              </li>
            </ul>
            <p className="text-sm font-semibold text-gray-600">
              Vui lòng theo dõi Near APAC trên mạng xã hội và Fanpage sự kiện để
              cập nhật thông tin mới nhất!
            </p>
          </div>
        </div>
        {/* Ticket entry */}
        <div className="w-[40%] flex flex-col items-center gap-8">
          <div className="w-full flex justify-end gap-4">
            <div
              className="h-12 w-12 cursor-pointer hover:bg-gray-300 
            transition-all ease-in-out duration-150 rounded-full
            flex items-center justify-center"
            >
              <AiOutlineHeart className="w-6 h-6 fill-gray-600" />
            </div>
            <div
              className="h-12 w-12 cursor-pointer hover:bg-gray-300 
            transition-all ease-in-out duration-150 rounded-full
            flex items-center justify-center"
            >
              <FaRegShareSquare className="w-6 h-6 fill-gray-600" />
            </div>
          </div>
          <div
            className="w-[70%] flex items-center justify-center 
          flex-col gap-4 p-6 border border-gray-400 rounded-lg"
          >
            <p className="font-semibold text-gray-700">$0 - $999</p>
            <div
              className="w-full flex py-3 font-semibold text-white 
            items-center justify-center bg-orange-400 rounded-lg cursor-pointer"
            >
              Mua Vé
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
