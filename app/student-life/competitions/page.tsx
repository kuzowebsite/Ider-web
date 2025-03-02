import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from "../components/back-button"

const competitions = [
  {
    title: "САШТ",
    image: "/placeholder.svg?height=300&width=400",
    description: "Сагсан бөмбөгийн аварга шалгаруулах тэмцээн. Оюутнуудын дунд жил бүр уламжлал болон зохиогддог.",
    date: "2024 оны хавар",
    category: "Спорт",
  },
  {
    title: "3vs3 сагсны тэмцээн",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Гурван тоглогчтой баг хоорондын сагсан бөмбөгийн тэмцээн. Оюутнууд чөлөөт цагаараа идэвхтэй оролцдог.",
    date: "2024 оны намар",
    category: "Спорт",
  },
  {
    title: "Урлагийн үзлэг",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Оюутнуудын урлагийн авьяас чадварыг хөгжүүлэх, илрүүлэх зорилготой их сургуулийн хэмжээний арга хэмжээ.",
    date: "2024 оны 4-р сар",
    category: "Урлаг",
  },
  {
    title: "Илтгэлийн тэмцээн",
    image: "/placeholder.svg?height=300&width=400",
    description: "Оюутнуудын судалгаа шинжилгээний ажлын үр дүнг танилцуулах, хэлэлцүүлэх боломж олгох тэмцээн.",
    date: "2024 оны 5-р сар",
    category: "Боловсрол",
  },
  {
    title: "Оюутны эрдэм шинжилгээний хурал",
    image: "/placeholder.svg?height=300&width=400",
    description: "Оюутнуудын судалгааны ажлын үр дүнг хэлэлцэх, туршлага солилцох, шилдэг бүтээлийг шалгаруулах хурал.",
    date: "2024 оны 3-р сар",
    category: "Боловсрол",
  },
  {
    title: "Спортын наадам",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Олон төрөлт спортын тэмцээн. Волейбол, хөл бөмбөг, ширээний теннис зэрэг төрлүүдээр зохион байгуулагддаг.",
    date: "2024 оны 5-р сар",
    category: "Спорт",
  },
]

export default function CompetitionsPage() {
  return (
    <div>
      <BackButton />
      <div className="container py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Тэмцээн уралдаан</h1>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <div className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">Бүх тэмцээн</div>
          <div className="rounded-full bg-muted px-4 py-2 text-sm hover:bg-muted/80">Спорт</div>
          <div className="rounded-full bg-muted px-4 py-2 text-sm hover:bg-muted/80">Урлаг</div>
          <div className="rounded-full bg-muted px-4 py-2 text-sm hover:bg-muted/80">Боловсрол</div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {competitions.map((competition) => (
            <Card key={competition.title} className="overflow-hidden">
              <div className="relative h-56">
                <Image
                  src={competition.image || "/placeholder.svg"}
                  alt={competition.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-2 top-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                  {competition.category}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{competition.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{competition.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{competition.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

