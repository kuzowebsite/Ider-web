import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  title: string
  date: string
  image: string
  category: string
}

export default function NewsCard({ title, date, image, category }: NewsCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-ider-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 bg-ider-500 text-white">{category}</Badge>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center text-sm text-ider-600">
          <Calendar className="mr-2 h-4 w-4" />
          {new Date(date).toLocaleDateString("mn-MN", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <h3 className="mb-2 text-xl font-bold leading-tight text-ider-800">
          <Link href="#" className="hover:text-ider-600 transition-colors">
            {title}
          </Link>
        </h3>
        <Link
          href="#"
          className="inline-flex items-center text-sm font-medium text-ider-600 hover:text-ider-700 hover:underline transition-colors"
        >
          Дэлгэрэнгүй
        </Link>
      </div>
    </div>
  )
}

