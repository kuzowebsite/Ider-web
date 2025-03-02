"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ChevronRight, Search } from "lucide-react"
import NewsCard from "@/components/news-card"
import AnimatedElement from "@/components/animated-element"
import AnimatedHero from "@/components/animated-hero"

const newsCategories = ["Бүгд", "Сургалт", "Судалгаа", "Оюутны амьдрал", "Хамтын ажиллагаа", "Ажлын байр"]

const featuredNews = [
  {
    title:
      "Хятадын засгийн газрын 100 хувийн тэтгэлэгтэй магистрын хөтөлбөрт Идэр их сургуулийн төгсөгчдөөс урьж байна.",
    date: "2024-02-25",
    image: "/news1.avif?height=400&width=600",
    category: "Хамтын ажиллагаа",
    excerpt:
      "Хятадын засгийн газрын 100 хувийн тэтгэлэгтэй магистрын хөтөлбөрт Идэр их сургуулийн төгсөгчдөөс урьж байна. Тавигдах шаардлага: 1. Бизнесийн чиглэлээр бакалавр төгссөн 2. Англи хэлний зохих түвшинтэй байх  Сонирхсон хүмүүс 9985 9958 утсаар яаралтай холбогдоно уу",
  },
  {
    title: "Идэр их сургуулийн удирдах зөвлөлийн хурал",
    date: "2024-02-20",
    image: "/news2.avif?height=400&width=600",
    category: "Судалгаа",
    excerpt: "Идэр их сургуулийн удирдах зөвлөлийн хурал",
  },
  {
    title:
      "БНСУ ын Гимчён их сургуулийн ерөнхийлөгч Оик Хуин Ён Идэр их сургуульд айлчилж 2 байгууллагын хамтын ажиллагааны гэрээнд гарын үсэг зурлаа.",
    date: "2024-02-15",
    image: "/news3.avif?height=400&width=600",
    category: "Сургалт",
    excerpt:
      "БНСУ ын Гимчён их сургуулийн ерөнхийлөгч Оик Хуин Ён Идэр их сургуульд айлчилж 2 байгууллагын хамтын ажиллагааны гэрээнд гарын үсэг зурлаа.",
  },
]

const recentNews = [
  {
    title:
      "БНСУ-ын ГЕОЖЭ их сургуулийн төлөөлөгчид Идэрт хүрэлцэн ирж 2 сургуулийн хамтын ажиллагааны талаар санал солилцох уулзалт боллоо.",
    date: "2024-02-10",
    image: "/news4.avif?height=200&width=300",
    category: "Хамтын ажиллагаа",
    excerpt:
      "БНСУ-ын ГЕОЖЭ их сургуулийн төлөөлөгчид Идэрт хүрэлцэн ирж 2 сургуулийн хамтын ажиллагааны талаар санал солилцох уулзалт боллоо.",
  },
  {
    title: "Идэр их сургуулийн оюутнууд Бизнетворк форумд амжилттай оролцлоо",
    date: "2024-02-05",
    image: "/news5.avif?height=200&width=300",
    category: "Оюутны амьдрал",
    excerpt: "Идэр их сургуулийн оюутнууд Бизнетворк форумд амжилттай оролцлоо",
  },
  {
    title: "ШУТИС-ийн багш нар Идэр сургуульд зочиллоо",
    date: "2024-01-28",
    image: "/news6.avif?height=200&width=300",
    category: "Сургалт",
    excerpt: "ШУТИС-ийн багш нар Идэр сургуульд зочиллоо",
  },
  {
    title: "Идэр их сургуулийн төгсөгчид Германд суралцах боломжтой",
    date: "2024-01-20",
    image: "/news7.avif?height=200&width=300",
    category: "Ажлын байр",
    excerpt: "Идэр их сургуулийн төгсөгчид Германд суралцах боломжтой",
  },
]

const allNews = [...featuredNews, ...recentNews]

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("бүгд")

  const filteredNews = allNews.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "бүгд" || news.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const filteredFeaturedNews = filteredNews.slice(0, 3)
  const filteredRecentNews = filteredNews.slice(3)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Идэр Их Сургууль - Мэдээ мэдээлэл"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0">
            <AnimatedHero
              title="Мэдээ мэдээлэл"
              description="Идэр их сургуулийн сүүлийн үеийн мэдээ, үйл явдлуудтай танилцана уу"
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
          <span>Мэдээ мэдээлэл</span>
        </AnimatedElement>
      </div>

      <div className="container py-6 md:py-16">
        <AnimatedElement
          direction="down"
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div className="relative w-full md:w-96">
            <Input
              type="search"
              placeholder="Мэдээ хайх..."
              className="pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          </div>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
            <TabsList className="w-full overflow-x-auto flex-nowrap">
              {newsCategories.map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </AnimatedElement>

        <section className="mb-12">
          <AnimatedElement direction="left">
            <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">Онцлох мэдээ</h2>
          </AnimatedElement>
          <div className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredFeaturedNews.map((news, index) => (
              <AnimatedElement key={index} direction="up" delay={index * 0.1}>
                <Card className="flex h-full flex-col overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 md:p-6">
                    <div className="mb-2 flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(news.date).toLocaleDateString("mn-MN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <CardTitle className="mb-2 line-clamp-2">{news.title}</CardTitle>
                    <p className="mb-4 line-clamp-3 text-muted-foreground">{news.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0">
                    <Button variant="outline" className="w-full">
                      Дэлгэрэнгүй
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </section>

        <section>
          <AnimatedElement direction="left">
            <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">Сүүлийн үеийн мэдээ</h2>
          </AnimatedElement>
          <div className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredRecentNews.map((news, index) => (
              <AnimatedElement key={index} direction="up" delay={index * 0.1}>
                <NewsCard title={news.title} date={news.date} image={news.image} category={news.category} />
              </AnimatedElement>
            ))}
          </div>
        </section>

        <AnimatedElement direction="up" className="mt-12 flex justify-center">
          <Button variant="outline" className="mr-2">
            Өмнөх
          </Button>
          <Button variant="outline" className="mr-2">
            1
          </Button>
          <Button variant="outline" className="mr-2">
            2
          </Button>
          <Button variant="outline" className="mr-2">
            3
          </Button>
          <Button variant="outline">Дараах</Button>
        </AnimatedElement>
      </div>

      <section className="bg-primary py-8 md:py-16 text-primary-foreground">
        <div className="container text-center">
          <AnimatedElement direction="up">
            <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold">Мэдээллийн захидалд бүртгүүлэх</h2>
            <p className="mx-auto mb-8 max-w-2xl">
              Идэр их сургуулийн сүүлийн үеийн мэдээ, үйл явдлуудын талаар тогтмол мэдээлэл авахыг хүсвэл мэдээллийн
              захидалд бүртгүүлнэ үү.
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <Input type="email" placeholder="Имэйл хаяг" className="flex-grow bg-white text-foreground" />
              <Button variant="secondary">Бүртгүүлэх</Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}