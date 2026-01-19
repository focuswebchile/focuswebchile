"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, User } from "lucide-react"

export default function FormOne() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const subject = `Contacto FocusWeb - ${formData.name}`
    const body = `Nombre: ${formData.name}%0AEmail: ${formData.email}%0A%0AMensaje:%0A${encodeURIComponent(
      formData.message,
    )}`
    window.location.href = `mailto:focuswebchile@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center text-sm text-foreground">
      <p className="text-xs bg-primary/10 text-primary font-medium px-3 py-1 rounded-full">Contacto</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 text-center text-balance">
        Hablemos de tu proyecto
      </h1>
      <p className="max-md:text-sm text-muted-foreground pb-8 text-center max-w-xl">
        Escríbenos y te respondemos en menos de 24 horas. También puedes escribir a{" "}
        <a href="mailto:focuswebchile@gmail.com" className="text-primary hover:underline">
          focuswebchile@gmail.com
        </a>
        .
      </p>

      <div className="max-w-md w-full px-2 sm:px-4">
        <Label htmlFor="name" className="font-medium">
          Nombre
        </Label>
        <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-border rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition-all overflow-hidden bg-background">
          <User className="h-4 w-4 text-muted-foreground" />
          <Input
            id="name"
            type="text"
            className="h-full px-2 w-full border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            required
          />
        </div>

        <Label htmlFor="email" className="font-medium mt-4">
          Email
        </Label>
        <div className="flex items-center mt-2 mb-4 h-11 pl-3 border border-border rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition-all overflow-hidden bg-background">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            className="h-full px-2 w-full border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
            required
          />
        </div>

        <Label htmlFor="message" className="font-medium mt-4">
          Mensaje
        </Label>
        <Textarea
          id="message"
          rows={4}
          className="w-full mt-2 p-3 border border-border rounded-2xl resize-none bg-background focus-visible:ring-2 focus-visible:ring-primary/40"
          placeholder="Cuéntanos sobre tu proyecto"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          required
        />

        <Button type="submit" className="flex items-center justify-center gap-2 mt-5 w-full rounded-full text-sm">
          Enviar mensaje
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
