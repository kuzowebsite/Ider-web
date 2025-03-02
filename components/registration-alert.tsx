"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertTriangle, X } from 'lucide-react'

interface RegistrationAlertProps {
  onClose: () => void
}

export function RegistrationAlert({ onClose }: RegistrationAlertProps) {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    registrationNumber: "",
    email: "",
    phone: "",
    school: "",
    major: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Бүртгэл амжилттай илгээгдлээ. Төлбөр шилжүүлснээр таны бүртгэл баталгаажна.")
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
        <button 
          onClick={onClose}
          className="absolute right-2 top-2 rounded-full p-1 hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </button>
        
        <h2 className="mb-1 text-lg font-semibold">Бүртгэл Баталгаажуулах</h2>
        <p className="mb-3 text-xs text-muted-foreground">Доорх мэдээллийг үнэн зөв бөглөнө үү</p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="lastName" className="text-xs">Овог:</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="h-8 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="firstName" className="text-xs">Нэр:</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="h-8 text-sm"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="registrationNumber" className="text-xs">Регистрийн дугаар:</Label>
              <Input
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="email" className="text-xs">Имэйл Хаяг:</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-8 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs">Утасны Дугаар:</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-8 text-sm"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="school" className="text-xs">Төгссөн Сургууль:</Label>
              <Input
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
            <div>
              <Label htmlFor="major" className="text-xs">Элсэх мэргэжил:</Label>
              <Input
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                required
                className="h-8 text-sm"
              />
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mt-2">
            <div className="flex gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-amber-800">
                <p className="font-medium mb-1">Санамж:</p>
                <p className="mb-1">Хаан банкны <strong>5431106885</strong></p>
                <p className="mb-1">Данс эзэмшигч: <strong>Н.Одонцэцэг</strong></p>
                <p className="mb-1">Бүртгэл баталгаажуулах <strong>20,000 төгрөг</strong>ийг шилжүүлснээр суудал тань баталгаажна.</p>
                <p className="mb-1">Гүйлгээний утга дээр өөрийн утасны дугаар болон регистрийн дугаарыг бичнэ үү!</p>
                <p>Баталгаажуулах төлбөрийг буцаан олгохгүй. Элсэж орсны дараа бүртгэлийн төлбөр нь сургалтын төлбөрөөс хасагдана.</p>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full text-sm py-1">БҮРТГЭЛ БАТАЛГААЖУУЛАХ</Button>
        </form>
      </div>
    </div>
  )
}
