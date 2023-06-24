import MainAuthIcon from "./main-auth"
import MainIcon from "./main-icon"
import MainNavBar from "./main-nav"

export default function Header() {
  return (
    <header className="flex fixed z-10 w-full h-[56px] bg-white justify-center">
      <div className="flex w-full max-w-screen-2xl h-full">
        <MainIcon />
        <MainNavBar />
        <MainAuthIcon />
      </div>
    </header>
  )
}
