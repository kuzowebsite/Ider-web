"use client"

import type React from "react"

import { X } from "lucide-react"

interface ProgramAlertProps {
  title: string
  content: React.ReactNode
  onClose: () => void
}

export function ProgramAlert({ title, content, onClose }: ProgramAlertProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100">
          <X className="h-4 w-4" />
        </button>

        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        <div className="max-h-[70vh] overflow-y-auto pr-2">{content}</div>
      </div>
    </div>
  )
}

