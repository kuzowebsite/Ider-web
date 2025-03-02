import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from "../components/back-button"

const events = [
  {
    title: "Дээлтэй Монгол өдөрлөг",
    date: "2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Монгол үндэсний хувцас, соёлыг дэлгэрүүлэх өдөрлөг",
  },
  {
    title: "Хүнсчдийн өдөр",
    date: "2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Хүнсний технологийн оюутнуудын өдөрлөг",
  },
  {
    title: "Талархалын баяр",
    date: "2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Оюутнуудын талархалын баярын арга хэмжээ",
  },
  {
    title: "Япон соёлын өдөрлөг",
    date: "2024",
    image: "/placeholder.svg?height=300&width=400",
    description: "Япон хэл, соёлыг танилцуулах өдөрлөг",
  },
]

export default function EventsPage() {
  return (
    <div>
      <BackButton />
      <div className="container py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Эвент арга хэмжээнүүд</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.title} className="overflow-hidden">
              <div className="relative h-56">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

