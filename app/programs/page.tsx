import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Clock, Calendar } from "lucide-react"
import ProgramCard from "@/components/program-card"

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Идэр Их Сургууль - Сургалтын хөтөлбөрүүд"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Сургалтын хөтөлбөрүүд</h1>
            <p className="max-w-2xl text-lg md:text-xl">
              Идэр их сургуулийн олон төрлийн мэргэжлийн чиглэлээрх сургалтын хөтөлбөрүүдтэй танилцана уу
            </p>
          </div>
        </div>
      </section>

      <div className="border-b bg-muted/50">
        <div className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Нүүр
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>Сургалтын хөтөлбөрүүд</span>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        <Tabs defaultValue="bachelor" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="bachelor">Бакалавр</TabsTrigger>
            <TabsTrigger value="master">Магистр</TabsTrigger>
            <TabsTrigger value="doctorate">Докторантур</TabsTrigger>
          </TabsList>

          <TabsContent value="bachelor" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProgramCard
                title="Бизнесийн удирдлага"
                description="Бизнесийн удирдлагын онол, практик мэдлэг, ур чадварыг эзэмшүүлэх"
                duration="4 жил"
                credits="120"
                icon="Briefcase"
              />
              <ProgramCard
                title="Санхүү"
                description="Санхүүгийн салбарт шаардлагатай мэдлэг, ур чадварыг олгох"
                duration="4 жил"
                credits="120"
                icon="DollarSign"
              />
              <ProgramCard
                title="Маркетинг"
                description="Орчин үеийн маркетингийн арга барил, стратегийг судлах"
                duration="4 жил"
                credits="120"
                icon="TrendingUp"
              />
              <ProgramCard
                title="Програм хангамж"
                description="Програм хангамж хөгжүүлэх, системийн архитектур, мэдээллийн технологийн чиглэлээр мэргэших"
                duration="4 жил"
                credits="120"
                icon="Code"
              />
              <ProgramCard
                title="Олон улсын харилцаа"
                description="Олон улсын харилцаа, дипломат ажил, олон улсын байгууллагуудын үйл ажиллагааг судлах"
                duration="4 жил"
                credits="120"
                icon="Globe"
              />
              <ProgramCard
                title="Эрх зүй"
                description="Монгол улсын болон олон улсын эрх зүйн тогтолцоо, хууль эрх зүйн онол, практикийг судлах"
                duration="4 жил"
                credits="120"
                icon="Scale"
              />
            </div>
          </TabsContent>

          <TabsContent value="master" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProgramCard
                title="Бизнесийн удирдлагын магистр"
                description="Бизнесийн удирдлагын онол, практикийг гүнзгийрүүлэн судлах"
                duration="2 жил"
                credits="60"
                icon="Briefcase"
              />
              <ProgramCard
                title="Санхүүгийн магистр"
                description="Санхүүгийн салбарын өндөр түвшний мэргэжилтэн бэлтгэх"
                duration="2 жил"
                credits="60"
                icon="DollarSign"
              />
              <ProgramCard
                title="Олон улсын харилцааны магистр"
                description="Олон улсын харилцааны онол, практикийг гүнзгийрүүлэн судлах"
                duration="2 жил"
                credits="60"
                icon="Globe"
              />
            </div>
          </TabsContent>

          <TabsContent value="doctorate" className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProgramCard
                title="Бизнесийн удирдлагын доктор"
                description="Бизнесийн удирдлагын чиглэлээр өндөр түвшний судалгаа хийх"
                duration="3-5 жил"
                credits="180"
                icon="Briefcase"
              />
              <ProgramCard
                title="Компьютерийн ухааны доктор"
                description="Мэдээллийн технологи, програм хангамжийн чиглэлээр өндөр түвшний судалгаа хийх"
                duration="3-5 жил"
                credits="180"
                icon="Code"
              />
              <ProgramCard
                title="Олон улсын харилцааны доктор"
                description="Олон улсын харилцааны онол, практикийн чиглэлээр өндөр түвшний судалгаа хийх"
                duration="3-5 жил"
                credits="180"
                icon="Globe"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold">Сургалтын ерөнхий мэдээлэл</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Элсэлтийн шаардлага
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Ерөнхий боловсролын сургууль төгссөн байх</li>
                  <li>Элсэлтийн ерөнхий шалгалтын оноо</li>
                  <li>Англи хэлний түвшин тогтоох шалгалт</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Сургалтын хэлбэр
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Өдөр</li>
                  <li>Орой</li>
                  <li>Зайн</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Багш нар
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>200+ туршлагатай, өндөр мэргэшсэн багш нар</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Хичээлийн цаг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Өдөр: 08:30 - 17:30</li>
                  <li>Орой: 18:00 - 21:00</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold">Хичээлийн жилийн хуваарь</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                2024-2025 оны хичээлийн жил
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Намрын улирал</h3>
                  <ul className="space-y-1">
                    <li>Эхлэх: 2024 оны 9-р сарын 1</li>
                    <li>Дуусах: 2024 оны 12-р сарын 20</li>
                    <li>Шалгалтын хугацаа: 2025 оны 1-р сарын 5-15</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Хаврын улирал</h3>
                  <ul className="space-y-1">
                    <li>Эхлэх: 2025 оны 2-р сарын 1</li>
                    <li>Дуусах: 2025 оны 5-р сарын 20</li>
                    <li>Шалгалтын хугацаа: 2025 оны 6-р сарын 1-10</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Идэр их сургуульд элсэх</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Та өөрийн сонирхсон хөтөлбөрт элсэхийг хүсвэл бидэнтэй холбоо барина уу. Бид таны асуултад хариулж,
            элсэлтийн үйл явцад туслах болно.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full">
              Элсэлтийн мэдээлэл авах
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent text-white hover:bg-white hover:text-primary"
            >
              Холбоо барих
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

