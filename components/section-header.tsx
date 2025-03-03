import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  title: string
  description?: string
  icon?: LucideIcon
}

export default function SectionHeader({ title, description, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="rounded-lg bg-primary/10 p-2">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      </div>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  )
}

