import GreetingCard from "./greeting-card"
import LeftNav from "./left-nav"

export default function LeftSideBar() {
  return (
    <aside className="flex flex-col gap-4 w-full max-w-[20%]">
      {/* <GreetingCard /> */}
      <LeftNav />
    </aside>
  )
}
