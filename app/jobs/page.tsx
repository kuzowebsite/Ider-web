import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Users, Clock, MapPin, Building2 } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import AnimatedHero from "@/components/animated-hero"

export default function JobsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Идэр Их Сургууль - Нээлттэй ажлын байр"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0">
            <AnimatedHero
              title="Нээлттэй ажлын байр"
              description="Идэр их сургуульд нэгдэж, боловсролын салбарт хувь нэмрээ оруулах боломж"
            />
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-muted/50">
        <AnimatedElement direction="left" className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Нүүр
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>Нээлттэй ажлын байр</span>
        </AnimatedElement>
      </div>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        <AnimatedElement direction="up" className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Бидэнтэй нэгдээрэй</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Идэр их сургууль нь боловсролын салбарт тэргүүлэгч байгууллага болохын хувьд өндөр ур чадвартай,
            хариуцлагатай хамт олныг бүрдүүлэхийг зорьж байна.
          </p>
        </AnimatedElement>

        <Tabs defaultValue="academic" className="w-full">
          <AnimatedElement direction="down">
            <TabsList className="mb-8 grid w-full grid-cols-2 md:w-auto">
              <TabsTrigger value="academic">Академик орон тоо</TabsTrigger>
              <TabsTrigger value="administrative">Захиргааны орон тоо</TabsTrigger>
            </TabsList>
          </AnimatedElement>

          <TabsContent value="academic" className="space-y-8">
            <AnimatedElement direction="left">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 divide-y">
                    <JobListing
                      title="Бизнесийн удирдлагын багш"
                      department="Бизнесийн сургууль"
                      type="Бүтэн цаг"
                      location="Улаанбаатар"
                      deadline="2024-03-30"
                      requirements={[
                        "Бизнесийн удирдлагын чиглэлээр докторын зэрэгтэй",
                        "Дээд боловсролын байгууллагад багшилсан туршлагатай",
                        "Судалгаа шинжилгээний ажил хийж байсан",
                        "Англи хэлний өндөр түвшний мэдлэгтэй",
                      ]}
                    />
                    <JobListing
                      title="Компьютерийн ухааны багш"
                      department="Инженерийн сургууль"
                      type="Бүтэн цаг"
                      location="Улаанбаатар"
                      deadline="2024-03-25"
                      requirements={[
                        "Компьютерийн ухаан/Программ хангамжийн чиглэлээр магистр, докторын зэрэгтэй",
                        "Программчлал, мэдээллийн технологийн чиглэлээр 3-аас дээш жил ажилласан туршлагатай",
                        "Англи хэлний өндөр түвшний мэдлэгтэй",
                        "Багаар ажиллах чадвартай",
                      ]}
                    />
                    <JobListing
                      title="Олон улсын харилцааны багш"
                      department="Хүмүүнлэгийн сургууль"
                      type="Бүтэн цаг"
                      location="Улаанбаатар"
                      deadline="2024-03-28"
                      requirements={[
                        "Олон улсын харилцаа/Улс төр судлалын чиглэлээр докторын зэрэгтэй",
                        "Дээд боловсролын байгууллагад багшилсан туршлагатай",
                        "Гадаад хэлний өндөр түвшний мэдлэгтэй",
                        "Олон улсын харилцааны чиглэлээр судалгаа хийж байсан",
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </TabsContent>

          <TabsContent value="administrative" className="space-y-8">
            <AnimatedElement direction="left">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 divide-y">
                    <JobListing
                      title="Сургалтын албаны мэргэжилтэн"
                      department="Сургалтын алба"
                      type="Бүтэн цаг"
                      location="Улаанбаатар"
                      deadline="2024-03-27"
                      requirements={[
                        "Боловсролын удирдлага/Боловсрол судлалын чиглэлээр магистрын зэрэгтэй",
                        "Дээд боловсролын байгууллагад ажилласан туршлагатай",
                        "Багаар ажиллах чадвартай",
                        "Англи хэлний дундаас дээш түвшний мэдлэгтэй",
                      ]}
                    />
                    <JobListing
                      title="Номын сангийн ажилтан"
                      department="Номын сан, мэдээллийн төв"
                      type="Бүтэн цаг"
                      location="Улаанбаатар"
                      deadline="2024-03-26"
                      requirements={[
                        "Номын санч/Мэдээллийн технологийн чиглэлээр бакалаврын зэрэгтэй",
                        "Номын санд ажилласан туршлагатай бол давуутай",
                        "Мэдээллийн технологийн чиглэлээр мэдлэгтэй",
                        "Харилцааны өндөр түвшний ур чадвартай",
                      ]}
                    />
                    <JobListing
                      title="Олон улсын харилцааны мэргэжилтэн"
                      department="Гадаад харилцааны алба"
                      type="Бүтэн цаг"
                      location="Улаанбаатар"
                      deadline="2024-03-29"
                      requirements={[
                        "Олон улсын харилцаа/Гадаад хэлний чиглэлээр магистрын зэрэгтэй",
                        "Олон улсын байгууллагад ажилласан туршлагатай",
                        "Англи хэлний өндөр түвшний мэдлэгтэй",
                        "Олон улсын хамтын ажиллагааны чиглэлээр ажилласан туршлагатай",
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </TabsContent>
        </Tabs>

        <section className="mt-16">
          <AnimatedElement direction="up" className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ажилтны хангамж, урамшуулал</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Бид ажилтнуудынхаа хөгжил, ажлын таатай орчин, урт хугацааны карьер өсөлтийг дэмждэг
            </p>
          </AnimatedElement>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedElement direction="left">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Users className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Мэргэжил дээшлүүлэх</h3>
                  <p className="text-muted-foreground">
                    Мэргэжил дээшлүүлэх сургалт, семинар, хурал, олон улсын хөтөлбөрт хамрагдах боломж
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement direction="up" delay={0.2}>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <GraduationCap className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Боловсролын дэмжлэг</h3>
                  <p className="text-muted-foreground">
                    Магистр, докторын хөтөлбөрт суралцах боломж, сургалтын төлбөрийн хөнгөлөлт
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement direction="right" delay={0.4}>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Building2 className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Таатай орчин</h3>
                  <p className="text-muted-foreground">
                    Орчин үеийн тоног төхөөрөмж, тав тухтай ажлын байр, эрүүл мэндийн даатгал
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </section>

        <section className="mt-16">
          <AnimatedElement direction="up" className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ажилд орох үйл явц</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Идэр их сургуульд ажилд орох үйл явц нь ил тод, шударга байдлыг эрхэмлэдэг
            </p>
          </AnimatedElement>

          <div className="grid gap-6 md:grid-cols-4">
            <AnimatedElement direction="left">
              <div className="rounded-lg border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="mb-2 font-bold">Анкет бөглөх</h3>
                <p className="text-sm text-muted-foreground">Ажлын байрны шаардлагатай танилцаж, анкет бөглөх</p>
              </div>
            </AnimatedElement>

            <AnimatedElement direction="left" delay={0.2}>
              <div className="rounded-lg border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="mb-2 font-bold">Ярилцлага</h3>
                <p className="text-sm text-muted-foreground">Урьдчилсан болон мэргэжлийн ярилцлагад оролцох</p>
              </div>
            </AnimatedElement>

            <AnimatedElement direction="right" delay={0.4}>
              <div className="rounded-lg border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="mb-2 font-bold">Сонгон шалгаруулалт</h3>
                <p className="text-sm text-muted-foreground">Мэргэжлийн ур чадварын үнэлгээ, багийн ярилцлага</p>
              </div>
            </AnimatedElement>

            <AnimatedElement direction="right" delay={0.6}>
              <div className="rounded-lg border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="mb-2 font-bold">Гэрээ байгуулах</h3>
                <p className="text-sm text-muted-foreground">Ажлын гэрээ байгуулж, ажилд орох</p>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </div>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <AnimatedElement direction="up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Бидэнтэй нэгдэхэд бэлэн үү?</h2>
            <p className="mx-auto mb-8 max-w-2xl">
              Та өөрийн мэргэжлийн ур чадвар, туршлагаа Идэр их сургуулийн хөгжилд зориулах боломжтой
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full">
                Анкет бөглөх
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-white hover:bg-white hover:text-primary"
              >
                Дэлгэрэнгүй мэдээлэл
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}

interface JobListingProps {
  title: string
  department: string
  type: string
  location: string
  deadline: string
  requirements: string[]
}

function JobListing({ title, department, type, location, deadline, requirements }: JobListingProps) {
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              {department}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {type}
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </Badge>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Анкет хүлээн авах хугацаа:</p>
          <p className="font-medium">{deadline}</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="mb-2 font-medium">Тавигдах шаардлага:</h4>
        <ul className="ml-6 list-disc space-y-1">
          {requirements.map((req, index) => (
            <li key={index} className="text-muted-foreground">
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button>Анкет бөглөх</Button>
        <Button variant="outline">Дэлгэрэнгүй</Button>
      </div>
    </div>
  )
}

