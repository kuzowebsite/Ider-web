"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProgramCard } from "@/components/program-card"
import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProgramsPage() {
  const [bachelorSearch, setBachelorSearch] = useState("")
  const [masterSearch, setMasterSearch] = useState("")
  const [doctorateSearch, setDoctorateSearch] = useState("")

  const mongolianTeacherDetail = (
    <div className="space-y-4">
      <div className="rounded-lg bg-primary/5 p-4">
        <h3 className="mb-4 font-bold">БАГШ, МОНГОЛ ХЭЛ, УРАН ЗОХИОЛЫН БОЛОВСРОЛ ОЛГОХ ХӨТӨЛБӨР</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Хөтөлбөрийн зорилго:</h4>
            <p>Оюутан бүрийн онцлогт тулгуурласан тодорхой чадвар, бүтээлч сэтгэлгээтэй багш бэлтгэнэ.</p>
          </div>

          <div>
            <h4 className="font-semibold">Хөтөлбөрийн зорилт:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Зорилт:1(PEO-1)</span> Өөрийгөө илэрхийлэх, хөгжүүлэх, шинийг эрэлхийлэх,
                бүтээлчээр сэтгэх, оновчтой төлөвлөх, багаар ажиллах, судлан шинжлэх арга зүй, асуудлыг оновчтой
                шийдвэрлэх чадвартай болгох.
              </li>
              <li>
                <span className="font-medium">Зорилт:2 (PEO-2)</span> Нийгмийн байгууллын зүй тогтол, хүний эрх, эрх
                чөлөө, үнэт зүйл, хүний хөгжлийн ялгаатай байдал, онцлог, төлөвшилд шинжилгээ хийх, хүндэтгэх чадвартай
                болгох.
              </li>
              <li>
                <span className="font-medium">Зорилт:3 (PEO-3)</span> Хэлний нэгжүүдийн бүтэц, утга, агуулга, хэлбэр,
                хувиргал, соёл, танин мэдэхүйг хэрэглээний үүднээс задлан шинжлэх, тайлбарлах, бүтээлчээр оновчтой
                хэрэглэх, сургалт зохион байгуулах мэдлэг, чадварыг эзэмшүүлэх
              </li>
              <li>
                <span className="font-medium">Зорилт:4 (PEO-4)</span> Утга, уран зохиолын нийтлэг хууль, түгээмэл зүй
                тогтол, түүх, төрөл зүйл, чиглэл, агуулга, уран сайхны туурвилзүйн чадвар, хэл найруулгаар дамжуулан
                соёл-оюун санааны амьдралын хүрээг тэлэх, уран сайхны боловсрол, хүмүүжил, төлөвшил, гоо зүй, иргэншил,
                нийгэмшихүйн холбоотой чадварыг эзэмшүүлэх
              </li>
              <li>
                <span className="font-medium">Зорилт:5 (PEO-5)</span> Үндэсний бичиг үсгийн түүх, онцлог, соёл,
                хэрэглээг судлан шинжлэх, задлан тайлбарлах, бүтээлчээр оновчтой хэрэглэх, сургалт зохион байгуулах
                чадварыг эзэмшүүлэх
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Суралцах хугацаа:</h4>
            <p>4 жил</p>
          </div>
        </div>
      </div>
    </div>
  )

  const journalistDetail = (
    <div className="space-y-4">
      <div className="rounded-lg bg-primary/5 p-4">
        <h3 className="mb-4 font-bold">Сэтгүүлч</h3>
        <p className="whitespace-pre-wrap">
          Орчин үеийн медиа технологид мэргэшсэн цахим сэтгүүлчдийг бэлтгэх зорилготой. Тус хөтөлбөрийн оюутнууд нь
          тусгай студид аудио, видео контент бэлтгэхээс гадна Идэр их сургуулийн гэрээт байгууллагууд, телевизүүдэд
          дадлагаждаг. Манай төгсөгчид TV5, TV9, ETV, Хэнтий TV, Увс TV зэрэг хэвлэл мэдээллийн олон байгууллагад
          амжилттай ажиллаж байна. Хятадын медиа технологийн шилдэг 5 сургуулийн нэг Лайнинь-ийн их сургуульд 2+2 болон
          оюутан солилцоо хөтөлбөрийн дагуу шилжин суралцах боломжтой.
        </p>
      </div>
    </div>
  )

  const elementaryTeacherDetail = (
    <div className="space-y-4">
      <div className="rounded-lg bg-primary/5 p-4">
        <h3 className="mb-4 font-bold">Бага ангийн багш</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Зорилго:</h4>
            <p>Хүүхдийн бүтээлч сэтгэлгээг нээн хөгжүүлж чадах багш нарыг бэлтгэнэ.</p>
          </div>

          <p>
            Тус мэргэжил нь Монгол улсын хамгийн эрэлт ихтэй мэргэжлийн 1-д бичигддэг ба Идэрийн хувьд хамгийн олон
            оюутантай хөтөлбөрийн нэг юм.
          </p>

          <p>
            Оюутнууд хөгжмийн кабинет, зургийн урланд хичээллэхээс гадна, латерал сэтгэлгээ зэрэг тусгай хичээлүүдийг
            үздэг. Хөтөлбөрийн зөвлөх багшаар Монгол улсын гавьяат багш Д.Дарьжав ажиллаж байна.
          </p>
        </div>
      </div>
    </div>
  )

  const businessMasterDetail = (
    <div className="space-y-6">
      <div className="rounded-lg bg-primary/5 p-6">
        <h3 className="mb-4 text-2xl font-bold">Бизнесийн удирдлагын магистрын хөтөлбөр</h3>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Хөтөлбөрийн нэр:</p>
                <p>Бизнесийн удирдлагын магистр</p>
              </div>
              <div>
                <p className="font-semibold">Мэргэжлийн зэрэг:</p>
                <p>МАГИСТР</p>
              </div>
              <div>
                <p className="font-semibold">Хөтөлбөрийн индекс:</p>
                <p>Е04130101</p>
              </div>
              <div>
                <p className="font-semibold">Хөтөлбөрт элсэгчдийн боловсрол:</p>
                <p>Бакалавр</p>
              </div>
              <div>
                <p className="font-semibold">Сургалт явуулах хэлбэр:</p>
                <p>Онлайн</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Манай хөтөлбөрийн давуу тал:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>"ACBSP" Олон Улсад Магадлан Итгэмжлэгдсэн</li>
              <li>Цахим-онлайн хэлбэрээр ажлын бус цагаар дэлхийн хаанаас ч суралцах боломжтой</li>
              <li>Төлбөрийн уян хатан нөхцөл 10-40%</li>
              <li>БНСУ, АНУ, КАНАД, АВСТРАЛИ улс руу виз мэдүүлэхэд давуу талтай</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Элсэлтийн үйл ажиллагаа:</h4>
            <ul className="list-disc pl-5">
              <li>Намрын элсэлт 09-10-р сар</li>
              <li>Хаврын элсэлт 2-р сар</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Элсэгчдэд тавигдах шаардлага:</h4>
            <ul className="list-disc pl-5">
              <li>Элсэлтийн анкет бөглөх</li>
              <li>Иргэний үнэмлэхний хуулбар</li>
              <li>Бакалаврын дипломын хуулбар</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src="/458997552_1356587235314881_8171969602620872578_n.jpg"
              alt="Бизнесийн удирдлагын магистр"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/458767790_1198903684714264_3226862260114076219_n.jpg"
              alt="Үл хөдлөх хөрөнгөөр мэргэшсэн магистр"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <Image
              src="/458917649_551891353927383_2480075528439614518_n.jpg"
              alt="Олон улсын зэрэглэлтэй шүүгч"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const educationMasterDetail = (
    <div className="space-y-6">
      <div className="rounded-lg bg-primary/5 p-6">
        <h3 className="mb-4 text-2xl font-bold">БОЛОВСРОЛЫН УДИРДЛАГА МАГИСТРЫН ХӨТӨЛБӨР</h3>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Хөтөлбөрийн нэр:</p>
              <p>БОЛОВСРОЛЫН УДИРДЛАГА / EDUCATION ADMINISTRATION/</p>
            </div>
            <div>
              <p className="font-semibold">Мэргэжлийн зэрэг:</p>
              <p>МАГИСТР</p>
            </div>
            <div>
              <p className="font-semibold">Хөтөлбөрийн индекс:</p>
              <p>011102</p>
            </div>
            <div>
              <p className="font-semibold">Хөтөлбөрт элсэгчдийн боловсрол:</p>
              <p>Бакалавр</p>
            </div>
            <div>
              <p className="font-semibold">Сургалт явуулах хэлбэр:</p>
              <p>Өдөр, онлайн</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Хөтөлбөрийн танилцуулга</h4>
            <p className="mb-4">
              Идэр их сургуулийн боловсролын удирдлагын магистрын хөтөлбөр нь 2018 оноос хойш тасралтгүй сургалт үйл
              ажиллагаагаа явуулж байгаа бөгөөд "Боловсролын манлайлагчдыг бэлтгэнэ" гэсэн зорилгын хүрээнд сургалтаа
              төлөвлөн, салбарын шилдэг судлаач доктор багш нар хичээл сургалтын үйл ажиллагааг зохион байгуулжу байна.
              Энэ хугацаанд нийтдээ 7 удаагийн төгсөлт хийгээд байна.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Тус хөтөлбөрт хамрагдснаар:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Манлайлах, удирдах, багаар ажиллах, харилцааны ур чадвар, судалгааны арга, арга зүй, төлөвлөлт, үнэлгээ
                хийх суурь мэдлэгийг эзэмшинэ
              </li>
              <li>
                Төр засгийн бодлого, хууль эрх зүй, зах зээлийн нөхцөл байдалд уялдуулан боловсролын байгууллагын
                зорилго чиглэлийг тодорхойлж, стратегийн боловсруулалтаа хийх, судлан шинжлэх, үр дүнг тооцох, үнэлгээ
                хийх, асуудлыг шийдвэрлэх, манлайлал, удирдлагын менежментийн ур чадвараа тасралтгүй хөгжүүлэх мэдлэг,
                ур чадвар, хандлагатай болно
              </li>
              <li>
                Судалгаанд суурилсан манлайллын удирдлагыг хөгжүүлэх, шинжлэх ухаанч, боловсролын салбарын тодорхой
                чиглэлээр сургалт, эрдэм шинжилгээ, судалгааны ажил гүйцэтгэх, түүнийгээ амьдрал практикт үр дүнтэйгээр
                ашигладаг болно
              </li>
              <li>
                Бүх шатны боловсролын хүрээнд зах зээлийн эрэлт, хэрэгцээ, өөрийн байгууллагын дотоод, гадаад бодомжид
                нийцүүлэн удирдан зохион байгуулах, төсөл боловсруулах, болон ёс зүйн өндөр төлөвшилтэй, ярианы болон
                бичгийн харилцааны өндөр ур чадвартай, байгууллагын сэтгэлзүй, хүний нөөцийн бодлогыг оновчтой зөв
                ашигладаг, шинийг санаачлах, төлөвлөх, хэрэгжүүлэх ур чадвар, дадалтай болно
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Манай хөтөлбөрийн давуу тал:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Танхим, цахим-онлайн (100%) хэлбэрээр эсвэл хосолсон хөтөлбөрөөр ажлын бус цагаар суралцах боломжтой
              </li>
              <li>Цахим-онлайн сургалтын туршлага өндөр. Дэлхийн хаанаас ч суралцах боломжтой</li>
              <li>Салбартаа тэргүүлэгч эрдэмтэн доктор, мэргэжлийн холбоодын багш нар хичээл орно</li>
              <li>Төлбөрийн уян хатан нөхцөл</li>
              <li>Голч онооны тэтгэлэг 50 хувь хүртэл</li>
              <li>Багш болон боловсролын салбарт ажиллагсдыг дэмжих 20% тэтгэлэг зэрэгт хамрагдах боломжтой</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Элсэлтийн үйл ажиллагаа:</h4>
            <ul className="list-disc pl-5">
              <li>Намрын элсэлт (04 сарын эхээр)</li>
              <li>Хаврын элсэлт (04 сарын эхээр) жилд 2 удаа элсэлт авна</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Элсэгчдэд тавигдах шаардлага:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Бакалаврын дипломын хуулбар (боловсрол судлалаас өөр чиглэлээр төгссөн бол 9 кр хичээл нэмж судална)
              </li>
              <li>Элсэгчийн анкет бөглөх</li>
              <li>Бүртгэлийн хураамж 20.000₮</li>
              <li>Иргэний үнэмлэхний хуулбар</li>
              <li>
                Гадаадын иргэн харьяат бол дипломын хуулбарыг баталгаат орчуулгаар баталгаажуулж, дипломоо боловсролын
                яаманд бүртгүүлэх
              </li>
              <li>Цахим-онлайн орчинд ажиллах чадвартай байх</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const filterPrograms = (programs: React.ReactNode[], searchTerm: string) => {
    if (!searchTerm) return programs
    return programs.filter(
      (program: any) =>
        program.props.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.props.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  const bachelorPrograms = [
    <ProgramCard
      key="mongolian-teacher"
      title="Монгол хэл, уран зохиолын багш"
      description="Монгол хэл, уран зохиолын багш бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="BookOpen"
      detailContent={mongolianTeacherDetail}
    />,
    <ProgramCard
      key="journalist"
      title="Сэтгүүлч, медиа технологи"
      description="Орчин үеийн сэтгүүл зүй, медиа технологийн чиглэлээр мэргэших"
      duration="4 жил"
      credits="120"
      icon="Radio"
      detailContent={journalistDetail}
    />,
    <ProgramCard
      key="elementary-teacher"
      title="Бага ангийн багш"
      description="Бага боловсролын багш бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="GraduationCap"
      detailContent={elementaryTeacherDetail}
    />,
    <ProgramCard
      key="pre-school-teacher"
      title="СӨБ-ийн багш"
      description="Сургуулийн өмнөх боловсролын багш бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Users"
    />,
    <ProgramCard
      key="social-work"
      title="Нийгмийн ажил"
      description="Нийгмийн ажилтан бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Heart"
    />,
    <ProgramCard
      key="english-teacher"
      title="Англи хэлний багш"
      description="Англи хэлний багш бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Languages"
    />,
    <ProgramCard
      key="korean-teacher"
      title="Солонгос хэлний багш"
      description="Солонгос хэлний багш бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Languages"
    />,
    <ProgramCard
      key="chinese-teacher"
      title="Хятад хэлний багш"
      description="Хятад хэлний багш бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Languages"
    />,
    <ProgramCard
      key="japanese-teacher"
      title="Япон хэлний багш"
      description="Япон хэлний багш бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Languages"
    />,
    <ProgramCard
      key="law"
      title="Эрх зүй"
      description="Эрх зүйн мэргэжилтэн бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Scale"
    />,
    <ProgramCard
      key="tourism"
      title="Аялал жуулчлал"
      description="Аялал жуулчлалын менежмент"
      duration="4 жил"
      credits="120"
      icon="Plane"
    />,
    <ProgramCard
      key="marketing"
      title="Маркетинг"
      description="Маркетингийн мэргэжилтэн бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="TrendingUp"
    />,
    <ProgramCard
      key="accounting"
      title="Нягтлан бодох бүртгэл"
      description="Нягтлан бодох бүртгэлийн мэргэжилтэн бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Calculator"
    />,
    <ProgramCard
      key="software"
      title="Программ хангамж"
      description="Программ хангамж хөгжүүлэгч бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Code"
    />,
    <ProgramCard
      key="information-technology"
      title="Мэдээлэл технологи"
      description="Мэдээллийн технологийн мэргэжилтэн бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Database"
    />,
    <ProgramCard
      key="food-technology"
      title="Хүнсний технологи"
      description="Хүнсний технологийн мэргэжилтэн бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Utensils"
    />,
    <ProgramCard
      key="nutrition"
      title="Хоол зүй, шим судлал"
      description="Хоол зүй, шим судлалын мэргэжилтэн бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Apple"
    />,
    <ProgramCard
      key="international-relations"
      title="Олон улсын харилцаа"
      description="Олон улсын харилцааны мэргэжилтэн бэлтгэх"
      duration="4 жил"
      credits="120"
      icon="Globe"
    />,
    <ProgramCard
      key="uclan-software"
      title="UCLAN - Компьютер программ хангамж"
      description="Англи хэл дээрх программ хангамжийн тусгай хөтөлбөр"
      duration="4 жил"
      credits="120"
      icon="Code"
      special={true}
    />,
    <ProgramCard
      key="kosbi-business"
      title="KOSBI - Бизнесийн удирдлага"
      description="Солонгос хэл дээрх бизнесийн удирдлагын тусгай хөтөлбөр"
      duration="4 жил"
      credits="120"
      icon="Briefcase"
      special={true}
    />,
    <ProgramCard
      key="letu-business"
      title="LETU - Бизнесийн удирдлага"
      description="Англи хэл дээрх бизнесийн удирдлагын тусгай хөтөлбөр"
      duration="4 жил"
      credits="120"
      icon="Briefcase"
      special={true}
    />,
    <ProgramCard
      key="pti-accounting"
      title="PTI - Нягтлан бодох бүртгэл"
      description="Нягтлан бодох бүртгэлийн тусгай хөтөлбөр"
      duration="4 жил"
      credits="120"
      icon="Calculator"
      special={true}
    />,
    <ProgramCard
      key="empasoft-software"
      title="EMPASOFT - Программ хангамж"
      description="Программ хангамжийн тусгай хөтөлбөр"
      duration="4 жил"
      credits="120"
      icon="Code"
      special={true}
    />,
    <ProgramCard
      key="new-program"
      title="Шинэ хөтөлбөр"
      description="Удахгүй..."
      duration="4 жил"
      credits="120"
      icon="Plus"
      special={true}
    />,
    <ProgramCard
      key="civil-engineering"
      title="Барилгын инженер"
      description="Барилгын инженерийн шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Building"
      special={true}
    />,
    <ProgramCard
      key="architecture"
      title="Архитектур"
      description="Архитектурын шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Compass"
      special={true}
    />,
    <ProgramCard
      key="robotics"
      title="Робот техник"
      description="Робот техникийн шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Cpu"
      special={true}
    />,
    <ProgramCard
      key="animation"
      title="Animation"
      description="Анимэйшн шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Film"
      special={true}
    />,
    <ProgramCard
      key="naval-engineering"
      title="Усан онгоцны инженер"
      description="Усан онгоцны инженерийн шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Anchor"
      special={true}
    />,
    <ProgramCard
      key="computer-graphics"
      title="Компьютер график"
      description="Компьютер графикийн шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Image"
      special={true}
    />,
    <ProgramCard
      key="artificial-intelligence"
      title="Хиймэл оюун"
      description="Хиймэл оюуны шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Brain"
      special={true}
    />,
    <ProgramCard
      key="nursing"
      title="Сувилахуй"
      description="Сувилахуйн шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Stethoscope"
      special={true}
    />,
    <ProgramCard
      key="business-administration"
      title="Бизнесийн удирдлага"
      description="Бизнесийн удирдлагын шилжих хөтөлбөр"
      duration="2+2 жил"
      credits="120"
      icon="Briefcase"
      special={true}
    />,
  ]

  const masterPrograms = [
    <ProgramCard
      key="business-master"
      title="БИЗНЕСИЙН УДИРДЛАГА"
      description="Бизнесийн удирдлагын магистрын хөтөлбөр"
      duration="2 жил"
      credits="60"
      icon="Briefcase"
      detailContent={businessMasterDetail}
    />,
    <ProgramCard
      key="education-master"
      title="БОЛОВСРОЛЫН УДИРДЛАГА"
      description="Боловсролын удирдлагын магистрын хөтөлбөр"
      duration="2 жил"
      credits="60"
      icon="GraduationCap"
      detailContent={educationMasterDetail}
    />,
    <ProgramCard
      key="mongolian-studies-master"
      title="МОНГОЛ СУДЛАЛ"
      description="Монгол судлалын магистрын хөтөлбөр"
      duration="2 жил"
      credits="60"
      icon="BookOpen"
    />,
    <ProgramCard
      key="sociology-master"
      title="СОЦИОЛОГИ"
      description="Социологийн магистрын хөтөлбөр"
      duration="2 жил"
      credits="60"
      icon="Users"
    />,
    <ProgramCard
      key="law-master"
      title="ЭРХ ЗҮЙ"
      description="Эрх зүйн магистрын хөтөлбөр"
      duration="2 жил"
      credits="60"
      icon="Scale"
    />,
    <ProgramCard
      key="english-business-master"
      title="АНГЛИ ХЭЛ ДЭЭРХ БИЗНЕСИЙН УДИРДЛАГА"
      description="Англи хэл дээрх бизнесийн удирдлагын магистрын хөтөлбөр"
      duration="2 жил"
      credits="60"
      icon="Briefcase"
      special={true}
    />,
    <ProgramCard
      key="korean-social-science-master"
      title="СОЛОНГОС ХЭЛ ДЭЭРХ НИЙГМИЙН УХААН"
      description="Yemyung Graduate University"
      duration="2 жил"
      credits="60"
      icon="Users"
      special={true}
    />,
    <ProgramCard
      key="korean-business-master"
      title="СОЛОНГОС ХЭЛ ДЭЭРХ БИЗНЕСИЙН УДИРДЛАГА"
      description="Солонгос хэл дээрх бизнесийн удирдлагын магистрын хөтөлбөр"
      duration="2 жил"
      credits="60"
      icon="Briefcase"
      special={true}
    />,
  ]

  const doctoratePrograms = [
    <ProgramCard
      key="sociology-doctorate"
      title="СОЦИОЛОГИ"
      description="Социологийн докторын хөтөлбөр"
      duration="3 жил"
      credits="180"
      icon="Users"
    />,
    <ProgramCard
      key="education-doctorate"
      title="БОЛОВСРОЛ СУДЛАЛ"
      description="Боловсрол судлалын докторын хөтөлбөр"
      duration="3 жил"
      credits="180"
      icon="GraduationCap"
    />,
    <ProgramCard
      key="mongolian-studies-doctorate"
      title="МОНГОЛ СУДЛАЛ"
      description="Монгол судлалын докторын хөтөлбөр"
      duration="3 жил"
      credits="180"
      icon="BookOpen"
    />,
    <ProgramCard
      key="korean-social-science-doctorate"
      title="СОЛОНГОС ХЭЛ ДЭЭРХ НИЙГМИЙН УХААН"
      description="Yemyung Graduate University"
      duration="3 жил"
      credits="180"
      icon="Users"
      special={true}
    />,
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Хөтөлбөрүүд"
            width={1920}
            height={400}
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <AnimatedElement direction="down">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">Хөтөлбөрүүд</h1>
              <p className="mx-auto max-w-2xl text-lg md:text-xl">
                Идэр их сургуулийн бакалавр, магистр, докторын хөтөлбөрүүдтэй танилцана уу
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <div className="border-b bg-muted/50">
        <AnimatedElement direction="left" className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Нүүр
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>Хөтөлбөрүүд</span>
        </AnimatedElement>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="bachelor" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="bachelor">Бакалавр</TabsTrigger>
            <TabsTrigger value="master">Магистр</TabsTrigger>
            <TabsTrigger value="doctorate">Докторантур</TabsTrigger>
          </TabsList>

          <TabsContent value="bachelor" className="space-y-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Хөтөлбөр хайх..."
                value={bachelorSearch}
                onChange={(e) => setBachelorSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filterPrograms(bachelorPrograms, bachelorSearch)}
            </div>
          </TabsContent>

          <TabsContent value="master" className="space-y-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Хөтөлбөр хайх..."
                value={masterSearch}
                onChange={(e) => setMasterSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filterPrograms(masterPrograms, masterSearch)}
            </div>
          </TabsContent>

          <TabsContent value="doctorate" className="space-y-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Хөтөлбөр хайх..."
                value={doctorateSearch}
                onChange={(e) => setDoctorateSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="mb-8 max-w-3xl">
              <h2 className="text-2xl font-bold mb-4">ИДЭР ИХ СУРГУУЛИЙН ДОКТОРЫН ХӨТӨЛБӨРҮҮД</h2>
              <p className="text-muted-foreground">
                Манай сургууль 1995 оноос хойш өдөр, орой, эчнээ хэлбэрээр бакалавр, магистр, докторын түвшинд 20 гаруй
                мэргэжлээр сургалт явуулж байна.
              </p>
              <p className="mt-4 text-muted-foreground">
                Өнөөдөр аль ч түвшний судалгаа болон мэргэжлийн хүмүүсийн саналаар Идэр Их сургууль хувийн хэвшлийн
                топ-10 сургуулийн тоонд багтжээ. Энэ бол бидний гадаад харилцаанд гаргаж буй олон жилийн хөдөлмөрийн үр
                дүн, залуу үеийнхээ төлөөх оюуны хөрөнгө оруулалт юм.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filterPrograms(doctoratePrograms, doctorateSearch)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <AnimatedElement direction="left">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Хөтөлбөрүүдийн талаар дэлгэрэнгүй мэдээлэл авах</h2>
          </AnimatedElement>
          <AnimatedElement direction="right" delay={0.2}>
            <p className="mx-auto mb-8 max-w-2xl">
              Та манай хөтөлбөрүүдийн талаар илүү дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнтэй холбоо барина уу.
            </p>
          </AnimatedElement>
          <AnimatedElement direction="up" delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="rounded-full">
                Элсэлтийн зөвлөгөө авах
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

