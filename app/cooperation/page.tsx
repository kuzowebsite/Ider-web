"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Users, Handshake, BookOpen, GraduationCap, Briefcase, LibraryBig, LandmarkIcon } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import CountrySection from "@/components/country-section"
import AnimatedElement from "@/components/animated-element"
import AnimatedHero from "@/components/animated-hero"
import StatsCard from "@/components/stats-card"
import CategorySection from "@/components/category-section"
import SectionHeader from "@/components/section-header"

const countries = [
  {
    code: "kr",
    name: "Солонгос",
    flag: "/flags/kr.svg",
    description: "БНСУ-ын шилдэг их дээд сургуулиудтай хамтын ажиллагаатай",
    color: "from-blue-500/10 to-blue-500/5",
    universities: [
      {
        name: "Тэрээм их сургууль",
        programs: ["2+2 хөтөлбөр", "Элсэлтийн ба сургалтын төлбөрийн хөнгөлөлт"],
        image: "/images/taerem-campus.jpg",
        location: "Тэжон хот",
      },
      {
        name: "Кёнсан их сургууль",
        programs: ["1+1 хөтөлбөр", "Сурагчдангаа ажиллах боломж"],
        location: "Жинжү хот",
      },
      {
        name: "Кёнсан, Хуниг, Чёнбуг, Могвон их сургууль",
        programs: ["Оюутан солилцоо", "Хамтарсан судалгаа"],
        location: "Солонгосын өмнөд бүс",
      },
    ],
    majors: ["Бизнесийн удирдлага", "Маркетинг", "Нийгмийн ухааны багш"],
    features: ["Англи хэлээр суралцах боломж", "Орчин үеийн кампус", "Өндөр түвшний судалгаа"],
  },
  {
    code: "uk",
    name: "Англи",
    flag: "/flags/uk.svg",
    description: "Их Британийн нэр хүндтэй их сургуулиудтай хамтран ажилладаг",
    color: "from-red-500/10 to-blue-500/5",
    universities: [
      {
        name: "Abertay University",
        programs: ["IT, Компьютерийн програмчлал"],
        location: "Данди хот",
      },
      {
        name: "Bangor University",
        programs: ["Англи хэлний өндөр боловсрол"],
        location: "Бангор хот",
      },
    ],
    requirements: ["ЭЕШ-ын 400-аас дээш оноо", "Англи хэл- 500-аас дээш", "Визний 100 хувийн баталгаа"],
    features: ["Англи хэлний өндөр түвшин", "Олон улсын хүлээн зөвшөөрөгдсөн диплом", "Ажил хөдөлмөр эрхлэх боломж"],
  },
  {
    code: "cn",
    name: "Хятад",
    universities: [
      {
        name: "Хятадын мэдиа технологийн шилдэг сургуулийн нэг Лайнань их сургууль",
        programs: ["2+2 хөтөлбөр", "Монголын төлбөрөөр сурах боломж"],
      },
    ],
    features: ["Хос диплом", "Хятад хэлний өндөр түвшин"],
  },
  {
    code: "de",
    name: "Герман",
    programs: [
      "SES (Маркетинг хөгжлийн зөвлөгөө)",
      "CIM (Мэргэжилтэн багш ажиллуулах төсөл)",
      "CDG (Багшлах боловсон хүчний мэргэжил дээшлүүлэлт)",
    ],
  },
  {
    code: "us",
    name: "Америк",
    universities: [
      {
        name: "Letourneau University",
        programs: ["2+2 хөтөлбөр", "Сургалтын төлбөрийн тэтгэлэг"],
      },
      {
        name: "Lincoln Memorial University",
        programs: ["1+1 хөтөлбөр", "Сургалтын төлбөрийн тэтгэлэг"],
      },
    ],
    requirements: ["ЭЕШ-ын 600-аас дээш оноо (Математик, англи хэл)"],
  },
  {
    code: "jp",
    name: "Япон",
    companies: [
      {
        name: "Kansai Imcas Group",
        type: "Royal Incatering",
      },
      {
        name: "BIC Group",
        type: "Technology",
      },
      {
        name: "Uokuni Sohonsha",
        type: "Business",
      },
    ],
    features: ["Орчин үеийн соёл технологийг судалцана", "Япон хэлний болно", "Цаг стандартын дагуу ажил хийж сурна"],
  },
]

const domesticStats = [
  { icon: Building, value: "100+", label: "Байгууллага" },
  { icon: Handshake, value: "500+", label: "Дадлагын байр" },
  { icon: BookOpen, value: "20+", label: "Судалгааны төсөл" },
]

