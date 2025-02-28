import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BackButton() {
  return (
    <div className="container py-4">
      <Link href="/">
        <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
          <ChevronLeft className="h-4 w-4" />
          Буцах
        </Button>
      </Link>
    </div>
  )
}

