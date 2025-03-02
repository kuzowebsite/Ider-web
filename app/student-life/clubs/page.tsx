import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BackButton from "../components/back-button"

const clubs = [
  {
    department: "НАНУБ тэнхим",
    clubs: [
      { name: "ӨСӨХ НАХИА клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "Сэтгэл зүйч клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "Ider Idos клуб", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    department: "Гадаад хэлний тэнхим",
    clubs: [
      { name: "ДАХЛАЙ клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "БОЛОШАК клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "RLSI клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "楽しい日本語 /таноши нихонго/ клуб", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    department: "Мэдээллийн технологийн тэнхим",
    clubs: [
      { name: "Digital art клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "RED CODER клуб", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    department: "Монгол хэл, сэтгүүл зүйн тэнхим",
    clubs: [{ name: "Язгуур эх хэл, соёлын клуб", image: "/placeholder.svg?height=200&width=300" }],
  },
  {
    department: "Эрх зүйн тэнхим",
    clubs: [
      { name: "Мэтгэлцээний Aspire Infinity клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "ХУУЛЬ ЗҮЙН КЛИНИК ТӨВ", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    department: "БСАЗ-н тэнхим",
    clubs: [{ name: "Бодъё клуб", image: "/placeholder.svg?height=200&width=300" }],
  },
  {
    department: "Бизнесийн удирдлагын тэнхим",
    clubs: [
      { name: "AIDA маркетингийн клуб", image: "/placeholder.svg?height=200&width=300" },
      { name: "VIP TOUR клуб", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    department: "Бусад",
    clubs: [{ name: "Be Speaky сайн дурын клуб", image: "/placeholder.svg?height=200&width=300" }],
  },
]

export default function ClubsPage() {
  return (
    <div>
      <BackButton />
      <div className="container py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Оюутны клубууд</h1>
        <div className="space-y-12">
          {clubs.map((department) => (
            <div key={department.department}>
              <h2 className="mb-6 text-2xl font-semibold text-primary">{department.department}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {department.clubs.map((club) => (
                  <Card key={club.name} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={club.image || "/placeholder.svg"}
                        alt={club.name}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{club.name}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
