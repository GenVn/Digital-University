import Content from "@/components/dashboard/content"
import Header from "@/components/dashboard/header"
import LeftSideBar from "@/components/dashboard/left-side-bar"
import RightSideBar from "@/components/dashboard/right-side-bar"

export default function DashboardPage() {
  return (
    <section className="flex justify-center">
      <Header />
      <div className="mt-[70px] px-12 w-full max-w-screen-2xl flex justify-center">
        <LeftSideBar />
        <Content />
        <RightSideBar />
      </div>
    </section>
  )
}
