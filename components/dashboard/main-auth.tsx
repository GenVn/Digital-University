import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

export default function MainAuthIcon() {
  return (
    <div className="flex gap-4 justify-end items-center w-[30%] h-full pr-4">
      <Link
        href={"/login"}
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "px-4"
        )}
      >
        Đăng nhập
      </Link>
    </div>
  )
}
