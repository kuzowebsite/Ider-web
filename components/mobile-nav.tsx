"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, BookOpen, FileText } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Цэс нээх</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] p-0 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col gap-3 p-4">
            <Link
              href="/library"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/20 bg-white px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50"
              onClick={() => setOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              НОМЫН САН
            </Link>
            <Link
              href="/lms"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/20 bg-white px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50"
              onClick={() => setOpen(false)}
            >
              <FileText className="h-4 w-4" />
              СУРГАЛТЫН СИСТЕМД НЭВТРЭХ
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/20 bg-white px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50"
              onClick={() => setOpen(false)}
            >
              Бүртгүүлэх
            </Link>
          </div>

          <div className="border-t" />

          <nav className="flex flex-col gap-4 p-4"> 
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger className="text-base font-medium">Бидний тухай</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link href="/about" className="py-2 hover:text-primary" onClick={() => setOpen(false)}>
                      Түүх
                    </Link>
                    <Link href="/about" className="py-2 hover:text-primary" onClick={() => setOpen(false)}>
                      Эрхэм зорилго
                    </Link>
                    <Link href="/about" className="py-2 hover:text-primary" onClick={() => setOpen(false)}>
                      Удирдлага
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="academics">
                <AccordionTrigger className="text-base font-medium">Элсэлт</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link href="/programs" className="py-2 hover:text-primary" onClick={() => setOpen(false)}>
                      Бакалавр
                    </Link>
                    <Link href="/programs" className="py-2 hover:text-primary" onClick={() => setOpen(false)}>
                      Магистр
                    </Link>
                    <Link href="/programs" className="py-2 hover:text-primary" onClick={() => setOpen(false)}>
                      Докторантур
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href="/cooperation" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Хамтын ажиллагаа
            </Link>
            <Link href="/student-life" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Оюутны булан
            </Link>
            <Link href="/news" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Мэдээ
            </Link>
            <Link href="/jobs" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Нээлттэй ажилын байр
            </Link>
            <Link href="/contact" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
              Холбоо барих
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

