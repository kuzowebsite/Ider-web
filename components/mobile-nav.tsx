"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Цэс нээх</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <nav className="flex flex-col gap-4 py-6">
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
          Оюутны амьдрал
          </Link>
          <Link href="/news" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
          Мэдээ
          </Link>
          <Link href="#" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
          Нээлттэй ажилын байр
          </Link>
          <Link href="/contact" className="py-2 font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Холбоо барих
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

