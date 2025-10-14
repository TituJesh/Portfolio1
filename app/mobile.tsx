"use client"

import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Download,
  ExternalLink,
  Star,
  ArrowRight,
  Film,
  Sparkles,
  Zap,
  Palette,
  Instagram,
  Linkedin,
  Menu,
  X,
  BarChart3,
  Pen,
  Monitor,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { FloatingCard } from "@/components/floating-card"
import { useState } from "react"

export default function MobilePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = [
    {
      name: "Adobe Photoshop",
      level: "Expert",
      icon: "Palette",
      description: "Advanced photo manipulation, digital art creation, and poster design",
      percentage: 95,
    },
    {
      name: "Adobe Premiere Pro",
      level: "Advanced",
      icon: "Film",
      description: "Video editing, motion graphics, and promotional content creation",
      percentage: 85,
    },
    {
      name: "Adobe Lightroom",
      level: "Advanced",
      icon: "Sparkles",
      description: "Photo enhancement, color grading, and batch processing",
      percentage: 90,
    },
    {
      name: "Adobe After Effects",
      level: "Intermediate",
      icon: "Zap",
      description: "Motion graphics, Intros & Outros, Promotional content creation",
      percentage: 72,
    },
    {
      name: "Adobe Illustrator",
      level: "Intermediate",
      icon: "Pen",
      description: "Digital art creation, Logo Design",
      percentage: 70,
    },
  ]

  const portfolioItems = [
    {
      id: 5,
      title: "Elegant Logo for Dance Brand",
      category: "Logo Design / 3D Branding",
      image: "/placeholder.svg?height=400&width=300",
      description: "A premium 3D logo design created for Rameez Choreography",
      year: "2022",
      client: "Rameeza",
    },
    {
      id: 1,
      title: "Meant To Be",
      category: "Entertainment",
      image: "/placeholder.svg?height=400&width=300",
      description: "Double Exposure, Monochrome & Duotone poster design",
      year: "2021",
      client: "Chikums TV",
    },
    {
      id: 6,
      title: "Invitation Cover Poster",
      category: "Anniversary Invitation",
      image: "/placeholder.svg?height=400&width=300",
      description: "Elegant 25th wedding anniversary invitation cover",
      year: "2025",
      client: "Carlin's Aari Paradise",
    },
    {
      id: 9,
      title: "Singam Onaai Aatukutty",
      category: "Thriller",
      image: "/placeholder.svg?height=400&width=300",
      description: "Bold Tamil pilot film poster with gritty textures",
      year: "2023",
      client: "Chickums TV",
    },
    {
      id: 14,
      title: "Mission Impossible",
      category: "Event Design",
      image: "/placeholder.svg?height=400&width=300",
      description: "Mystery event poster with noir aesthetics",
      year: "2025",
      client: "Synexzia",
    },
    {
      id: 10,
      title: "DCU Logo Intro",
      category: "Motion Graphics",
      image: "/placeholder.svg?height=400&width=300",
      description: "Dynamic intro animation crafted in After Effects",
      year: "2022",
      client: "DCU productions",
    },
  ]

  const testimonials = [
    {
      name: "Ashraf",
      role: "Short film Director & Actor",
      company: "Chickums TV",
      content: "Absolutely phenomenal work! The poster design exceeded our expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Pratheesh Kumar",
      role: "Event Manager",
      company: "Synexzia",
      content: "Professional, innovative, and delivered ahead of schedule.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Carlin Akila",
      role: "Founder - Carlin's Aari paradise",
      company: "Carlin's Aari Paradise",
      content: "Everything was handled with care and creativity.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const stats = [
    { number: "50+", label: "Projects", icon: "Monitor" },
    { number: "15+", label: "Clients", icon: "Star" },
    { number: "5+", label: "Years", icon: "Zap" },
    { number: "98%", label: "Satisfaction", icon: "Palette" },
  ]

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5" }
    switch (iconName) {
      case "Monitor":
        return <Monitor {...iconProps} />
      case "Star":
        return <Star {...iconProps} />
      case "Zap":
        return <Zap {...iconProps} />
      case "Palette":
        return <Palette {...iconProps} />
      default:
        return <BarChart3 {...iconProps} />
    }
  }

  const renderSkillIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6" }
    switch (iconName) {
      case "Palette":
        return <Palette {...iconProps} />
      case "Film":
        return <Film {...iconProps} />
      case "Sparkles":
        return <Sparkles {...iconProps} />
      case "Zap":
        return <Zap {...iconProps} />
      case "Pen":
        return <Pen {...iconProps} />
      default:
        return <Palette {...iconProps} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-x-hidden">
      {/* Mobile Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/30">
        <div className="px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Titu Jeshurun
            </div>
            <div className="flex items-center space-x-2">
              <DarkModeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
              <div className="px-4 py-4 space-y-3">
                {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase() === "projects" ? "portfolio" : item.toLowerCase()}`}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4">
        <div className="text-center space-y-6">
          {/* Profile Image - Mobile Optimized */}
          <div className="relative mx-auto w-48 h-48 mb-6">
            <div className="relative rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Titu Jeshurun B"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm">
              <Sparkles className="w-3 h-3 mr-2" />
              Available for projects
            </div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Titu Jeshurun B</h1>

            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Creative Multimedia Designer
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed px-2">
              Transforming ideas into captivating visual narratives. Specializing in stunning multimedia designs that
              tell compelling stories.
            </p>
          </div>

          {/* Mobile Stats */}
          <div className="grid grid-cols-2 gap-4 py-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="flex justify-center mb-2 text-purple-600">{renderIcon(stat.icon)}</div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="space-y-3 px-4">
            <Link href="#portfolio">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg">
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="w-full border-purple-600/20 text-purple-600 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Skills Section */}
      <section id="skills" className="py-12 px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm mb-4">
            <Zap className="w-3 h-3 mr-2" />
            My Expertise
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Creative
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Suite Mastery
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <FloatingCard key={index} className="p-4" delay={index * 100}>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-purple-600">{renderSkillIcon(skill.icon)}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0"
                    >
                      {skill.level}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-purple-600">{skill.percentage}%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </CardContent>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* Mobile Portfolio Section */}
      <section
        id="portfolio"
        className="py-12 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm mb-4">
            <Palette className="w-3 h-3 mr-2" />
            Featured Work
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Creative
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
        </div>

        {/* Mobile Portfolio Grid - Single Column with Optimized Images */}
        <div className="space-y-6">
          {portfolioItems.map((item, index) => (
            <FloatingCard key={item.id} className="overflow-hidden" delay={index * 150}>
              <div className="relative group">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{item.year}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                  <p className="text-xs text-purple-600">Client: {item.client}</p>
                </div>
              </CardContent>
            </FloatingCard>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-purple-600/20 text-purple-600 bg-transparent">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Mobile About Section */}
      <section id="about" className="py-12 px-4">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm mb-4">
              <Sparkles className="w-3 h-3 mr-2" />
              About Me
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate About
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Visual Storytelling
              </span>
            </h2>
          </div>

          <FloatingCard className="p-4">
            <Image
              src="/placeholder.svg?height=400&width=350"
              alt="Titu Jeshurun B at work"
              width={350}
              height={400}
              className="rounded-lg w-full mb-4"
            />
          </FloatingCard>

          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Hi, I'm Titu Jeshurun B, a passionate visual storyteller with over 5+ years of experience transforming
              concepts into compelling poster designs and captivating video content.
            </p>
            <p>
              Skilled in Photoshop, Illustrator, Lightroom, Premiere Pro & After Effects — I've mastered the art of
              combining typography, color theory, and composition to create designs that communicate effectively.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Creative Direction", "Motion Graphics", "Brand Identity", "Print Design", "Digital Art"].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Testimonials */}
      <section className="py-12 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm mb-4">
            <Star className="w-3 h-3 mr-2" />
            Client Love
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <FloatingCard key={index} className="p-4" delay={index * 200}>
              <CardContent className="space-y-4">
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic text-center">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold text-sm text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                    <div className="text-xs text-purple-600">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* Mobile Contact Section */}
      <section id="contact" className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create
              <span className="block">Something Amazing?</span>
            </h2>
            <p className="text-white/90 px-4">
              Let's collaborate and bring your vision to life with stunning multimedia designs.
            </p>
          </div>

          {/* Mobile Contact Cards */}
          <div className="space-y-4">
            <FloatingCard className="p-4 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="space-y-3">
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href="mailto:tjprojects12@gmail.com" className="text-sm text-white/80">
                    tjprojects12@gmail.com
                  </a>
                </div>
              </CardContent>
            </FloatingCard>

            <div className="grid grid-cols-2 gap-4">
              <a href="https://instagram.com/titu_jeshurun" target="_blank" rel="noopener noreferrer">
                <FloatingCard className="p-3 bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
                  <CardContent className="space-y-2">
                    <div className="flex justify-center">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Instagram</h4>
                      <p className="text-xs text-white/70">@titu_jeshurun</p>
                    </div>
                  </CardContent>
                </FloatingCard>
              </a>

              <a href="https://linkedin.com/in/titu-jeshurun" target="_blank" rel="noopener noreferrer">
                <FloatingCard className="p-3 bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
                  <CardContent className="space-y-2">
                    <div className="flex justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">LinkedIn</h4>
                      <p className="text-xs text-white/70">Titu Jeshurun</p>
                    </div>
                  </CardContent>
                </FloatingCard>
              </a>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="text-center space-y-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Titu Jeshurun B
          </div>
          <p className="text-gray-400 text-sm">Creating visual stories that inspire, engage, and drive results.</p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            {["Portfolio", "About", "Services", "Contact"].map((item) => (
              <Link key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-800 text-gray-500 text-xs">
            <p>© 2024 Titu Jeshurun B. Crafted with passion and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
