"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedElement from "@/components/animated-element"

export default function ContactPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1342.4047880334882!2d106.92515742442198!3d47.91886243946062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923f36c78f65%3A0x5253148ab8144e67!2sIder%20University!5e0!3m2!1sen!2sus!4v1709121547444!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="border-b bg-muted/50">
        <AnimatedElement direction="left" className="container flex items-center py-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Нүүр
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground">
            Холбоо барих
          </Link>
        </AnimatedElement>
      </div>

      <div className="container grid gap-8 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Холбоо барих</h2>
            <p className="text-muted-foreground">Та бидэнтэй холбоо барихыг хүсвэл доорх формыг бөглөнө үү.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Gmail хаяг</Label>
              <Input
                id="email"
                type="email"
                placeholder="tanii@gmail.com"
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Тайлбар</Label>
              <Textarea
                id="message"
                placeholder="Та энд мессежээ бичнэ үү..."
                className="min-h-[150px] border-primary/20 focus:border-primary"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Файл хавсаргах</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className="border-primary/20 focus:border-primary"
                />
                {selectedFile && <span className="text-sm text-muted-foreground">{selectedFile.name}</span>}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Илгээх
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Бидэнтэй холбогдох</h2>
            <p className="text-muted-foreground">Та доорх мэдээллийг ашиглан бидэнтэй холбогдох боломжтой.</p>
          </div>

          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-lg border border-primary/20 p-4 transition-colors hover:bg-primary/5"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Хаяг</h3>
                <p className="text-sm text-muted-foreground">
                  Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо
                </p>
              </div>
            </motion.div>

            <motion.a
              href="mailto:info@ider.edu.mn"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-lg border border-primary/20 p-4 transition-colors hover:bg-primary/5"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">И-мэйл</h3>
                <p className="text-sm text-muted-foreground">info@ider.edu.mn</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+97611456789"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-lg border border-primary/20 p-4 transition-colors hover:bg-primary/5"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Утас</h3>
                <p className="text-sm text-muted-foreground">+976 11 456789</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/IderUniversity"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-lg border border-primary/20 p-4 transition-colors hover:bg-primary/5"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Facebook className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Facebook</h3>
                <p className="text-sm text-muted-foreground">@IderUniversity</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

