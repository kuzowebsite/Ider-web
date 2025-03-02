"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Radio,
  GraduationCap,
  Users,
  Heart,
  Languages,
  Scale,
  Plane,
  TrendingUp,
  Calculator,
  Code,
  Database,
  Utensils,
  Apple,
  Globe,
  Briefcase,
  Plus,
  Building,
  Compass,
  Cpu,
  Film,
  Anchor,
  ImageIcon,
  Brain,
  Stethoscope,
} from "lucide-react"
import { ProgramAlert } from "./program-alert"

interface ProgramCardProps {
  title: string
  description: string
  duration: string
  credits: string
  icon: string
  special?: boolean
  detailContent?: React.ReactNode
}

export function ProgramCard({
  title,
  description,
  duration,
  credits,
  icon,
  special = false,
  detailContent,
}: ProgramCardProps) {
  const [showDetail, setShowDetail] = useState(false)

  const IconComponent = (props: any) => {
    switch (icon) {
      case "BookOpen":
        return <BookOpen {...props} />
      case "Radio":
        return <Radio {...props} />
      case "GraduationCap":
        return <GraduationCap {...props} />
      case "Users":
        return <Users {...props} />
      case "Heart":
        return <Heart {...props} />
      case "Languages":
        return <Languages {...props} />
      case "Scale":
        return <Scale {...props} />
      case "Plane":
        return <Plane {...props} />
      case "TrendingUp":
        return <TrendingUp {...props} />
      case "Calculator":
        return <Calculator {...props} />
      case "Code":
        return <Code {...props} />
      case "Database":
        return <Database {...props} />
      case "Utensils":
        return <Utensils {...props} />
      case "Apple":
        return <Apple {...props} />
      case "Globe":
        return <Globe {...props} />
      case "Briefcase":
        return <Briefcase {...props} />
      case "Plus":
        return <Plus {...props} />
      case "Building":
        return <Building {...props} />
      case "Compass":
        return <Compass {...props} />
      case "Cpu":
        return <Cpu {...props} />
      case "Film":
        return <Film {...props} />
      case "Anchor":
        return <Anchor {...props} />
      case "Image":
        return <ImageIcon {...props} />
      case "Brain":
        return <Brain {...props} />
      case "Stethoscope":
        return <Stethoscope {...props} />
      default:
        return <Briefcase {...props} />
    }
  }

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <IconComponent className="h-5 w-5" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Үргэлжлэх хугацаа: {duration}</Badge>
            <Badge variant="secondary">Кредит: {credits}</Badge>
            {special && (
              <Badge variant="default" className="bg-primary">
                Тусгай хөтөлбөр
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setShowDetail(true)}>
            Дэлгэрэнгүй
          </Button>
        </CardFooter>
      </Card>

      {showDetail && detailContent && (
        <ProgramAlert title={title} content={detailContent} onClose={() => setShowDetail(false)} />
      )}
    </>
  )
}

