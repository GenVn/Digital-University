import AuthForm from "@/components/user-auth-form"
import { Metadata } from "next"

export const medadata: Metadata = {
  title: "Đăng Nhập | DGU",
  description: "Đăng nhập vào DGU với tài khoản của bạn",
}

export default function LoginPage() {
  return (
    <section className="w-full flex bg-white h-screen">
      <div className="w-1/2 h-full flex items-center justify-center">
        <AuthForm />
      </div>
      <div className="w-1/2 h-full bg-gray-50"></div>
    </section>
  )
}
