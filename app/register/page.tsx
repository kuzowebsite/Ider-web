"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, FileText, MapPin, Phone, Mail } from 'lucide-react'
import AnimatedElement from "@/components/animated-element"
import MobileNav from "@/components/mobile-nav"
import LanguageSwitcher from "@/components/language-switcher"
import { useTranslation } from "@/hooks/use-translation"
import { RegisterButton } from "@/components/register-button"

export default function RegisterPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("online")

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-primary py-2 text-primary-foreground">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[9px] xs:text-xs sm:text-sm hover:underline">
              {t("motto")}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="http://ider.monbiblio.com/opac/index.php"
                className="inline-flex items-center gap-2 rounded-full bg-[#4CAF50] px-4 py-2 text-sm font-medium text-white hover:bg-[#45a049]"
              >
                <BookOpen className="h-4 w-4" />
                НОМЫН САН
              </Link>
              <Link
                href="https://online.ider.edu.mn/"
                className="inline-flex items-center gap-2 rounded-full bg-[#4CAF50] px-4 py-2 text-sm font-medium text-white hover:bg-[#45a049]"
              >
                <FileText className="h-4 w-4" />
                СУРГАЛТЫН СИСТЕМД НЭВТРЭХ
              </Link>
              <div className="inline-flex items-center gap-2">
                <RegisterButton className="rounded-full bg-[#FFD700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#ffd900]">
                  Бүртгүүлэх
                </RegisterButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="border-b bg-white py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png?height=60&width=60"
              alt={t("university_name")}
              width={60}
              height={60}
              className="h-15 w-15"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">{t("university_name")}</h1>
              <p className="text-xs text-muted-foreground">{t("university_name_en")}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/about" className="font-medium">
              {t("about")}
            </Link>
            <Link href="/programs" className="font-medium">
              {t("admission")}
            </Link>
            <Link href="/cooperation" className="font-medium">
              {t("cooperation")}
            </Link>
            <Link href="/student-life" className="font-medium">
              {t("student_life")}
            </Link>
            <Link href="/news" className="font-medium">
              {t("news")}
            </Link>
            <Link href="/jobs" className="font-medium">
              {t("jobs")}
            </Link>
            <Link href="/contact" className="font-medium">
              {t("contact")}
            </Link>
          </nav>

          <MobileNav />
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[350px] w-full overflow-hidden">
            <Image
              src="/iderbackground.jpg?height=350&width=1920"
              alt="Идэр Их Сургууль"
              width={1920}
              height={350}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <AnimatedElement direction="down">
                <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Бүртгүүлэх</h1>
              </AnimatedElement>
              <AnimatedElement direction="up" delay={0.2}>
                <p className="mx-auto max-w-2xl text-lg md:text-xl">
                  Идэр Их Сургуульд бүртгүүлж, ирээдүйн мэргэжилтэн болох аялалаа эхлүүлээрэй
                </p>
              </AnimatedElement>
              <AnimatedElement direction="up" delay={0.4}>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <RegisterButton size="lg" variant="default" className="rounded-full">
                    Онлайн бүртгүүлэх
                  </RegisterButton>
                  <Button size="lg" variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-primary">
                    Холбоо барих
                  </Button>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        <section className="container py-12">
          <AnimatedElement direction="down" className="mb-12">
            <Tabs defaultValue="online" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
                <TabsTrigger value="online" className="text-base py-3">Онлайн бүртгүүлэх</TabsTrigger>
                <TabsTrigger value="inperson" className="text-base py-3">Биеэр бүртгүүлэх</TabsTrigger>
              </TabsList>
              <TabsContent value="online" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <AnimatedElement direction="left" delay={0.2}>
                    <Card className="border-primary/20 shadow-md">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-2xl text-primary">Онлайн бүртгүүлэх</CardTitle>
                        <CardDescription className="text-base">
                          Та Идэр Их Сургуульд онлайнаар бүртгүүлж, элсэлтийн процессыг эхлүүлэх боломжтой
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-lg">
                          Онлайнаар бүртгүүлэхийн тулд дараах холбоос дээр дарж, анкет бөглөнө үү:
                        </p>
                        <div className="flex justify-center">
                          <Button size="lg" className="mt-2 rounded-full">
                            <Link href="https://form.jotform.me/62012952631448" target="_blank" rel="noopener noreferrer">
                              Онлайн анкет бөглөх
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                  <AnimatedElement direction="right" delay={0.3}>
                    <div className="rounded-lg bg-muted p-6 shadow-sm border border-muted-foreground/20">
                      <h3 className="mb-4 font-semibold text-lg">Анхаарах зүйлс:</h3>
                      <ul className="list-disc pl-5 space-y-3">
                        <li>Бүх талбарыг үнэн зөв бөглөнө үү</li>
                        <li>Таны имэйл хаяг идэвхтэй байх шаардлагатай</li>
                        <li>Бүртгэл баталгаажсаны дараа таны имэйл хаягаар мэдэгдэл илгээх болно</li>
                        <li>Шаардлагатай бичиг баримтын хуулбарыг цахим хэлбэрээр хавсаргана уу</li>
                      </ul>
                    </div>
                  </AnimatedElement>
                </div>
              </TabsContent>
              <TabsContent value="inperson" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <AnimatedElement direction="left" delay={0.2}>
                    <Card className="border-primary/20 shadow-md">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-2xl text-primary">Биеэр бүртгүүлэх</CardTitle>
                        <CardDescription className="text-base">
                          Та Идэр Их Сургуульд өөрийн биеэр ирж бүртгүүлэх боломжтой
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-lg">
                          Бүртгүүлэхдээ доорх бичиг баримтыг бүрдүүлж авч ирнэ үү.
                        </p>
                        <RegisterButton className="w-full rounded-full">
                          Холбоо барих
                        </RegisterButton>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                  <AnimatedElement direction="right" delay={0.3}>
                    <div className="rounded-lg bg-muted p-6 shadow-sm border border-muted-foreground/20">
                      <h3 className="mb-4 font-semibold text-lg">Шаардлагатай бичиг баримт:</h3>
                      <ul className="list-disc pl-5 space-y-3">
                        <li>ЕБС төгссөн гэрчилгээ</li>
                        <li>Хувийн хэрэг</li>
                        <li>ЕШ-ийн батламж</li>
                        <li>Иргэний үнэмлэхний хуулбар</li>
                        <li>Цээж зураг (4х3) 2 хувь</li>
                      </ul>
                    </div>
                  </AnimatedElement>
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedElement>

          <div className="mt-12">
            <AnimatedElement direction="down" className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-center">ОЮУТАНД НЭН АШИГТАЙ ОЛОН УЛСЫН ХӨТӨЛБӨРҮҮД</h2>
              <p className="text-center mb-8 text-muted-foreground max-w-3xl mx-auto">
                2024-2025 оны хичээлийн жилд элсэх оюутнуудад зориулсан олон улсын хөтөлбөрүүд
              </p>
            </AnimatedElement>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedElement direction="left" className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-blue-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Японы пүүс, компанид дадлага</CardTitle>
                      <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                        Япон Улс
                      </div>
                    </div>
                    <CardDescription>Нэг жилийн өндөр цалинтай дадлагын хөтөлбөр</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">40</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">5,000,000₮</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">4,200,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Аялал жуулчлал</li>
                        <li>Хүнсний технологи</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="down" delay={0.1} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-green-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">AIECO тэтгэлэгт хөтөлбөр</CardTitle>
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Япон Улс
                      </div>
                    </div>
                    <CardDescription>Азийн олон улсын эдийн засгийн хамтын ажиллагаа</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">20</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">4,000,000₮</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">5,200,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>IT (програм хангамж)</li>
                        <li>НА (нийгмийн ажил)</li>
                        <li>Аялал жуулчлал</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="right" delay={0.2} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-purple-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Кансай их сургууль 3+1</CardTitle>
                      <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                        Япон Улс
                      </div>
                    </div>
                    <CardDescription>Хос дипломтой төгсөх боломж</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">20</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">4,500,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Маркетинг</li>
                        <li>Бизнесийн удирдлага</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="left" delay={0.3} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-yellow-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Асахи сонины тэтгэлэг</CardTitle>
                      <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        Япон Улс
                      </div>
                    </div>
                    <CardDescription>Япон хэлний багш бэлтгэх хөтөлбөр</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">4,000,000₮</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">4,200,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Япон хэлний багш</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="down" delay={0.4} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-red-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Шинхуа их сургууль</CardTitle>
                      <div className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                        Хятад Улс
                      </div>
                    </div>
                    <CardDescription>Хятадын хамгийн том хувийн их сургууль</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">20</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">4,200,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Хятад хэлний багш (1+3)</li>
                        <li>Барилгын инженер</li>
                        <li>Цахилгааны инженер</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="right" delay={0.5} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-orange-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Chifeng University 2+2</CardTitle>
                      <div className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                        Хятад Улс
                      </div>
                    </div>
                    <CardDescription>Оюутан солилцооны хөтөлбөр</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">20</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">7</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Монгол хэл, уран зохиолын багш</li>
                        <li>Сэтгүүлч</li>
                        <li>Эрх зүй</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedElement direction="left" delay={0.2} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-teal-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Gyeongsang University</CardTitle>
                      <div className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800">
                        Солонгос Улс
                      </div>
                    </div>
                    <CardDescription>Суралцангаа ажиллах 1+3 хөтөлбөр</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">13</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">4,000,000₮</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">8,000,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Биотехнологи (2+2)</li>
                        <li>Эм зүй (1+3)</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="down" delay={0.3} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-indigo-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Gangwon University</CardTitle>
                      <div className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800">
                        Солонгос Улс
                      </div>
                    </div>
                    <CardDescription>Суралцангаа ажиллах 1+3 хөтөлбөр</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">16</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">5,000,000₮</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">Үнэгүй</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Онгоцны үйлчилгээ</li>
                        <li>Дроны үйлчилгээ</li>
                        <li>Хот төлөвлөлт, кадастр</li>
                        <li>Алжаал тайлах спорт</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="right" delay={0.4} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-pink-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Daelem University</CardTitle>
                      <div className="rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800">
                        Солонгос Улс
                      </div>
                    </div>
                    <CardDescription>Суралцангаа ажиллах 2+2 хөтөлбөр</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">4,000,000₮</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сургалтын төлбөр:</span>
                      <span className="font-medium">4,200,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                                              <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Нягтлан бодох бүртгэл</li>
                        <li>СӨБ</li>
                        </ul>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="left" delay={0.5} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-cyan-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Jeju Tourism University</CardTitle>
                      <div className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-800">
                        Солонгос Улс
                      </div>
                    </div>
                    <CardDescription>Суралцангаа ажиллах 1+3 хөтөлбөр</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">5,000,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Амралтын газрын менежмент</li>
                        <li>Сувилахуй</li>
                        <li>Олон улсын бизнес</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>

              <AnimatedElement direction="down" delay={0.6} className="h-full">
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-emerald-500"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Kyungpook National University</CardTitle>
                      <div className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800">
                        Солонгос Улс
                      </div>
                    </div>
                    <CardDescription>Солонгосын шилдэг 10 сургуулийн нэг</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Суудлын тоо:</span>
                      <span className="font-medium">20</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Үлдсэн суудлын тоо:</span>
                      <span className="font-medium text-red-500">4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Сарын цалин:</span>
                      <span className="font-medium">4,000,000₮</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Мэргэжил:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Англи хэлний багш (2+2)</li>
                        <li>Автын инженер (1+3)</li>
                        <li>Эрчим хүчний инженер (1+3)</li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <RegisterButton className="w-full">Бүртгүүлэх</RegisterButton>
                  </div>
                </Card>
              </AnimatedElement>
            </div>
          </div>

          <div className="mt-16">
            <AnimatedElement direction="down" className="mb-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Өөрийн биеэр хаана бүртгүүлэх вэ?</h2>
              <p className="text-center mb-8 text-muted-foreground max-w-3xl mx-auto">
                Манай сургуулийн Улаанбаатар хотод болон Монгол Улсын 21 аймагт ажиллаж буй элсэлтийн багийнхантай холбогдож өөрийн биеэр ирж бүртгүүлж болно
              </p>
            </AnimatedElement>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedElement direction="left" delay={0.2}>
                <div className="overflow-x-auto rounded-lg border shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border-b p-3 text-left font-semibold">Аймаг хот</th>
                        <th className="border-b p-3 text-left font-semibold">Холбоо барих утас</th>
                        <th className="border-b p-3 text-left font-semibold">Хариуцсан ажилтан</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">Төв</td>
                        <td className="border-b p-3">88051980</td>
                        <td className="border-b p-3">Ц.Жаргалтогтох</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border-b p-3">Архангай</td>
                        <td className="border-b p-3">86551188</td>
                        <td className="border-b p-3">Энхтуяа</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">Дархан</td>
                        <td className="border-b p-3">99060627</td>
                        <td className="border-b p-3">М.Гэрлээ</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border-b p-3">Улаанбаатар</td>
                        <td className="border-b p-3">9985-9958, 88269083</td>
                        <td className="border-b p-3">Ж.Сарангэрэл</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">Ховд</td>
                        <td className="border-b p-3">88138413</td>
                        <td className="border-b p-3">Д.Адъяаням</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AnimatedElement>

              <AnimatedElement direction="right" delay={0.3}>
                <div className="overflow-x-auto rounded-lg border shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border-b p-3 text-left font-semibold">Аймаг хот</th>
                        <th className="border-b p-3 text-left font-semibold">Холбоо барих утас</th>
                        <th className="border-b p-3 text-left font-semibold">Хариуцсан ажилтан</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">Хэнтий</td>
                        <td className="border-b p-3">86181222</td>
                        <td className="border-b p-3">Д.Үдбалмаа</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border-b p-3">Хөвсгөл</td>
                        <td className="border-b p-3">88071652</td>
                        <td className="border-b p-3">С.Цэвэлмаа</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">Увс</td>
                        <td className="border-b p-3">88094716</td>
                        <td className="border-b p-3">А.Намсрай</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border-b p-3">Сэлэнгэ</td>
                        <td className="border-b p-3">99142428</td>
                        <td className="border-b p-3">Б.Мөнхсайхан</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">Өмнөговь</td>
                        <td className="border-b p-3">99073178</td>
                        <td className="border-b p-3">В.Чимгээ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AnimatedElement>
            </div>
          </div>

          <div className="mt-16">
            <AnimatedElement direction="up" delay={0.2}>
              <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8 shadow-md border border-primary/20">
                <h3 className="mb-4 text-2xl font-bold text-primary">Асуулт байна уу?</h3>
                <p className="mb-6 text-lg">
                  Та элсэлтийн талаар асуулт байвал бидэнтэй холбоо барина уу. Бид таны асуултад хариулахад таатай байх болно.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <AnimatedElement direction="left" delay={0.3}>
                    <div className="flex items-center gap-4 bg-white/80 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <span className="font-medium">+976 11 456789</span>
                    </div>
                  </AnimatedElement>
                  <AnimatedElement direction="up" delay={0.4}>
                    <div className="flex items-center gap-4 bg-white/80 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <span className="font-medium">info@ider.edu.mn</span>
                    </div>
                  </AnimatedElement>
                  <AnimatedElement direction="right" delay={0.5}>
                    <div className="flex items-center gap-4 bg-white/80 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <span className="font-medium">Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо</span>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Идэр Их Сургууль</h3>
              <p className="mb-4">Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо</p>
              <div className="space-y-2">
                <p>Утас: +976 11 456789</p>
                <p>Имэйл: info@ider.edu.mn</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Холбоосууд</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Бидний тухай
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-white">
                    Элсэлт
                  </Link>
                </li>
                <li>
                  <Link href="/cooperation" className="hover:text-white">
                    Хамтын ажиллагаа
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Оюутны амьдрал
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    Мэдээ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Нээлттэй ажилын байр
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Хөтөлбөрүүд</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Бизнесийн удирдлага
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Компьютерийн ухаан
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Олон улсын харилцаа
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Эрх зүй
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Инженерчлэл
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Хэл шинжлэл
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Холбогдоорой</h3>
              <p className="mb-4">
                Шинэ мэдээ мэдээлэл, үйл явдлын талаар байнга мэдээлэл авахыг хүсвэл бидэнтэй холбогдоорой
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Имэйл хаяг"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 focus:border-primary focus:outline-none"
                />
                <Button>Бүртгүүлэх</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Идэр Их Сургууль. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
