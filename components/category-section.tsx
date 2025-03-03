import type { LucideIcon } from "lucide-react"
import SectionHeader from "@/components/section-header"
import PartnerCard from "@/components/partner-card"
import AnimatedElement from "@/components/animated-element"

interface CategorySectionProps {
  category: string
  description?: string
  icon?: LucideIcon
  partners: Array<{
    name: string
    type: string
    description: string
    image: string
  }>
}

export default function CategorySection({ category, description, icon, partners }: CategorySectionProps) {
  return (
    <section className="space-y-8">
      <SectionHeader title={category} description={description} icon={icon} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, index) => (
          <AnimatedElement key={partner.name} direction="up" delay={index * 0.1}>
            <PartnerCard {...partner} />
          </AnimatedElement>
        ))}
      </div>
    </section>
  )
}

