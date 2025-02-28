import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Calendar, GraduationCap, Users, BookOpen, Globe } from "lucide-react"
import NewsCard from "@/components/news-card"
import FacultyCard from "@/components/faculty-card"
import TestimonialCard from "@/components/testimonial-card"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-primary py-2 text-primary-foreground">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[9px] xs:text-xs sm:text-sm hover:underline">
              “ЧАДВАРААРАА ГАЙХАГДСАН МЭРГЭЖИЛТНҮҮДИЙГ БЭЛТГЭНЭ”
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground">
              <Globe className="mr-2 h-4 w-4" />
              Монгол
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="border-b bg-white py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png?height=60&width=60"
              alt="Идэр Их Сургууль"
              width={60}
              height={60}
              className="h-15 w-15"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">ИДЭР ИХ СУРГУУЛЬ</h1>
              <p className="text-xs text-muted-foreground">IDER UNIVERSITY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/about" className="font-medium">
              Бидний тухай
            </Link>
            <Link href="/programs" className="font-medium">
              Элсэлт
            </Link>
            <Link href="/cooperation" className="font-medium">
              Хамтын ажиллагаа
            </Link>
            <Link href="/student-life" className="font-medium">
              Оюутны амьдрал
            </Link>
            <Link href="/news" className="font-medium">
              Мэдээ
            </Link>
            <Link href="#" className="font-medium">
              Нээлттэй ажилын байр
            </Link>
            <Link href="/contact" className="font-medium">
              Холбоо барих
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <MobileNav />
        </div>
      </header>

      <main>
        {/* Hero Section */}
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
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h2 className="mb-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Ирээдүйн манлайлагчдыг бэлтгэх нь
              </h2>
              <p className="mb-8 max-w-xl text-lg md:text-xl">
                Идэр их сургууль нь чанартай боловсрол, инноваци, судалгаагаар дамжуулан ирээдүйн манлайлагчдыг
                бэлтгэдэг
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full">
                  Элсэлтийн мэдээлэл
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  Хөтөлбөрүүд
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">5000+</h3>
                <p className="text-muted-foreground">Оюутнууд</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">200+</h3>
                <p className="text-muted-foreground">Багш нар</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpen className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">50+</h3>
                <p className="text-muted-foreground">Хөтөлбөрүүд</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-4xl font-bold">30+</h3>
                <p className="text-muted-foreground">Жилийн түүх</p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculties Section */}
        <section className="py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Сургуулиуд</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Идэр их сургууль нь олон төрлийн мэргэжлийн чиглэлээр чанартай боловсрол олгодог
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FacultyCard
                title="Бизнесийн сургууль"
                description="Бизнесийн удирдлага, санхүү, маркетинг, нягтлан бодох бүртгэл"
                icon="Briefcase"
                color="bg-blue-100"
              />
              <FacultyCard
                title="Инженерийн сургууль"
                description="Мэдээллийн технологи, программ хангамж, компьютерийн ухаан"
                icon="Cpu"
                color="bg-green-100"
              />
              <FacultyCard
                title="Хүмүүнлэгийн сургууль"
                description="Хэл шинжлэл, олон улсын харилцаа, нийгмийн ухаан"
                icon="BookOpen"
                color="bg-yellow-100"
              />
              <FacultyCard
                title="Эрх зүйн сургууль"
                description="Хууль, эрх зүй, олон улсын эрх зүй, хүний эрх"
                icon="Scale"
                color="bg-purple-100"
              />
              <FacultyCard
                title="Шинжлэх ухааны сургууль"
                description="Физик, хими, биологи, математик, байгаль орчин"
                icon="Flask"
                color="bg-red-100"
              />
              <FacultyCard
                title="Урлагийн сургууль"
                description="Дизайн, уран зураг, хөгжим, театр, кино урлаг"
                icon="Palette"
                color="bg-orange-100"
              />
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-muted py-16">
          <div className="container">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-3xl font-bold md:text-4xl">Мэдээ мэдээлэл</h2>
              <Button variant="outline">Бүх мэдээ</Button>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <NewsCard
                title="Идэр их сургууль олон улсын хамтын ажиллагаагаа өргөжүүллээ"
                date="2024-02-25"
                image="/olon_ulsiin_hamtiin_ajilgaa.avif?height=200&width=400"
                category="Хамтын ажиллагаа"
              />
              <NewsCard
                title="Оюутны судалгааны ажил олон улсын шагнал хүртлээ"
                date="2024-02-20"
                image="/oyutan_hamtiin_ajilga.jpg?height=200&width=400"
                category="Судалгаа"
              />
              <NewsCard
                title="2024 оны хаврын элсэлт эхэллээ"
                date="2024-02-15"
                image="/oyutaniihamtiin.jpg?height=200&width=400"
                category="Элсэлт"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Төгсөгчдийн сэтгэгдэл</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Манай төгсөгчид Идэр их сургуульд суралцсан туршлагаасаа хуваалцаж байна
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Б. Болормаа"
                role="Бизнесийн удирдлагын төгсөгч, 2020"
                quote="Идэр их сургуульд суралцсан жилүүд миний амьдралыг бүрэн өөрчилсөн. Энд олж авсан мэдлэг, ур чадвар нь миний карьерт маш их тусалсан."
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Д. Батбаяр"
                role="Компьютерийн ухааны төгсөгч, 2021"
                quote="Сургуулийн багш нар маш өндөр мэргэжлийн ур чадвартай бөгөөд оюутнуудад үргэлж дэмжлэг үзүүлдэг. Энд суралцсан нь миний хувьд маш зөв сонголт байсан."
                image="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Г. Оюунчимэг"
                role="Олон улсын харилцааны төгсөгч, 2019"
                quote="Идэр их сургууль нь зөвхөн мэдлэг олгоод зогсохгүй, бие даан суралцах, шийдвэр гаргах чадварыг хөгжүүлэхэд маш их анхаардаг."
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Идэр их сургуульд элсэцгээе</h2>
            <p className="mx-auto mb-8 max-w-2xl">
              Ирээдүйн мэргэжилтэн болох аялалаа өнөөдөр эхлүүлээрэй. Бид таны амжилтад хүрэх замд тань туслахад бэлэн
              байна.
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
      </main>

      {/* Footer */}
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