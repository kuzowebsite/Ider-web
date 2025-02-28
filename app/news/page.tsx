import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ChevronRight, Search } from "lucide-react"
import NewsCard from "@/components/news-card"

const newsCategories = ["Бүгд", "Сургалт", "Судалгаа", "Оюутны амьдрал", "Хамтын ажиллагаа", "Ажлын байр"]

const featuredNews = [
  {
    title: "Хятадын засгийн газрын 100 хувийн тэтгэлэгтэй магистрын хөтөлбөрт Идэр их сургуулийн төгсөгчдөөс урьж байна.",
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
    excerpt:
      "Идэр их сургуулийн удирдах зөвлөлийн хурал",
  },
  {
    title: "БНСУ ын Гимчён их сургуулийн ерөнхийлөгч Оик Хуин Ён Идэр их сургуульд айлчилж 2 байгууллагын хамтын ажиллагааны гэрээнд гарын үсэг зурлаа.",
    date: "2024-02-15",
    image: "/news3.avif?height=400&width=600",
    category: "Сургалт",
    excerpt:
      "БНСУ ын Гимчён их сургуулийн ерөнхийлөгч Оик Хуин Ён Идэр их сургуульд айлчилж 2 байгууллагын хамтын ажиллагааны гэрээнд гарын үсэг зурлаа.",
  },
]

