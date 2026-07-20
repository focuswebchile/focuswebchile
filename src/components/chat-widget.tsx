"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { MessageCircle, Minus, Send, X } from "lucide-react"

const CHAT_WEBHOOK_URL = "https://op.focusweb.cl/webhook/focusweb-site-chat/chat"
const SESSION_STORAGE_KEY = "focusweb-chat-session-id"
const BUBBLE_DISMISSED_KEY = "focusweb-chat-bubble-dismissed"
const BUBBLE_DELAY_MS = 4000
const GREETING_TYPING_MS = 1100
const GREETING_TEXT = "¡Hola! 👋 Soy el asistente de FocusWeb. Cuéntame qué necesitas y con gusto te ayudo."
const MIN_TYPING_MS = 900
const MAX_TYPING_MS = 2200
const TYPING_MS_PER_CHAR = 20

function BotAvatar() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center self-end rounded-full bg-white shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icon-96x96.png" alt="" width={18} height={18} className="rounded-full" />
    </span>
  )
}

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 25, stiffness: 300, staggerChildren: 0.06 },
  },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } },
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 30 } },
}

function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return <span key={index}>{part}</span>
  })
}

function getSessionId() {
  if (typeof window === "undefined") return ""
  let sessionId = window.sessionStorage.getItem(SESSION_STORAGE_KEY)
  if (!sessionId) {
    sessionId = crypto.randomUUID()
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId)
  }
  return sessionId
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [hasEngaged, setHasEngaged] = useState(false)
  const [greetingTyping, setGreetingTyping] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isLoading, greetingTyping, showGreeting])

  useEffect(() => {
    if (!isOpen || showGreeting || messages.length > 0) return
    setGreetingTyping(true)
    const timer = setTimeout(() => {
      setGreetingTyping(false)
      setShowGreeting(true)
    }, GREETING_TYPING_MS)
    return () => clearTimeout(timer)
  }, [isOpen, showGreeting, messages.length])

  useEffect(() => {
    if (window.sessionStorage.getItem(BUBBLE_DISMISSED_KEY)) return
    const timer = setTimeout(() => setShowBubble(true), BUBBLE_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function dismissBubble() {
    setShowBubble(false)
    window.sessionStorage.setItem(BUBBLE_DISMISSED_KEY, "1")
  }

  function openFromBubble() {
    dismissBubble()
    setHasEngaged(true)
    setIsOpen(true)
  }

  async function sendMessage() {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    setMessages((prev) => [...prev, { role: "user", content: trimmed }])
    setInput("")
    setIsLoading(true)

    const requestStart = Date.now()

    try {
      const response = await fetch(CHAT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: trimmed, sessionId: getSessionId() }),
      })

      if (!response.ok) throw new Error(`HTTP ${response.status}`)

      const data = await response.json()
      const reply = data.output ?? "Perdona, tuve un problema para responder — probemos de nuevo."

      const targetTypingMs = Math.min(MAX_TYPING_MS, Math.max(MIN_TYPING_MS, reply.length * TYPING_MS_PER_CHAR))
      const remainingTypingMs = targetTypingMs - (Date.now() - requestStart)
      if (remainingTypingMs > 0) await new Promise((resolve) => setTimeout(resolve, remainingTypingMs))

      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Perdona, tuve un problema técnico justo ahora. Puedes escribirle directo a Felipe por WhatsApp: https://wa.me/420733796959",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              transformOrigin: "bottom right",
              background: "var(--background)",
              borderColor: "var(--border)",
              borderRadius: "var(--radius)",
            }}
            className="fixed inset-x-3 z-50 flex flex-col overflow-hidden border font-sans shadow-xl [top:max(0.75rem,env(safe-area-inset-top))] [bottom:max(0.75rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:top-auto sm:bottom-24 sm:right-5 sm:h-[65vh] sm:max-h-[480px] sm:w-[90vw] sm:max-w-[360px]"
          >
              <motion.div
                variants={sectionVariants}
                className="flex items-center justify-between px-4 py-3"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                    <Image src="/icon-96x96.png" alt="" width={30} height={30} className="rounded-full" />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">Felipe Ibar</span>
                    <span className="text-xs opacity-80">Asistente virtual · FocusWeb</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Minimizar chat"
                  className="rounded-full p-1 transition-transform duration-150 active:scale-95"
                >
                  <Minus className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.div
                variants={sectionVariants}
                ref={scrollRef}
                className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
              >
                {greetingTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-end justify-start gap-1.5"
                  >
                    <BotAvatar />
                    <div
                      className="flex items-center gap-1 rounded-[var(--radius)] px-3 py-2.5"
                      style={{ background: "var(--secondary)" }}
                    >
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.3s]"
                        style={{ background: "var(--foreground-soft, var(--muted-foreground))" }}
                      />
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.15s]"
                        style={{ background: "var(--foreground-soft, var(--muted-foreground))" }}
                      />
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full"
                        style={{ background: "var(--foreground-soft, var(--muted-foreground))" }}
                      />
                    </div>
                  </motion.div>
                )}
                {showGreeting && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="flex items-end justify-start gap-1.5"
                  >
                    <BotAvatar />
                    <div
                      className="max-w-[85%] whitespace-pre-wrap rounded-[var(--radius)] px-3 py-2 text-sm leading-relaxed"
                      style={{ background: "var(--secondary)", color: "var(--foreground)" }}
                    >
                      {GREETING_TEXT}
                    </div>
                  </motion.div>
                )}
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className={`flex items-end gap-1.5 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && <BotAvatar />}
                    <div
                      className="max-w-[85%] whitespace-pre-wrap rounded-[var(--radius)] px-3 py-2 text-sm leading-relaxed"
                      style={
                        message.role === "user"
                          ? { background: "var(--primary)", color: "var(--primary-foreground)" }
                          : { background: "var(--secondary)", color: "var(--foreground)" }
                      }
                    >
                      {renderWithBold(message.content)}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-end justify-start gap-1.5"
                  >
                    <BotAvatar />
                    <div
                      className="flex items-center gap-1 rounded-[var(--radius)] px-3 py-2.5"
                      style={{ background: "var(--secondary)" }}
                    >
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.3s]"
                        style={{ background: "var(--foreground-soft, var(--muted-foreground))" }}
                      />
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.15s]"
                        style={{ background: "var(--foreground-soft, var(--muted-foreground))" }}
                      />
                      <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full"
                        style={{ background: "var(--foreground-soft, var(--muted-foreground))" }}
                      />
                    </div>
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                variants={sectionVariants}
                className="flex items-end gap-2 border-t p-3"
                style={{ borderColor: "var(--border)" }}
              >
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje…"
                  rows={1}
                  className="flex-1 resize-none border bg-transparent px-3 py-2 text-base outline-none sm:text-sm"
                  style={{ borderColor: "var(--border)", borderRadius: "var(--radius)", color: "var(--foreground)" }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  aria-label="Enviar mensaje"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full disabled:opacity-50"
                  style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </motion.div>

              <motion.p
                variants={sectionVariants}
                className="pb-2 text-center text-[11px]"
                style={{ color: "var(--foreground-soft, var(--muted-foreground))" }}
              >
                Diseñado por FocusWeb Chile
              </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 font-sans">
        <AnimatePresence mode="wait">
          {!hasEngaged && showBubble && (
            <motion.div
              key="bubble"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="flex max-w-[240px] items-start gap-2 border px-4 py-3 text-sm shadow-lg"
              style={{
                background: "var(--background)",
                borderColor: "var(--border)",
                borderRadius: "var(--radius)",
                color: "var(--foreground)",
              }}
            >
              <button type="button" onClick={openFromBubble} className="flex-1 text-left leading-snug">
                ¿Tienes dudas sobre tu web? Escríbeme 👋
              </button>
              <button
                type="button"
                onClick={dismissBubble}
                aria-label="Cerrar mensaje"
                className="shrink-0 opacity-60 transition-opacity hover:opacity-100"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          )}
          {!hasEngaged && !showBubble && (
            <motion.span
              key="pill"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="whitespace-nowrap px-3 py-1.5 text-sm font-medium shadow-md"
              style={{
                background: "var(--background)",
                color: "var(--foreground)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
              }}
            >
              ¿Te ayudo?
            </motion.span>
          )}
        </AnimatePresence>

        <div className="relative">
          <span
            className="absolute inset-0 -z-10 rounded-full blur-xl transition-opacity duration-300"
            style={{ background: "var(--accent)", opacity: 0.35 }}
          />
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => {
              dismissBubble()
              setHasEngaged(true)
              setIsOpen((open) => !open)
            }}
            aria-label={isOpen ? "Minimizar chat" : "Abrir chat"}
            className="group relative flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
            style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
          >
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex"
            >
              <MessageCircle className="h-7 w-7" />
            </motion.span>
          </motion.button>
        </div>
      </div>
      )}
    </>
  )
}
