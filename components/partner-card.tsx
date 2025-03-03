import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PartnerCardProps {
  name: string
  type: string
  description: string
  image: string
}

export default function PartnerCard({ name, type, description, image }: PartnerCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <Badge variant="secondary" className="mb-2 bg-white/90 text-foreground">
            {type}
          </Badge>
          <h3 className="text-lg font-semibold text-white drop-shadow-md">{name}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

