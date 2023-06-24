import Image from "next/image"

const careerDatas = [
  {
    name: "Front End",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1096621261649621114/1099513963110223892/ux.png",
    description:
      "Front End là lĩnh vực của phát triển web tập trung vào trải nghiệm người dùng, bao gồm thiết kế giao diện và lập trình trên trình duyệt web.",
  },
  {
    name: "Back End",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1096621261649621114/1099514613000847471/computer.png",
    description:
      "Back End là lĩnh vực quản lý dữ liệu và xử lý logic để hỗ trợ ứng dụng phía Front End để đạt hiệu quả mong muốn.",
  },
  {
    name: "Dev Ops",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1096621261649621114/1099514937912606771/data-complexity.png",
    description:
      "DevOps là phương pháp hợp nhất quy trình phát triển và vận hành phần mềm để đạt hiệu quả và đạt tính ổn định cao.",
  },
  {
    name: "Data Science",
    imgSrc:
      "https://cdn.discordapp.com/attachments/1096621261649621114/1099515341006192660/data-science.png",
    description:
      "Data Science là lĩnh vực nghiên cứu và áp dụng khoa học dữ liệu để giải quyết các vấn đề thực tế trong các lĩnh vực khác nhau.",
  },
]

export default function RightSideBar() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[20%]">
      <div className="flex flex-col gap-2 w-full bg-white rounded-lg">
        {/* Cục filter career theo segment & job */}
        <div className="w-full flex gap-2 relative p-1">
          <label className="flex-auto">
            <input
              type="radio"
              name="career-radio"
              defaultChecked
              className="hidden peer"
            />
            <span
              className="flex cursor-pointer items-center justify-center rounded-lg
              border-none py-2 transition-all ease-in-out duration-150
              hover:bg-gray-100 hover:font-semibold 
              peer-checked:bg-gray-100 peer-checked:font-semibold"
            >
              Segment
            </span>
          </label>
          <label className="flex-auto">
            <input type="radio" name="career-radio" className="hidden peer" />
            <span
              className="flex cursor-pointer items-center justify-center rounded-lg
              border-none py-2 transition-all ease-in-out duration-150
              hover:bg-gray-100 hover:font-semibold 
              peer-checked:bg-gray-100 peer-checked:font-semibold
              "
            >
              Job Position
            </span>
          </label>
        </div>
        {/* Cục chứa career map */}
        <div className="flex flex-col gap-4 p-2">
          {careerDatas.map((careerMap) => (
            <div
              key={careerMap.name}
              className="flex flex-col gap-2 cursor-pointer p-4 rounded-lg
            transition-all ease-in-out duration-100
          hover:bg-gray-200"
            >
              <div className="flex gap-4 items-center">
                <Image
                  src={careerMap.imgSrc}
                  width={32}
                  height={32}
                  alt={`${careerMap.name} icon`}
                />
                <span className="text-lg font-semibold">{careerMap.name}</span>
              </div>
              <div className="text-sm text-gray-700">
                {careerMap.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
