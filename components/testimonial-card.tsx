import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  image: string
}

export default function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <Quote className="mb-4 h-8 w-8 text-primary opacity-40" />
      <p className="mb-6 text-muted-foreground">"{quote}"</p>
      <div className="flex items-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={50}
          height={50}
          className="mr-4 h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}

