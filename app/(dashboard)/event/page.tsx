import Header from "@/components/dashboard/header"
import EventContent from "@/components/event/event-content"
import EventFilter from "@/components/event/event-filter"

export default function EventPage() {
  return (
    <section className="flex justify-center">
      <Header />
      <div className="mt-[70px] w-full max-w-screen-2xl flex flex-col justify-center">
        <EventFilter />
        <EventContent />
      </div>
    </section>
  )
}
