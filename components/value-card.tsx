import { Award, Lightbulb, Heart, Users, Globe, Scale } from "lucide-react"

interface ValueCardProps {
  title: string
  description: string
  icon: string
  color: string
}

export default function ValueCard({ title, description, icon, color }: ValueCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Award":
        return <Award className="h-8 w-8 text-primary" />
      case "Lightbulb":
        return <Lightbulb className="h-8 w-8 text-primary" />
      case "Heart":
        return <Heart className="h-8 w-8 text-primary" />
      case "Users":
        return <Users className="h-8 w-8 text-primary" />
      case "Globe":
        return <Globe className="h-8 w-8 text-primary" />
      case "Scale":
        return <Scale className="h-8 w-8 text-primary" />
      default:
        return <Award className="h-8 w-8 text-primary" />
    }
  }

  return (
    <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${color}`}>{getIcon()}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

