import Link from "next/link";

export default function GreetingCard() {
  return (
    <div className="p-4 bg-white rounded-xl flex flex-col items-center justify-center gap-4">
      <h2 className="text-lg font-bold leading-8 text-left">
        DGU là một trang mạng xã hội của hơn 1,084,013 developer tuyệt vời
      </h2>
      <p className="leading-7">
        Là nơi bạn thoải thích sáng tạo, học tập, trải nghiệm và phát triển sự
        nghiệp của riêng mình.
      </p>
      <Link
        href={"/"}
        className="w-full text-center px-4 py-2 rounded-xl 
      font-semibold outline-none border-2 border-blue-300
      transition-all ease-in-out duration-300
      hover:bg-blue-700 hover:border-blue-800 hover:text-white"
      >
        Đăng nhập
      </Link>
      <Link
        href={"/"}
        className="w-full text-center px-4 py-2 rounded-xl
      font-semibold outline-none border-2 border-transparent 
      transition-all ease-in-out duration-300
      hover:bg-blue-100 hover:text-blue-400"
      >
        Đăng kí
      </Link>
    </div>
  );
}
