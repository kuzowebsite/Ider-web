"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, GraduationCap, Users, BookOpen, FileText } from "lucide-react"
import NewsCard from "@/components/news-card"
import FacultyCard from "@/components/faculty-card"
import TestimonialCard from "@/components/testimonial-card"
import MobileNav from "@/components/mobile-nav"
import AnimatedElement from "@/components/animated-element"
import AnimatedHero from "@/components/animated-hero"

import { useTranslation } from "@/hooks/use-translation"
import LanguageSwitcher from "@/components/language-switcher"

import { RegisterButton } from "@/components/register-button"

export default function RegisterPage() {
  const { t } = useTranslation()

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
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-[#4CAF50] px-4 py-2 text-sm font-medium text-white hover:bg-[#45a049]"
              >
                <FileText className="h-4 w-4" />
                Бүртгүүлэх
              </Link>
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

      <main>
        <section className="relative">
          <div className="relative h-[500px] w-full overflow-hidden">
            <Image
              src="/iderbackground.jpg?height=500&width=1920"
              alt="Идэр Их Сургууль"
              width={1920}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0">
              <AnimatedHero
                title="Ирээдүйн манлайлагчдыг бэлтгэх нь"
                description="Идэр их сургууль нь чанартай боловсрол, инноваци, судалгаагаар дамжуулан ирээдүйн манлайлагчдыг бэлтгэдэг"
                primaryButtonText="Элсэлтийн мэдээлэл"
                secondaryButtonText="3D Модел харах"
              />
            </div>
          </div>
        </section>

        <section className="bg-muted py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <AnimatedElement direction="left" className="flex flex-col items-center text-center">
                <GraduationCap className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">5000+</h3>
                <p className="text-muted-foreground">Оюутнууд</p>
              </AnimatedElement>
              <AnimatedElement direction="left" delay={0.2} className="flex flex-col items-center text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">200+</h3>
                <p className="text-muted-foreground">Багш нар</p>
              </AnimatedElement>
              <AnimatedElement direction="right" delay={0.4} className="flex flex-col items-center text-center">
                <BookOpen className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">50+</h3>
                <p className="text-muted-foreground">Хөтөлбөрүүд</p>
              </AnimatedElement>
              <AnimatedElement direction="right" delay={0.6} className="flex flex-col items-center text-center">
                <Calendar className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">30+</h3>
                <p className="text-muted-foreground">Жилийн түүх</p>
              </AnimatedElement>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <AnimatedElement direction="down" className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Сургуулиуд</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Идэр их сургууль нь олон төрлийн мэргэжлийн чиглэлээр чанартай боловсрол олгодог
              </p>
            </AnimatedElement>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedElement direction="left">
                <FacultyCard
                  title="Бизнесийн сургууль"
                  description="Бизнесийн удирдлага, санхүү, маркетинг, нягтлан бодох бүртгэл"
                  icon="Briefcase"
                  color="bg-blue-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="down" delay={0.2}>
                <FacultyCard
                  title="Инженерийн сургууль"
                  description="Мэдээллийн технологи, программ хангамж, компьютерийн ухаан"
                  icon="Cpu"
                  color="bg-green-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="right" delay={0.3}>
                <FacultyCard
                  title="Хүмүүнлэгийн сургууль"
                  description="Хэл шинжлэл, олон улсын харилцаа, нийгмийн ухаан"
                  icon="BookOpen"
                  color="bg-yellow-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="left" delay={0.4}>
                <FacultyCard
                  title="Эрх зүйн сургууль"
                  description="Хууль, эрх зүй, олон улсын эрх зүй, хүний эрх"
                  icon="Scale"
                  color="bg-purple-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="down" delay={0.5}>
                <FacultyCard
                  title="Шинжлэх ухааны сургууль"
                  description="Физик, хими, биологи, математик, байгаль орчин"
                  icon="Flask"
                  color="bg-red-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="right" delay={0.6}>
                <FacultyCard
                  title="Урлагийн сургууль"
                  description="Дизайн, уран зураг, хөгжим, театр, кино урлаг"
                  icon="Palette"
                  color="bg-orange-100"
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container">
            <AnimatedElement direction="left" className="mb-10 flex items-center justify-between">
              <h2 className="text-3xl font-bold md:text-4xl">Мэдээ мэдээлэл</h2>
              <Button variant="outline">Бүх мэдээ</Button>
            </AnimatedElement>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedElement direction="left">
                <NewsCard
                  title="Идэр их сургууль олон улсын хамтын ажиллагаагаа өргөжүүллээ"
                  date="2024-02-25"
                  image="/olon_ulsiin_hamtiin_ajilgaa.avif?height=200&width=400"
                  category="Хамтын ажиллагаа"
                />
              </AnimatedElement>
              <AnimatedElement direction="down" delay={0.2}>
                <NewsCard
                  title="Оюутны судалгааны ажил олон улсын шагнал хүртлээ"
                  date="2024-02-20"
                  image="/oyutan_hamtiin_ajilga.jpg?height=200&width=400"
                  category="Судалгаа"
                />
              </AnimatedElement>
              <AnimatedElement direction="right" delay={0.4}>
                <NewsCard
                  title="2024 оны хаврын элсэлт эхэллээ"
                  date="2024-02-15"
                  image="/oyutaniihamtiin.jpg?height=200&width=400"
                  category="Элсэлт"
                />
              </AnimatedElement>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <AnimatedElement direction="down" className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Төгсөгчдийн сэтгэгдэл</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Манай төгсөгчид Идэр их сургуульд суралцсан туршлагаасаа хуваалцаж байна
              </p>
            </AnimatedElement>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedElement direction="left">
                <TestimonialCard
                  name="Б. Болормаа"
                  role="Бизнесийн удирдлагын төгсөгч, 2020"
                  quote="Идэр их сургуульд суралцсан жилүүд миний амьдралыг бүрэн өөрчилсөн. Энд олж авсан мэдлэг, ур чадвар нь миний карьерт маш их тусалсан."
                  image="/placeholder.svg?height=100&width=100"
                />
              </AnimatedElement>
              <AnimatedElement direction="down" delay={0.2}>
                <TestimonialCard
                  name="Д. Батбаяр"
                  role="Компьютерийн ухааны төгсөгч, 2021"
                  quote="Сургуулийн багш нар маш өндөр мэргэжлийн ур чадвартай бөгөөд оюутнуудад үргэлж дэмжлэг үзүүлдэг. Энд суралцсан нь миний хувьд маш зөв сонголт байсан."
                  image="/placeholder.svg?height=100&width=100"
                />
              </AnimatedElement>
              <AnimatedElement direction="right" delay={0.4}>
                <TestimonialCard
                  name="Г. Оюунчимэг"
                  role="Олон улсын харилцааны төгсөгч, 2019"
                  quote="Идэр их сургууль нь зөвхөн мэдлэг олгоод зогсохгүй, бие даан суралцах, шийдвэр гаргах чадварыг хөгжүүлэхэд маш их анхаардаг."
                  image="/placeholder.svg?height=100&width=100"
                />
              </AnimatedElement>
            </div>
          </div>
        </section>
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container text-center">
            <AnimatedElement direction="left" className="mb-4">
              <h2 className="text-3xl font-bold md:text-4xl">Идэр их сургуульд элсэцгээе</h2>
            </AnimatedElement>
            <AnimatedElement direction="right" delay={0.2} className="mb-8">
              <p className="mx-auto max-w-2xl">
                Ирээдүйн мэргэжилтэн болох аялалаа өнөөдөр эхлүүлээрэй. Бид таны амжилтад хүрэх замд тань туслахад бэлэн
                байна.
              </p>
            </AnimatedElement>
            <AnimatedElement direction="down" delay={0.4}>
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
            </AnimatedElement>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedElement direction="left">
              <h3 className="mb-4 text-lg font-bold text-white">Идэр Их Сургууль</h3>
              <p className="mb-4">Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо</p>
              <div className="space-y-2">
                <p>Утас: +976 11 456789</p>
                <p>Имэйл: info@ider.edu.mn</p>
              </div>
            </AnimatedElement>
            <AnimatedElement direction="down" delay={0.2}>
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
            </AnimatedElement>
            <AnimatedElement direction="down" delay={0.4}>
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
            </AnimatedElement>
            <AnimatedElement direction="right" delay={0.6}>
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
            </AnimatedElement>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Идэр Их Сургууль. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

