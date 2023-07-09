import { BsMusicNoteList, BsImages, BsBriefcase } from "react-icons/bs"
import { FaTheaterMasks, FaRunning } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineVideogameAsset } from "react-icons/md"
import { IoFastFood } from "react-icons/io5"

const filterDatas = [
  {
    name: "Tất cả",
  },
  {
    name: "Của bạn",
  },
  {
    name: "Online Event",
  },
  {
    name: "Hôm nay",
  },
  {
    name: "Tuần này",
  },
  {
    name: "Trong tháng này",
  },
]

export default function EventFilter() {
  return (
    <div className="px-8 flex flex-col gap-4 w-full bg-white rounded-lg">
      <div className="w-full flex gap-4 py-4 items-center">
        <h3 className="text-3xl text-gray-800 font-semibold">Phổ biến ở</h3>
        <div className="relative">
          <input
            type="text"
            name="text"
            className="border-2 rounded-xl cursor-pointer border-gray-200 p-3 text-lg peer
            transition-all ease-in-out duration-150
            focus:outline-none focus:border-blue-300
            valid:outline-none valid:border-blue-300
            "
          />
          <label
            className="absolute left-4 pointer-events-none translate-y-3 transition-all ease-in-out
            duration-150 text-lg text-gray-700 font-semibold
            peer-focus:-translate-y-1/2 peer-focus:scale-90 bg-white"
          >
            Hồ Chí Minh
          </label>
        </div>
      </div>
      <div className="w-full flex gap-10 py-2">
        {filterDatas.map((item, index) => (
          <div
            key={item.name}
            className={`cursor-pointer py-2 text-base font-semibold
            hover:border-b-2
            ${index === 0 ? `text-blue-500` : `text-gray-600`}
            ${
              index === 0
                ? `border-b-2 border-b-blue-500`
                : `hover:border-b-gray-800 hover:text-gray-800`
            }
            `}
          >
            {item.name}
          </div>
        ))}
      </div>
      {/* Filter 1 */}
      <div className="w-full flex flex-col py-2 gap-4">
        <span className="text-2xl text-gray-700 font-semibold">
          Những thể loại trending gần đây
        </span>
        {/* Trending row 1 */}
        <div className="w-full flex gap-4">
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <BsMusicNoteList className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">Âm nhạc</span>
          </div>
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <FaTheaterMasks className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">
              Nghệ thuật thị giác
            </span>
          </div>
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <BsImages className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">Lễ hội</span>
          </div>
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <AiOutlineHeart className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">
              Sức khỏe
            </span>
          </div>
        </div>
        {/* Trending row 2 */}
        <div className="w-full flex gap-4">
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <MdOutlineVideogameAsset className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">
              Sở thích
            </span>
          </div>
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <BsBriefcase className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">
              Kinh doanh
            </span>
          </div>
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <IoFastFood className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">
              Đồ ăn & Thức uống
            </span>
          </div>
          <div
            className="w-[25%] h-[60px] bg-gradient-to-tr from-red-100 to-gray-100 
            flex gap-10 items-center px-4 rounded-xl cursor-pointer"
          >
            <FaRunning className="fill-rose-400 w-8 h-8" />
            <span className="text-lg font-semibold text-gray-700">
              Thể thao
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
