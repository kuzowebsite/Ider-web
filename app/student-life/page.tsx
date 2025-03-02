"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedElement from "@/components/animated-element"
import AnimatedHero from "@/components/animated-hero"

type Competition = {
  title: string
  image: string
  description: string
  date: string
  category: "Спорт" | "Урлаг" | "Боловсрол"
}

const competitions: Competition[] = [
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
  const [activeFilter, setActiveFilter] = useState<"all" | "Спорт" | "Урлаг" | "Боловсрол">("all")

  const filteredCompetitions =
    activeFilter === "all" ? competitions : competitions.filter((comp) => comp.category === activeFilter)

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Тэмцээн уралдаан"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0">
            <AnimatedHero
              title="Тэмцээн уралдаан"
              description="Идэр их сургуулийн оюутнуудын авьяас чадварыг хөгжүүлэх, өрсөлдөөнт орчинг бүрдүүлэх зорилготой тэмцээн уралдаанууд"
            />
          </div>
        </div>
      </section>

      <div className="border-b bg-muted/50">
        <AnimatedElement direction="left" className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Нүүр
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link href="/student-life" className="text-muted-foreground hover:text-foreground">
            Оюутны амьдрал
          </Link>
        </AnimatedElement>
      </div>

      <div className="container py-12">
        <AnimatedElement direction="down" className="mb-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveFilter("all")}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              activeFilter === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Бүх тэмцээн
          </button>
          <button
            onClick={() => setActiveFilter("Спорт")}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              activeFilter === "Спорт" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Спорт
          </button>
          <button
            onClick={() => setActiveFilter("Урлаг")}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              activeFilter === "Урлаг" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Урлаг
          </button>
          <button
            onClick={() => setActiveFilter("Боловсрол")}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              activeFilter === "Боловсрол" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
            }`}
          >
            Боловсрол
          </button>
        </AnimatedElement>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCompetitions.map((competition, index) => (
            <AnimatedElement key={competition.title} direction="up" delay={index * 0.1}>
              <Card className="overflow-hidden">
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
            </AnimatedElement>
          ))}
        </div>
      </div>
    </div>
  )
}