const domesticCategories = [
  {
    category: "Судалгаа, боловсрол",
    description: "Судалгаа шинжилгээ, боловсролын салбарын тэргүүлэх байгууллагууд",
    icon: LibraryBig,
    partners: [
      {
        name: "Философийн хүрээлэн",
        type: "Судалгааны байгууллага",
        description: "Монгол улсын шинжлэх ухааны академийн харьяа судалгааны байгууллага",
        image: "/partners/philosophy-institute.jpg",
      },
      {
        name: "Боловсрол шинжлэх ухааны академи",
        type: "Боловсролын байгууллага",
        description: "Монгол улсын боловсролын салбарын тэргүүлэх байгууллага",
        image: "/partners/education-academy.jpg",
      },
      {
        name: "Монгол уламжлал академи",
        type: "Судалгааны байгууллага",
        description: "Монголын уламжлалт соёл, зан заншил, түүхийг судлах байгууллага",
        image: "/partners/mongolian-tradition.jpg",
      },
    ],
  },
  {
    category: "Бизнес, технологи",
    description: "Бизнес, технологийн салбарын тэргүүлэх компаниуд",
    icon: Briefcase,
    partners: [
      {
        name: "Юнител групп",
        type: "Харилцаа холбоо",
        description: "Монголын тэргүүлэх харилцаа холбооны оператор компани",
        image: "/partners/unitel.jpg",
      },
      {
        name: "TCI компани",
        type: "Технологи",
        description: "Мэдээллийн технологийн шийдэл, үйлчилгээ үзүүлэгч компани",
        image: "/partners/tci.jpg",
      },
      {
        name: "1000 Сакура компани",
        type: "Бизнес",
        description: "Олон улсын худалдаа, бизнесийн үйлчилгээ үзүүлэгч компани",
        image: "/partners/1000sakura.jpg",
      },
      {
        name: "Хаан банк",
        type: "Санхүү",
        description: "Монголын тэргүүлэх арилжааны банк",
        image: "/partners/khanbank.jpg",
      },
    ],
  },
  {
    category: "Төрийн болон төрийн бус байгууллагууд",
    description: "Төрийн болон төрийн бус байгууллагуудтай хамтын ажиллагаа",
    icon: LandmarkIcon,
    partners: [
      {
        name: "Бизнес инкубаторын үндэсний төв",
        type: "Төрийн бус байгууллага",
        description: "Гарааны бизнес, инновацийг дэмжих төв",
        image: "/partners/business-incubator.jpg",
      },
      {
        name: "НАМЗХ",
        type: "Төрийн бус байгууллага",
        description: "Нийгмийн ардчилал, манлайллыг дэмжих байгууллага",
        image: "/partners/namzh.jpg",
      },
      {
        name: "Дээд боловсролын шинэчлэлийн төсөл",
        type: "Төрийн төсөл",
        description: "Дээд боловсролын чанарыг сайжруулах төсөл",
        image: "/partners/higher-education.jpg",
      },
      {
        name: "БМИҮЗ",
        type: "Төрийн байгууллага",
        description: "Боловсролын магадлан итгэмжлэх үндэсний зөвлөл",
        image: "/partners/bmiuz.jpg",
      },
      {
        name: "Сургалтын төрийн сан",
        type: "Төрийн байгууллага",
        description: "Боловсролын санхүүжилт, тэтгэлгийн үндэсний сан",
        image: "/partners/state-training-fund.jpg",
      },
    ],
  },
]

const collaborationAreas = [
  {
    icon: GraduationCap,
    title: "Дадлага хөтөлбөр",
    description: "Оюутнуудад бодит ажлын туршлага олгох боломж",
  },
  {
    icon: Users,
    title: "Мэргэжлийн зөвлөгөө",
    description: "Мэргэжилтнүүдтэй уулзах, туршлага солилцох",
  },
  {
    icon: BookOpen,
    title: "Судалгаа, инноваци",
    description: "Хамтарсан судалгаа, шинэ санаачилга",
  },
]

export default function CooperationPage() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative">
        <div className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
          <Image
            src="/cooperation-hero.jpg"
            alt="Олон улсын хамтын ажиллагаа"
            width={1920}
            height={500}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <AnimatedHero
            title="Хамтын ажиллагаа"
            description="Идэр их сургууль нь дотоод, гадаадын олон байгууллагатай хамтран ажилладаг"
            primaryButtonText="Хамтран ажиллах"
            secondaryButtonText="Дэлгэрэнгүй мэдээлэл"
          />
        </div>
      </section>

      <div className="border-b bg-muted/50">
        <AnimatedElement direction="left" className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Нүүр
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>Хамтын ажиллагаа</span>
        </AnimatedElement>
      </div>

      <div className="container space-y-16 py-12 md:py-16">
        <Tabs defaultValue="domestic" className="w-full">
          <AnimatedElement direction="down">
            <TabsList className="mb-8 grid w-full grid-cols-2 md:w-auto">
              <TabsTrigger value="domestic">Дотоодын</TabsTrigger>
              <TabsTrigger value="international">Олон улсын</TabsTrigger>
            </TabsList>
          </AnimatedElement>

          <TabsContent value="domestic" className="space-y-16">
            <AnimatedElement direction="up">
              <div className="grid gap-6 md:grid-cols-3">
                {domesticStats.map((stat) => (
                  <StatsCard key={stat.label} {...stat} />
                ))}
              </div>
            </AnimatedElement>

            {domesticCategories.map((category, index) => (
              <AnimatedElement key={category.category} direction="up" delay={index * 0.1}>
                <CategorySection {...category} />
              </AnimatedElement>
            ))}

            <AnimatedElement direction="up">
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <SectionHeader
                        title="Хамтын ажиллагааны чиглэлүүд"
                        description="Бид дараах чиглэлүүдээр хамтран ажилладаг"
                      />
                      <div className="space-y-6">
                        {collaborationAreas.map((area) => (
                          <div key={area.title} className="flex items-start gap-3">
                            <div className="rounded-full bg-primary/10 p-2">
                              <area.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{area.title}</h4>
                              <p className="text-sm text-muted-foreground">{area.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative hidden md:block">
                      <Image
                        src="/cooperation-local.jpg"
                        alt="Дотоодын хамтын ажиллагаа"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </TabsContent>

          <TabsContent value="international" className="space-y-16">
            {countries.map((country, index) => (
              <AnimatedElement key={country.code} direction="up" delay={index * 0.1}>
                <CountrySection country={country} />
              </AnimatedElement>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <AnimatedElement direction="up">
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
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}