const recentNews = [
  {
    title: "БНСУ-ын ГЕОЖЭ их сургуулийн төлөөлөгчид Идэрт хүрэлцэн ирж 2 сургуулийн хамтын ажиллагааны талаар санал солилцох уулзалт боллоо.",
    date: "2024-02-10",
    image: "/news4.avif?height=200&width=300",
    category: "Хамтын ажиллагаа",
    excerpt:
      "БНСУ-ын ГЕОЖЭ их сургуулийн төлөөлөгчид Идэрт хүрэлцэн ирж 2 сургуулийн хамтын ажиллагааны талаар санал солилцох уулзалт боллоо.",
  },
  {
    title: "БНСУ-ын КЕНСАН их сургуулийн хамтын ажиллагааны хэлтэсийн шинэ бүрэлдхүүн манайд айлчлав.",
    date: "2024-02-05",
    image: "/news5.webp?height=200&width=300",
    category: "Хамтын ажиллагаа",
    excerpt:
      "БНСУ-ын КЕНСАН их сургуулийн хамтын ажиллагааны хэлтэсийн шинэ бүрэлдхүүн манайд айлчлав.",
  },
  {
    title: "Идэр их сургуулийн ''Эрдмийн зөвлөлийн'' ээлжит хуралдаан боллоо.",
    date: "2024-01-30",
    image: "/news6.avif?height=200&width=300",
    category: "Хамтын ажиллагаа",
    excerpt:
      "Идэр их сургуулийн эрдмийн зөвлөлийн ээлжит хуралдаан боллоо.",
  },
  {
    title: "БНСУ-ын SUNCHON Nх сургууль ба Идэр их сургуулийн хамтын ажиллагааны гэрээнд гарын үсэг зурлаа.",
    date: "2024-01-25",
    image: "/news7.avif?height=200&width=300",
    category: "Хамтын ажиллагаа",
    excerpt:
      "БНСУ-ын SUNCHON Nх сургууль ба Идэр их сургуулийн хамтын ажиллагааны гэрээнд гарын үсэг зурлаа.",
  },
  {
    title: "Япон улсын IT-ийн томоохон компаны нэг – КАЛ группийн Гадаад төлөвлөлтийн дарга Ко Илёон Идэр их сургуульд ирж цаашдын хамтын ажиллагааны талаар ярилцав.",
    date: "2024-01-20",
    image: "/news8.avif?height=200&width=300",
    category: "Хамтын ажиллагаа",
    excerpt:
      "Япон улсын IT-ийн томоохон компаны нэг – КАЛ группийн Гадаад төлөвлөлтийн дарга Ко Илёон Идэр их сургуульд ирж цаашдын хамтын ажиллагааны талаар ярилцав.",
  },
  {
    title: "Монголын Зохиолчдын Эвлэл болон Д.Нацагдоржийн нэрэмжит шагналт, Алтан-Өд шагналын эзэн хүүхдийн зохиолч, сэтгүүлч Д.Батжаргал/Ph.D/ Хүүхдийн яруу найраг, шүлгийн онцлог сэдвээр хэлэлцүүлэг хийлээ.",
    date: "2024-01-15",
    image: "/news9.avif?height=200&width=300",
    category: "Сургалт",
    excerpt:
      "Монголын Зохиолчдын Эвлэл болон Д.Нацагдоржийн нэрэмжит шагналт, Алтан-Өд шагналын эзэн хүүхдийн зохиолч, сэтгүүлч Д.Батжаргал/Ph.D/ Хүүхдийн уран зохиол хичээлийн хүрээнд МХУЗ, СӨБ-ын ангийн оюутнуудтай Хүүхдийн яруу найраг, шүлгийн онцлог сэдвээр хэлэлцүүлэг хийлээ.",
  },
]

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Идэр Их Сургууль - Мэдээ мэдээлэл"
            width={1920}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-ider-700/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold animate-fade-in-up md:text-5xl lg:text-6xl">Мэдээ мэдээлэл</h1>
            <p className="max-w-2xl text-lg animate-fade-in-up animation-delay-200 md:text-xl">
              Идэр их сургуулийн сүүлийн үеийн мэдээ, үйл явдлуудтай танилцана уу
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-ider-50">
        <div className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-ider-600 hover:text-ider-800 transition-colors">
            Нүүр
          </Link>
          <span className="mx-2 text-ider-400">/</span>
          <span className="text-ider-800">Мэдээ мэдээлэл</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between animate-fade-in-up">
          <div className="relative w-full md:w-96">
            <Input
              type="search"
              placeholder="Мэдээ хайх..."
              className="pl-10 pr-4 border-ider-300 focus:border-ider-500 focus:ring-ider-500"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-ider-400" />
          </div>
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-ider-100">
              {newsCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category.toLowerCase()}
                  className="data-[state=active]:bg-ider-600 data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Featured News */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-ider-800 animate-fade-in-left">Онцлох мэдээ</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredNews.map((news, index) => (
              <Card
                key={index}
                className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
                <CardContent className="flex-grow p-6 bg-white">
                  <div className="mb-2 flex items-center text-sm text-ider-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(news.date).toLocaleDateString("mn-MN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <CardTitle className="mb-2 line-clamp-2 text-ider-800 hover:text-ider-600 transition-colors">
                    {news.title}
                  </CardTitle>
                  <p className="mb-4 line-clamp-3 text-ider-700">{news.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 bg-white">
                  <Button
                    variant="outline"
                    className="w-full text-ider-600 border-ider-600 hover:bg-ider-600 hover:text-white transition-colors"
                  >
                    Дэлгэрэнгүй
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent News */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-ider-800 animate-fade-in-left">Сүүлийн үеийн мэдээ</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentNews.map((news, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <NewsCard title={news.title} date={news.date} image={news.image} category={news.category} />
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="mt-12 flex justify-center animate-fade-in-up">
          <Button
            variant="outline"
            className="mr-2 text-ider-600 border-ider-600 hover:bg-ider-600 hover:text-white transition-colors"
          >
            Өмнөх
          </Button>
          <Button
            variant="outline"
            className="mr-2 text-ider-600 border-ider-600 hover:bg-ider-600 hover:text-white transition-colors"
          >
            1
          </Button>
          <Button
            variant="outline"
            className="mr-2 text-ider-600 border-ider-600 hover:bg-ider-600 hover:text-white transition-colors"
          >
            2
          </Button>
          <Button
            variant="outline"
            className="mr-2 text-ider-600 border-ider-600 hover:bg-ider-600 hover:text-white transition-colors"
          >
            3
          </Button>
          <Button
            variant="outline"
            className="text-ider-600 border-ider-600 hover:bg-ider-600 hover:text-white transition-colors"
          >
            Дараах
          </Button>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <section className="bg-ider-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold animate-fade-in-up md:text-4xl">Мэдээллийн захидалд бүртгүүлэх</h2>
          <p className="mx-auto mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
            Идэр их сургуулийн сүүлийн үеийн мэдээ, үйл явдлуудын талаар тогтмол мэдээлэл авахыг хүсвэл мэдээллийн
            захидалд бүртгүүлнэ үү.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
            <Input type="email" placeholder="Имэйл хаяг" className="flex-grow bg-white text-ider-800" />
            <Button variant="secondary" className="bg-white text-ider-600 hover:bg-ider-100 transition-colors">
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

