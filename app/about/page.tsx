import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Building, Calendar, GraduationCap, MapPin, Target, Users } from "lucide-react"
import LeadershipCard from "@/components/leadership-card"
import TimelineItem from "@/components/timeline-item"
import ValueCard from "@/components/value-card"
import AnimatedElement from "@/components/animated-element"
import AnimatedHero from "@/components/animated-hero"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Идэр Их Сургууль - Бидний тухай"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0">
            <AnimatedHero
              title="Бидний тухай"
              description="Идэр их сургуулийн түүх, эрхэм зорилго, үнэт зүйлс болон удирдлагын багийн талаар"
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
          <span>Бидний тухай</span>
        </AnimatedElement>
      </div>

      <div className="container py-12 md:py-16">
        <Tabs defaultValue="overview" className="w-full">
          <AnimatedElement direction="down">
            <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
              <TabsTrigger value="overview">Товч танилцуулга</TabsTrigger>
              <TabsTrigger value="history">Түүх</TabsTrigger>
              <TabsTrigger value="leadership">Удирдлага</TabsTrigger>
              <TabsTrigger value="values">Үнэт зүйлс</TabsTrigger>
            </TabsList>
          </AnimatedElement>

          <TabsContent value="overview" className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedElement direction="left">
                <h2 className="mb-6 text-3xl font-bold">Идэр их сургууль</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Идэр их сургууль нь Монгол улсын тэргүүлэх их сургуулиудын нэг бөгөөд 1990-ээд оноос хойш чанартай
                    дээд боловсрол олгож ирсэн түүхтэй. Бид оюутнуудад дэлхийн жишигт нийцсэн боловсрол олгох, судалгаа
                    шинжилгээний ажлыг дэмжих, нийгэмд эерэг өөрчлөлт авчрах чадвартай мэргэжилтнүүдийг бэлтгэхийг зорьж
                    байна.
                  </p>
                  <p>
                    Манай сургууль нь бизнес, инженерчлэл, хүмүүнлэг, эрх зүй, шинжлэх ухаан, урлаг зэрэг олон чиглэлээр
                    бакалавр, магистр, докторын зэргийн хөтөлбөрүүдийг санал болгодог. Бид оюутан бүрийн хувийн хөгжил,
                    мэргэжлийн ур чадварыг хөгжүүлэхэд анхаарч, тэдний ирээдүйн амжилтад хувь нэмэр оруулахыг зорьдог.
                  </p>
                </div>
              </AnimatedElement>
              <AnimatedElement direction="right">
                <div className="relative h-[300px] overflow-hidden rounded-lg md:h-full">
                  <Image
                    src="/ider_towr.jpg?height=500&width=800"
                    alt="Идэр Их Сургууль"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </AnimatedElement>
            </div>

            <AnimatedElement direction="up">
              <h2 className="mb-6 text-3xl font-bold">Эрхэм зорилго</h2>
              <div className="rounded-lg bg-primary/5 p-6 md:p-8">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-20 md:w-20">
                    <Target className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <p className="text-lg font-medium md:text-xl">
                      Бид оюутнуудыг мэдлэг, ур чадвар, ёс зүйгээр хангаж, тэднийг нийгэмд эерэг өөрчлөлт авчрах,
                      дэлхийн тавцанд өрсөлдөх чадвартай иргэд болгон төлөвшүүлэхийг зорьж байна.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement direction="up" delay={0.2}>
              <h2 className="mb-6 text-3xl font-bold">Алсын хараа</h2>
              <div className="rounded-lg bg-primary/5 p-6 md:p-8">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-20 md:w-20">
                    <BookOpen className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <p className="text-lg font-medium md:text-xl">
                      Идэр их сургууль нь Монгол улсын тэргүүлэх, олон улсад хүлээн зөвшөөрөгдсөн, инноваци, судалгаа,
                      чанартай боловсролоор онцлог их сургууль болохыг зорьж байна.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <div>
              <AnimatedElement direction="left">
                <h2 className="mb-6 text-3xl font-bold">Бидний давуу тал</h2>
              </AnimatedElement>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <AnimatedElement direction="left">
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <GraduationCap className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-bold">Чанартай боловсрол</h3>
                    <p className="text-muted-foreground">
                      Олон улсын жишигт нийцсэн сургалтын хөтөлбөр, туршлагатай багш нар
                    </p>
                  </div>
                </AnimatedElement>
                <AnimatedElement direction="left" delay={0.2}>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <Users className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-bold">Мэргэжлийн багш нар</h3>
                    <p className="text-muted-foreground">Өндөр мэргэшсэн, туршлагатай багш нарын баг</p>
                  </div>
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.4}>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <Building className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-bold">Орчин үеийн дэд бүтэц</h3>
                    <p className="text-muted-foreground">Тохилог сургалтын орчин, номын сан, лаборатори</p>
                  </div>
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.6}>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <Award className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-2 text-xl font-bold">Хүлээн зөвшөөрөгдсөн</h3>
                    <p className="text-muted-foreground">
                      Үндэсний болон олон улсын хэмжээнд хүлээн зөвшөөрөгдсөн дипломтой
                    </p>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            <div>
              <AnimatedElement direction="left">
                <h2 className="mb-6 text-3xl font-bold">Бидний тоо баримт</h2>
              </AnimatedElement>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <AnimatedElement direction="left">
                  <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                    <Calendar className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-4xl font-bold">30+</h3>
                    <p className="text-muted-foreground">Жилийн түүх</p>
                  </div>
                </AnimatedElement>
                <AnimatedElement direction="left" delay={0.2}>
                  <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                    <GraduationCap className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-4xl font-bold">5000+</h3>
                    <p className="text-muted-foreground">Оюутнууд</p>
                  </div>
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.4}>
                  <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                    <Users className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-4xl font-bold">200+</h3>
                    <p className="text-muted-foreground">Багш нар</p>
                  </div>
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.6}>
                  <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                    <BookOpen className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-4xl font-bold">50+</h3>
                    <p className="text-muted-foreground">Хөтөлбөрүүд</p>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            <AnimatedElement direction="up">
              <div className="rounded-lg bg-muted p-6 md:p-8">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-20 md:w-20">
                    <MapPin className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Байршил</h3>
                    <p className="text-muted-foreground">
                      Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо, Бага тойруу-49
                    </p>
                    <div className="mt-4">
                      <Button>Холбоо барих</Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </TabsContent>

          <TabsContent value="history" className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedElement direction="left">
                <h2 className="mb-6 text-3xl font-bold">Сургуулийн түүх</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Идэр их сургууль нь 1990-ээд оны эхээр Монгол улсын шинэ нийгэм, эдийн засгийн тогтолцоонд
                    шаардлагатай мэргэжилтнүүдийг бэлтгэх зорилгоор үүсгэн байгуулагдсан. Анх цөөн тооны оюутан, багш
                    нартай эхэлсэн ч өнөөдөр Монгол улсын тэргүүлэх их сургуулиудын нэг болон өргөжиж, хөгжсөн.
                  </p>
                  <p>
                    Сургуулийн түүхэн замналын туршид бид чанартай боловсрол олгох, судалгаа шинжилгээний ажлыг дэмжих,
                    олон улсын түвшинд өрсөлдөх чадвартай төгсөгчдийг бэлтгэх зорилгоо тууштай баримталж ирсэн. Өнөөдөр
                    Идэр их сургууль нь олон мянган төгсөгчидтэй бөгөөд тэд Монгол улсын төрийн болон хувийн хэвшилд
                    амжилттай ажиллаж байна.
                  </p>
                </div>
              </AnimatedElement>
              <AnimatedElement direction="right">
                <div className="relative h-[300px] overflow-hidden rounded-lg md:h-full">
                  <Image
                    src="/ider_tuuh.jpg?height=500&width=800"
                    alt="Идэр Их Сургуулийн түүх"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement direction="left">
                <h2 className="mb-8 text-3xl font-bold">Түүхэн замнал</h2>
              </AnimatedElement>
              <div className="space-y-8">
                <AnimatedElement direction="left">
                  <TimelineItem
                    year="1994"
                    title="Сургуулийн үүсэл"
                    description="Идэр их сургууль анх үүсгэн байгуулагдав. Анхны элсэлтээр 120 оюутан хүлээн авч, 3 мэргэжлийн чиглэлээр сургалт явуулж эхэлсэн."
                  />
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.2}>
                  <TimelineItem
                    year="1999"
                    title="Өргөжилт"
                    description="Сургууль анхны өргөтгөлөө хийж, шинэ байр барьсан. Мэргэжлийн чиглэлүүдийг нэмэгдүүлж, оюутны тоо 500 хүрсэн."
                  />
                </AnimatedElement>
                <AnimatedElement direction="left" delay={0.4}>
                  <TimelineItem
                    year="2005"
                    title="Магистрын хөтөлбөр"
                    description="Анхны магистрын хөтөлбөрүүдийг нээж, дээд боловсролын бүх түвшинд сургалт явуулах боломжтой болсон."
                  />
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.6}>
                  <TimelineItem
                    year="2010"
                    title="Олон улсын хамтын ажиллагаа"
                    description="Олон улсын их сургуулиудтай хамтын ажиллагааны гэрээ байгуулж, оюутан солилцооны хөтөлбөрүүдийг хэрэгжүүлж эхэлсэн."
                  />
                </AnimatedElement>
                <AnimatedElement direction="left" delay={0.8}>
                  <TimelineItem
                    year="2015"
                    title="Судалгааны төв"
                    description="Судалгаа шинжилгээний төвийг байгуулж, эрдэм шинжилгээний ажлыг эрчимжүүлсэн."
                  />
                </AnimatedElement>
                <AnimatedElement direction="right" delay={1}>
                  <TimelineItem
                    year="2020"
                    title="Дижитал шилжилт"
                    description="Цар тахлын үед сургалтын үйл ажиллагааг бүрэн дижитал хэлбэрт шилжүүлж, зайн сургалтын системийг нэвтрүүлсэн."
                  />
                </AnimatedElement>
                <AnimatedElement direction="left" delay={1.2}>
                  <TimelineItem
                    year="Өнөөдөр"
                    title="Тасралтгүй хөгжил"
                    description="Идэр их сургууль нь өнөөдөр 5000 гаруй оюутантай, 200 гаруй багш нартай, 50 гаруй хөтөлбөртэй, Монгол улсын тэргүүлэх их сургуулиудын нэг болон хөгжиж байна."
                  />
                </AnimatedElement>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leadership" className="space-y-12">
            <div>
              <AnimatedElement direction="left">
                <h2 className="mb-6 text-3xl font-bold">Удирдлагын баг</h2>
                <p className="mb-8 max-w-3xl text-muted-foreground">
                  Идэр их сургуулийн удирдлагын баг нь өндөр мэргэшсэн, туршлагатай мэргэжилтнүүдээс бүрддэг. Тэд
                  сургуулийн эрхэм зорилго, алсын хараанд хүрэхийн төлөө тууштай ажилладаг.
                </p>
              </AnimatedElement>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatedElement direction="left">
                  <LeadershipCard
                    name="Проф. Д. Батбаяр"
                    position="Захирал"
                    bio="Боловсролын удирдлагын докторын зэрэгтэй, 20 гаруй жилийн туршлагатай. Олон улсын боловсролын байгууллагуудтай хамтран ажиллаж байсан туршлагатай."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
                <AnimatedElement direction="up" delay={0.2}>
                  <LeadershipCard
                    name="Проф. Г. Оюунчимэг"
                    position="Сургалт эрхэлсэн дэд захирал"
                    bio="Боловсролын менежментийн докторын зэрэгтэй, 15 жилийн туршлагатай. Сургалтын хөтөлбөрүүдийг хөгжүүлэх, чанарыг сайжруулах чиглэлээр мэргэшсэн."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.4}>
                  <LeadershipCard
                    name="Проф. Б. Болормаа"
                    position="Судалгаа эрхэлсэн дэд захирал"
                    bio="Шинжлэх ухааны докторын зэрэгтэй, 18 жилийн туршлагатай. Олон улсын судалгааны төслүүдийг удирдаж байсан туршлагатай."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
                <AnimatedElement direction="left" delay={0.6}>
                  <LeadershipCard
                    name="Доктор Н. Баатар"
                    position="Бизнесийн сургуулийн захирал"
                    bio="Бизнесийн удирдлагын докторын зэрэгтэй, 12 жилийн туршлагатай. Хувийн хэвшилд удирдах албан тушаал хашиж байсан туршлагатай."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
                <AnimatedElement direction="up" delay={0.8}>
                  <LeadershipCard
                    name="Доктор С. Энхжаргал"
                    position="Инженерийн сургуулийн захирал"
                    bio="Компьютерийн ухааны докторын зэрэгтэй, 14 жилийн туршлагатай. Мэдээллийн технологийн чиглэлээр олон улсын төслүүдэд оролцож байсан."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
                <AnimatedElement direction="right" delay={1}>
                  <LeadershipCard
                    name="Доктор Ж. Мөнхбат"
                    position="Хүмүүнлэгийн сургуулийн захирал"
                    bio="Хэл шинжлэлийн докторын зэрэгтэй, 16 жилийн туршлагатай. Олон улсын хэмжээнд хүлээн зөвшөөрөгдсөн судалгааны бүтээлүүдтэй."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
              </div>
            </div>

            <div>
              <AnimatedElement direction="left">
                <h2 className="mb-6 text-3xl font-bold">Удирдах зөвлөл</h2>
                <p className="mb-8 max-w-3xl text-muted-foreground">
                  Идэр их сургуулийн удирдах зөвлөл нь сургуулийн стратегийн чиглэлийг тодорхойлж, үйл ажиллагаанд
                  хяналт тавьдаг. Зөвлөлийн гишүүд нь боловсрол, бизнес, нийгмийн салбарын нэр хүндтэй төлөөлөгчид юм.
                </p>
              </AnimatedElement>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatedElement direction="left">
                  <LeadershipCard
                    name="Ц. Баярсайхан"
                    position="Удирдах зөвлөлийн дарга"
                    bio="Бизнесийн удирдлагын магистр, 25 жилийн туршлагатай. Олон улсын компанийн гүйцэтгэх захирлаар ажиллаж байсан."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
                <AnimatedElement direction="up" delay={0.2}>
                  <LeadershipCard
                    name="Д. Нарантуяа"
                    position="Удирдах зөвлөлийн гишүүн"
                    bio="Эдийн засгийн докторын зэрэгтэй, 20 жилийн туршлагатай. Санхүүгийн салбарт удирдах албан тушаал хашиж байсан."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
                <AnimatedElement direction="right" delay={0.4}>
                  <LeadershipCard
                    name="Б. Ганбаатар"
                    position="Удирдах зөвлөлийн гишүүн"
                    bio="Хуулийн докторын зэрэгтэй, 22 жилийн туршлагатай. Төрийн өндөр албан тушаал хашиж байсан туршлагатай."
                    image="/placeholder.svg?height=300&width=300"
                  />
                </AnimatedElement>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="values" className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedElement direction="left">
                <h2 className="mb-6 text-3xl font-bold">Бидний үнэт зүйлс</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Идэр их сургууль нь өөрийн үйл ажиллагаандаа тодорхой үнэт зүйлсийг баримталдаг. Эдгээр үнэт зүйлс
                    нь бидний шийдвэр гаргалт, үйл ажиллагаа, харилцааны үндэс суурь болдог.
                  </p>
                  <p>
                    Бид оюутан бүрийн хувийн хөгжил, мэргэжлийн ур чадварыг хөгжүүлэхэд анхаарч, тэдний ирээдүйн
                    амжилтад хувь нэмэр оруулахыг зорьдог. Мөн бид нийгмийн хариуцлагатай байх, байгаль орчинд ээлтэй
                    байх, ёс зүйтэй байх зэрэг үнэт зүйлсийг чухалчилдаг.
                  </p>
                </div>
              </AnimatedElement>
              <AnimatedElement direction="right">
                <div className="relative h-[300px] overflow-hidden rounded-lg md:h-full">
                  <Image
                    src="/unet zuils.jpeg?height=500&width=800"
                    alt="Идэр Их Сургуулийн үнэт зүйлс"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </AnimatedElement>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedElement direction="left">
                <ValueCard
                  title="Чанар"
                  description="Бид сургалт, судалгаа, үйлчилгээний бүх түвшинд өндөр чанарыг эрхэмлэдэг. Чанартай боловсрол олгох нь бидний үндсэн зорилго юм."
                  icon="Award"
                  color="bg-blue-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="up" delay={0.2}>
                <ValueCard
                  title="Инноваци"
                  description="Бид шинэ санаа, арга барил, технологийг нээлттэй хүлээн авч, боловсролын салбарт инновацийг дэмждэг."
                  icon="Lightbulb"
                  color="bg-yellow-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="right" delay={0.4}>
                <ValueCard
                  title="Хүндэтгэл"
                  description="Бид хүн бүрийг хүндэтгэж, ялгаатай байдлыг хүлээн зөвшөөрч, бүх хүний эрх, нэр төр, үнэ цэнийг хүндэтгэдэг."
                  icon="Heart"
                  color="bg-red-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="left" delay={0.6}>
                <ValueCard
                  title="Хамтын ажиллагаа"
                  description="Бид хамтын ажиллагааг эрхэмлэж, оюутан, багш, ажилтнууд, түншүүд хамтран ажиллах орчинг бүрдүүлдэг. Хамтын ажиллагаа нь инноваци, шинэ санаа, өсөлтийг бий болгодог."
                  icon="Users"
                  color="bg-green-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="up" delay={0.8}>
                <ValueCard
                  title="Нийгмийн хариуцлага"
                  description="Бид нийгмийн хариуцлагатай байж, нийгэмд эерэг нөлөө үзүүлэх, тогтвортой хөгжлийг дэмжихийг зорьдог."
                  icon="Globe"
                  color="bg-purple-100"
                />
              </AnimatedElement>
              <AnimatedElement direction="right" delay={1}>
                <ValueCard
                  title="Шударга байдал"
                  description="Бид үйл ажиллагаандаа шударга, ил тод байж, ёс зүйн өндөр стандартыг баримталдаг."
                  icon="Scale"
                  color="bg-orange-100"
                />
              </AnimatedElement>
            </div>

            <div>
              <AnimatedElement direction="up">
                <h2 className="mb-6 text-3xl font-bold">Бидний амлалт</h2>
                <div className="rounded-lg bg-primary/5 p-6 md:p-8">
                  <div className="space-y-4">
                    <p className="text-lg">Бид оюутан бүрт дараах амлалтыг өгч байна:</p>
                    <ul className="ml-6 list-disc space-y-2">
                      <li>Чанартай, орчин үеийн боловсрол олгох</li>
                      <li>Мэргэжлийн ур чадвар, хувь хүний хөгжлийг дэмжих</li>
                      <li>Судалгаа, шинжилгээний ажилд оролцох ��оломж олгох</li>
                      <li>Олон улсын түвшинд өрсөлдөх чадвартай болгох</li>
                      <li>Ажил мэргэжлийн зөвлөгөө, дэмжлэг үзүүлэх</li>
                      <li>Аюулгүй, дэмжлэгтэй сурах орчин бүрдүүлэх</li>
                      <li>Оюутны санал хүсэлтийг сонсож, хариу арга хэмжээ авах</li>
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <AnimatedElement direction="left">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Идэр их сургуультай танилцах</h2>
          </AnimatedElement>
          <AnimatedElement direction="right" delay={0.2}>
            <p className="mx-auto mb-8 max-w-2xl">
              Манай сургуулийн талаар илүү ихийг мэдэхийг хүсвэл биднийг зорин ирж танилцах эсвэл холбоо барина уу.
            </p>
          </AnimatedElement>
          <AnimatedElement direction="up" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full">
                Кампуст зочлох
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
    </div>
  )
}