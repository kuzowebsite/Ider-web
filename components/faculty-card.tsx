import { Briefcase, Cpu, BookOpen, Scale, FlaskRoundIcon as Flask, Palette } from "lucide-react"
import Link from "next/link"

interface FacultyCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function FacultyCard({ title, description, icon, color }: FacultyCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Briefcase":
        return <Briefcase className="h-8 w-8 text-primary" />
      case "Cpu":
        return <Cpu className="h-8 w-8 text-primary" />
      case "BookOpen":
        return <BookOpen className="h-8 w-8 text-primary" />
      case "Scale":
        return <Scale className="h-8 w-8 text-primary" />
      case "Flask":
        return <Flask className="h-8 w-8 text-primary" />
      case "Palette":
        return <Palette className="h-8 w-8 text-primary" />
      default:
        return <BookOpen className="h-8 w-8 text-primary" />
    }
  }

  return (
    <Link href="#" className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${color}`}>{getIcon()}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <span className="mt-auto inline-flex items-center text-sm font-medium text-primary">Дэлгэрэнгүй үзэх</span>
    </Link>
  )
}

