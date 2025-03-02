"use client"

import { useState } from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { RegistrationAlert } from "@/components/registration-alert"

interface RegisterButtonAlertProps extends ButtonProps {
  children: React.ReactNode
}

export function RegisterButtonAlert({ children, ...props }: RegisterButtonAlertProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button {...props} onClick={() => setOpen(true)}>
        {children}
      </Button>
      {open && <RegistrationAlert onClose={() => setOpen(false)} />}
    </>
  )
}
