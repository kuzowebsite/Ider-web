import { History } from "lucide-react"

interface TimelineItemProps {
  year: string
  title: string
  description: string
}

export default function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <History className="h-5 w-5" />
        </div>
        <div className="h-full w-0.5 bg-border" />
      </div>
      <div className="pb-8">
        <div className="mb-1 text-lg font-bold text-primary">{year}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

