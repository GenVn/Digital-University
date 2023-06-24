import Link from "next/link";

export default function MainAuthIcon() {
  return (
    <div className="flex gap-4 justify-end items-center w-[30%] h-full pr-4">
      <Link
        href={"/"}
        className="px-4 py-2 rounded-2xl border-2 border-transparent bg-gray-200 text-gray-600
        outline-none transition-all ease-in-out duration-300 
        hover:outline-none hover:border-blue-400 hover:shadow-md hover:bg-gray-600 hover:text-white"
      >
        Đăng nhập
      </Link>
      <Link
        className="px-4 py-2 rounded-2xl border-2 border-transparent bg-gray-200 text-gray-600
        outline-none transition-all ease-in-out duration-300 
        hover:outline-none hover:border-blue-400 hover:shadow-md hover:bg-gray-600 hover:text-white"
        href={"/"}
      >
        Đăng kí
      </Link>
    </div>
  );
}
