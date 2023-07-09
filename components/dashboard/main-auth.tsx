import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function MainAuthIcon() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <div className="flex gap-4 justify-end items-center w-[30%] h-full pr-4">
      {session ? (
        <div>
          <form action="/auth/signout" method="post">
            <button className="button block" type="submit">
              Sign out
            </button>
          </form>
        </div>
      ) : (
        <Link
          href={"/login"}
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4"
          )}
        >
          Đăng nhập
        </Link>
      )}
    </div>
  )
}
