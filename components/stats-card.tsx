import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  value: string
  label: string
}

export default function StatsCard({ icon: Icon, value, label }: StatsCardProps) {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
      <CardContent className="flex items-center gap-4 p-6">
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{value}</h3>
          <p className="text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}

