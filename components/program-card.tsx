import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, DollarSign, TrendingUp, Code, Globe, Scale } from "lucide-react"

interface ProgramCardProps {
  title: string
  description: string
  duration: string
  credits: string
  icon: string
}

export default function ProgramCard({ title, description, duration, credits, icon }: ProgramCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Briefcase":
        return <Briefcase className="h-6 w-6" />
      case "DollarSign":
        return <DollarSign className="h-6 w-6" />
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6" />
      case "Code":
        return <Code className="h-6 w-6" />
      case "Globe":
        return <Globe className="h-6 w-6" />
      case "Scale":
        return <Scale className="h-6 w-6" />
      default:
        return <Briefcase className="h-6 w-6" />
    }
  }

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {getIcon()}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Үргэлжлэх хугацаа: {duration}</Badge>
          <Badge variant="secondary">Кредит: {credits}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Дэлгэрэнгүй</Button>
      </CardFooter>
    </Card>
  )
}

