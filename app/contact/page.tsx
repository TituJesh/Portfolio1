"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { FloatingCard } from "@/components/floating-card"
import { Sparkles, Mail, User, MessageSquareText } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import emailjs from "@emailjs/browser"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function ContactPage() {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        "service_r9wejty",
        "template_fe0g8r5",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "HM3wEFJOMBPaXaW8U"
      )

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      })

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      })
      console.error("EmailJS Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-hidden">
      {/* ✅ Custom Minimal Header */}
     <header className="fixed top-0 w-full z-50 glass border-b border-white/20 dark:border-gray-700/30">
  <div className="max-w-xl mx-auto px-6 py-4">
    <nav className="flex items-center justify-between">
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
        Titu Jeshurun B
      </div>
      <DarkModeToggle />
    </nav>
  </div>
</header>





      {/* Contact Form */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-gradient" />
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2 animate-bounce-gentle" />
            Hire Me / Start Your Project
          </div>
          <h1 className="text-5xl font-bold font-serif text-gray-900 dark:text-white mb-4">
            Let's Build Something <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Awesome</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Fill out your details and I’ll get in touch to turn your vision into reality.
          </p>
        </div>

        <FloatingCard className="max-w-xl w-full glass border-white/10 p-8 text-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 text-white rounded-lg px-4 py-3 pr-10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <User className="absolute top-3 right-3 w-5 h-5 text-white/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 text-white rounded-lg px-4 py-3 pr-10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <Mail className="absolute top-3 right-3 w-5 h-5 text-white/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/80">Project Details</label>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full bg-white/10 text-white rounded-lg px-4 py-3 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <MessageSquareText className="absolute top-3 right-3 w-5 h-5 text-white/50" />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </CardContent>
          </form>
        </FloatingCard>
      </div>
    </div>
  )
}
