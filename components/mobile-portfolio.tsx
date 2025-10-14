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
  Monitor,
  Pen,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FloatingCard } from "@/components/floating-card"
import { AnimatedBackground } from "@/components/animated-background"
import { AbstractBackground } from "@/components/abstract-background"
import { useState, useEffect } from "react"

export default function MobilePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Set dark mode as default for mobile
  useEffect(() => {
    // Always set dark mode as default
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }, [])

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
      image: "/main page.png?height=400&width=300",
      description: "A premium 3D logo design created for Rameez Choreography",
      year: "2022",
      client: "Rameeza",
    },
    {
      id: 1,
      title: "Meant To Be",
      category: "Entertainment",
      image: "/MTB-fl-.png?height=400&width=300",
      description: "Double Exposure, Monochrome & Duotone poster design",
      year: "2021",
      client: "Chikums TV",
    },
    {
      id: 6,
      title: "Invitation Cover Poster",
      category: "Anniversary Invitation",
      image: "/invitation page main.jpg?height=400&width=300",
      description: "Elegant 25th wedding anniversary invitation cover",
      year: "2025",
      client: "Carlin's Aari Paradise",
    },
    {
      id: 9,
      title: "Singam Onaai Aatukutty",
      category: "Thriller",
      image: "/soa thumbnail final copy.jpg?height=400&width=300",
      description: "Bold Tamil pilot film poster with gritty textures",
      year: "2023",
      client: "Chickums TV",
    },
    {
      id: 14,
      title: "Mission Impossible",
      category: "Event Design",
      image: "/murder-mystery-final.png?height=400&width=300",
      description: "Mystery event poster with noir aesthetics",
      year: "2025",
      client: "Synexzia",
    },
    {
      id: 10,
      title: "DCU Logo Intro",
      category: "Motion Graphics",
      video: "/WhatsApp Video 2025-06-18 at 19.55.41_667e7a5a.mp4?height=400&width=300",
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
      avatar: "/ashraf.png?height=60&width=60",
    },
    {
      name: "Pratheesh Kumar",
      role: "Event Manager",
      company: "Synexzia",
      content: "Professional, innovative, and delivered ahead of schedule.",
      rating: 5,
      avatar: "/pratheesh.JPG?height=60&width=60",
    },
    {
      name: "Carlin Akila",
      role: "Founder - Carlin's Aari paradise",
      company: "Carlin's Aari Paradise",
      content: "Everything was handled with care and creativity.",
      rating: 5,
      avatar: "/Carlin.png?height=60&width=60",
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
        return <Monitor {...iconProps} />
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden transition-colors duration-500">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Mobile Header */}
      <header className="fixed top-0 w-full z-50 glass bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b">
        <div className="px-4 py-3">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-purple-600">Titu Jeshurun</div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4 relative text-center">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden animate-fade-in-scale">
          <div className="relative rounded-full overflow-hidden shadow-2xl border-2 border-purple-500/30 hover-glow">
            <div className="absolute inset-0">
              <AbstractBackground />
            </div>

            <Image
              src="/me copy.png?height=300&width=300"
              alt="Titu Jeshurun B"
              width={300}
              height={300}
              className="relative z-10 w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl scale-110 -z-10 animate-pulse-glow"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-bounce-gentle"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-float-reverse"></div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Titu Jeshurun B</h1>
        <h2 className="text-xl text-purple-600 mb-4">Creative Multimedia Designer</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 px-4">
          Transforming ideas into captivating visual narratives.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link href="#portfolio">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0">
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button variant="outline" className="w-full bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4">
        <div className="text-center mb-8">
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
                  <div className="text-purple-600 dark:text-purple-400">{renderSkillIcon(skill.icon)}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </CardContent>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Creative
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {portfolioItems.map((item, index) => (
            <FloatingCard key={item.id} className="overflow-hidden" delay={index * 150}>
              <div className="relative group">
                {item.video ? (
                  <video src={item.video} autoPlay loop muted playsInline className="w-full h-48 object-cover" />
                ) : (
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="absolute bottom-2 left-2 right-2">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </div>
              </div>

              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.year}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">Client: {item.client}</p>
                </div>
              </CardContent>
            </FloatingCard>
          ))}
        </div>
      </section>

      {/* Mobile About Section */}
      <section id="about" className="py-12 px-4 relative">
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm mb-4 animate-slide-in-left transition-colors duration-300">
              <Sparkles className="w-3 h-3 mr-2 animate-bounce-gentle" />
              About Me
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-up animate-text-glow transition-colors duration-300">
              Passionate About
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Visual Storytelling
              </span>
            </h2>
          </div>

          {/* Profile Image */}
          <FloatingCard className="p-4 bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 hover-glow group transition-colors duration-300">
            <Image
              src="/1000087193.jpg?height=400&width=350"
              alt="Titu Jeshurun B at work"
              width={350}
              height={400}
              className="rounded-lg w-full mb-4 group-hover:scale-105 transition-transform duration-700 animate-image-hover"
            />
          </FloatingCard>

          {/* About Content */}
          <div className="space-y-6">
            {/* Introduction */}
            <FloatingCard
              className="p-6 bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"
              delay={100}
            >
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                  Hello, I'm Titu
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Hi, I'm Titu Jeshurun B, a passionate visual storyteller with over 5+ years of experience
                    transforming concepts into compelling poster designs and captivating video content. Based in Kerala,
                    India, I specialize in creating multimedia designs that don't just look good—they tell stories that
                    resonate.
                  </p>
                  <p>
                    My journey began with a fascination for how visual elements can evoke emotions and drive action.
                    Today, I've had the privilege of working with diverse clients, from independent filmmakers to
                    established brands, helping them communicate their vision through powerful visual narratives.
                  </p>
                </div>
              </CardContent>
            </FloatingCard>

            {/* Professional Background */}
            <FloatingCard
              className="p-6 bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"
              delay={200}
            >
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                  Professional Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Skilled in the complete Adobe Creative Suite—Photoshop, Illustrator, Lightroom, Premiere Pro & After
                    Effects— I've mastered the art of combining typography, color theory, and composition to create
                    designs that communicate effectively and leave lasting impressions.
                  </p>
                  <p>
                    From crafting movie posters that capture the essence of a story to designing brand identities that
                    reflect company values, I approach each project with meticulous attention to detail and a deep
                    understanding of visual communication principles.
                  </p>
                </div>
              </CardContent>
            </FloatingCard>

            {/* Work Philosophy */}
            <FloatingCard
              className="p-6 bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"
              delay={300}
            >
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                  My Design Philosophy
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I believe that great design is more than just aesthetics—it's about creating an emotional connection
                    between the audience and the message. Every color choice, every typography decision, and every
                    compositional element serves a purpose in the larger narrative.
                  </p>
                  <p>
                    My approach combines creative intuition with strategic thinking, ensuring that each design not only
                    looks stunning but also achieves its intended goals, whether that's driving engagement, building
                    brand recognition, or telling a compelling story.
                  </p>
                </div>
              </CardContent>
            </FloatingCard>

            {/* Achievements & Recognition */}
            <FloatingCard
              className="p-6 bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"
              delay={400}
            >
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Star className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                  Achievements & Recognition
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Successfully completed 50+ projects across various industries
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Maintained 98% client satisfaction rate with repeat business
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Specialized in entertainment industry poster design and branding
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Expert in motion graphics and video editing for promotional content
                    </p>
                  </div>
                </div>
              </CardContent>
            </FloatingCard>

            {/* Personal Interests */}
            <FloatingCard
              className="p-6 bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"
              delay={500}
            >
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Film className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                  Beyond Design
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    When I'm not designing, you'll find me exploring the latest trends in visual arts, studying
                    cinematography techniques, or experimenting with new creative software. I'm passionate about staying
                    ahead of design trends and continuously expanding my skill set.
                  </p>
                  <p>
                    I also enjoy collaborating with fellow creatives, sharing knowledge, and contributing to the design
                    community through mentorship and creative discussions. The creative process is always more enriching
                    when shared with like-minded individuals.
                  </p>
                </div>
              </CardContent>
            </FloatingCard>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Creative Direction",
                "Motion Graphics",
                "Brand Identity",
                "Print Design",
                "Digital Art",
                "Video Editing",
                "Color Theory",
                "Typography",
                "UI/UX Design",
                "3D Design",
              ].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className={`text-xs bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 animate-slide-in-left stagger-${index + 1} hover-lift transition-colors duration-300`}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <FloatingCard
                className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-500/30 transition-colors duration-300"
                delay={600}
              >
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Ready to Bring Your Vision to Life?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Let's collaborate and create something extraordinary together. Whether it's a brand identity, poster
                    design, or multimedia content, I'm here to help tell your story through compelling visuals.
                  </p>
                  <Link href="#contact">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 hover-lift group">
                      <span>Let's Work Together</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Ready to Create
            <span className="block">Something Amazing?</span>
          </h2>

          <div className="space-y-4">
            <FloatingCard className="p-4">
              <CardContent className="space-y-3">
                <div className="flex justify-center">
                  <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                  <a href="mailto:tjprojects12@gmail.com" className="text-sm text-gray-600 dark:text-gray-300">
                    tjprojects12@gmail.com
                  </a>
                </div>
              </CardContent>
            </FloatingCard>

            <div className="grid grid-cols-2 gap-4">
              <a href="https://instagram.com/titu_jeshurun" target="_blank" rel="noopener noreferrer">
                <FloatingCard className="p-3 text-center">
                  <CardContent className="space-y-2">
                    <Instagram className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Instagram</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">@titu_jeshurun</p>
                    </div>
                  </CardContent>
                </FloatingCard>
              </a>

              <a href="https://linkedin.com/in/titu-jeshurun" target="_blank" rel="noopener noreferrer">
                <FloatingCard className="p-3 text-center">
                  <CardContent className="space-y-2">
                    <Linkedin className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Titu Jeshurun</p>
                    </div>
                  </CardContent>
                </FloatingCard>
              </a>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
