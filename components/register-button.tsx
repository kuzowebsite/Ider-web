"use client"

import { useState } from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { RegistrationModal } from "@/components/registration-modal"

interface RegisterButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function RegisterButton({ children, ...props }: RegisterButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button {...props} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <RegistrationModal open={open} onOpenChange={setOpen} />
    </>
  )
}
