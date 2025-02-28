import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Building, Handshake, GraduationCap, BookOpen, Users } from "lucide-react"
import PartnerCard from "@/components/partner-card"

export default function CooperationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Идэр Их Сургууль - Хамтын ажиллагаа"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Хамтын ажиллагаа</h1>
            <p className="max-w-2xl text-lg md:text-xl">
              Идэр их сургуулийн олон улсын болон дотоодын хамтын ажиллагааны талаарх мэдээлэл
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-muted/50">
        <div className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Нүүр
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>Хамтын ажиллагаа</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        <Tabs defaultValue="international" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:w-auto">
            <TabsTrigger value="international">Олон улсын</TabsTrigger>
            <TabsTrigger value="domestic">Дотоодын</TabsTrigger>
          </TabsList>

          {/* International Cooperation */}
          <TabsContent value="international" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5" />
                    Олон улсын түншүүд
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>50+ их сургууль, 20+ улс орон</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Оюутан солилцоо
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Жилд 100+ оюутан солилцооны хөтөлбөрт хамрагддаг</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Багш нарын солилцоо
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Жилд 20+ багш гадаадын их сургуулиудад зочлон ажилладаг</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-3xl font-bold">Гол түнш их сургуулиуд</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PartnerCard
                name="Харвардын их сургууль"
                country="АНУ"
                description="Дэлхийн тэргүүлэх их сургуулиудын нэг"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Оксфордын их сургууль"
                country="Их Британи"
                description="Дэлхийн хамгийн эртний их сургуулиудын нэг"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Токиогийн их сургууль"
                country="Япон"
                description="Азийн тэргүүлэх их сургуулиудын нэг"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Сөүлийн үндэсний их сургууль"
                country="Өмнөд Солонгос"
                description="Солонгосын шилдэг их сургууль"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Берлиний чөлөөт их сургууль"
                country="Герман"
                description="Европын нэр хүндтэй их сургуулиудын нэг"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Сингапурын үндэсний их сургууль"
                country="Сингапур"
                description="Ази, дэлхийн тэргүүлэх их сургууль"
                logo="/placeholder.svg?height=80&width=80"
              />
            </div>

            <h2 className="mt-12 text-3xl font-bold">Олон улсын хөтөлбөрүүд</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Оюутан солилцоо</CardTitle>
                  <CardDescription>1-2 улирлын хугацаатай</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Гадаадын их сургуулиудад суралцах боломж</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Хос диплом</CardTitle>
                  <CardDescription>2+2 загвараар</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Идэр их сургууль болон гадаадын их сургуулийн дипломтой төгсөх</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Зуны сургууль</CardTitle>
                  <CardDescription>1-2 сарын хугацаатай</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Гадаадын их сургуулиудын зуны хөтөлбөрт хамрагдах</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Domestic Cooperation */}
          <TabsContent value="domestic" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2 h-5 w-5" />
                    Дотоодын түншүүд
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>100+ байгууллага, компани</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Handshake className="mr-2 h-5 w-5" />
                    Дадлага, ажил
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Жилд 500+ оюутан дадлага, ажлын байранд зуучлагддаг</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Хамтарсан судалгаа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>20+ судалгааны төсөл жил бүр хэрэгждэг</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-12 text-3xl font-bold">Гол түнш байгууллагууд</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PartnerCard
                name="Монгол банк"
                country="Монгол"
                description="Монгол улсын төв банк"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Мобиком корпораци"
                country="Монгол"
                description="Үүрэн холбооны үйлчилгээ үзүүлэгч компани"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="МИК холдинг"
                country="Монгол"
                description="Санхүүгийн үйлчилгээ үзүүлэгч компани"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Монголын хөрөнгийн бирж"
                country="Монгол"
                description="Үнэт цаасны зах зээлийн төв"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Улаанбаатар хотын захиргаа"
                country="Монгол"
                description="Нийслэл хотын удирдлага"
                logo="/placeholder.svg?height=80&width=80"
              />
              <PartnerCard
                name="Монголын үндэсний худалдаа аж үйлдвэрийн танхим"
                country="Монгол"
                description="Бизнес эрхлэгчдийн эрх ашгийг хамгаалах байгууллага"
                logo="/placeholder.svg?height=80&width=80"
              />
            </div>

            <h2 className="mt-12 text-3xl font-bold">Хамтын ажиллагааны чиглэлүүд</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Дадлага хөтөлбөр</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Оюутнуудад бодит ажлын туршлага олгох</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ажил мэргэжлийн чиг баримжаа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Мэргэжилтнүүдтэй уулзах, зөвлөгөө авах боломж</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Хамтарсан судалгаа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Бизнес, төрийн байгууллагуудтай хамтарсан судалгаа</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Benefits Section */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold">Хамтын ажиллагааны давуу талууд</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Оюутнуудад</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Олон улсын туршлага</li>
                  <li>Хэл, соёлын мэдлэг</li>
                  <li>Ажил мэргэжлийн боломжууд</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Багш нарт</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Судалгааны хамтын ажиллагаа</li>
                  <li>Мэргэжил дээшлүүлэх</li>
                  <li>Олон улсын сүлжээ</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Их сургуульд</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Олон улсын хүлээн зөвшөөрөл</li>
                  <li>Чанартай боловсрол</li>
                  <li>Инноваци, шинэчлэл</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-primary py-16 text-primary-foreground">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Хамтран ажиллах</h2>
            <p className="mx-auto mb-8 max-w-2xl">
              Та манай их сургуультай хамтран ажиллахыг хүсвэл бидэнтэй холбоо барина уу. Бид таны санал, хүсэлтийг
              нээлттэй хүлээн авч, хамтын ажиллагааны боломжуудыг судлах болно.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full">
                Холбоо барих
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-white hover:bg-white hover:text-primary"
              >
                Дэлгэрэнгүй мэдээлэл
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

