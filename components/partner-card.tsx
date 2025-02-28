import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface PartnerCardProps {
  name: string
  country: string
  description: string
  logo: string
}

export default function PartnerCard({ name, country, description, logo }: PartnerCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{country}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

