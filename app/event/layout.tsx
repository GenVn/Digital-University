import Header from "@/components/dashboard/header"
import LeftSideBar from "@/components/dashboard/left-side-bar"

interface EventLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: EventLayoutProps) {
  return (
    <section className="flex justify-center">
      <Header />
      <div className="mt-[70px] px-12 w-full max-w-screen-2xl flex gap-4 justify-center">
        <LeftSideBar />
        <div className="w-full flex flex-col gap-4">{children}</div>
      </div>
    </section>
  )
}
