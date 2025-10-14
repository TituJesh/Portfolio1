"use client"

import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Download, ExternalLink, Star, ArrowRight, Film, Sparkles, Zap, Palette, Instagram, Linkedin, Github, Clapperboard, ChartNoAxesCombined, SplinePointer, LaptopMinimalCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingCard } from "@/components/floating-card"
import { AbstractBackground } from "@/components/abstract-background"
import { useEffect } from "react"

export default function Portfolio() {
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
      icon: "Zap",
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
      icon: "Film",
      description: "Motion graphics, Intros & Outros, Promotional content creation",
      percentage: 72,
    },
    {
      name: "Adobe Illustrator",
      level: "Intermediate",
      icon: "SplinePointer",
      description: "Digital art creation, Logo Design ",
      percentage: 70,
    },
  ]

  const portfolioItems = [
    {
      id: 5,
      title: "Elegant Logo for Dance Brand",
      category: "Logo Design / 3D Branding",
      image: "/main page.png?height=500&width=400",
      description: "A premium 3D logo design created for Rameez Choreography, blending bold typography with metallic textures to convey elegance and movement",
      year: "2022",
      client: "Rameeza",
    },
    {
      id: 1,
      title: "Meant To Be",
      category: "Entertainment",
      image: "/MTB-fl-.png?height=500&width=400",
      description: "Double Exposure , Monochrome & Duotone poster design",
      year: "2021",
      client: "Chikums TV",
    },
     {
      id: 10,
      title: "DCU logo intro",
      category: "Motion Graphics",
      video: "/WhatsApp Video 2025-06-18 at 19.55.41_667e7a5a.mp4?height=500&width=400",
      description: "A sleek and dynamic intro animation crafted in After Effects, showcasing layered visuals, text reveals, and motion design finesse",
      year: "2022",
      client: "DCU productions",
    },
    {
      id: 6,
      title: "Invitation cover poster",
      category: "Anniversary Invitation",
      image: "/invitation page main.jpg?height=500&width=400",
      description: "Elegant & classic, reader-friendly and visually organized 25th wedding anniversary invitation cover poster",
      year: "2025",
      client: "Carlin's Aari Paradise",
    },
    {
      id: 9,
      title: "Singam Onaai Aatukutty",
      category: "Thriller",
      image: "/soa thumbnail final copy.jpg?height=500&width=400",
      description: "Bold Tamil pilot film poster with gritty textures and manipulation poster which shows intense action-thriller vibe",
      year: "2023",
      client: "Chickums TV",
    },
    {
      id: 14,
      title: "Misson Impossible",
      category: "Event Design",
      image: "/murder-mystery-final.png?height=500&width=400",
      description: "Mystery event poster with noir aesthetics and surreal tunnel design, symbolizing suspense, mind games, and an unraveling hidden truth",
      year: "2025",
      client: "Synexzia",
    },
   
  ]

  const testimonials = [
    {
      name: "Ashraf",
      role: "Short film Director & Actor",
      company: "Chickums TV",
      content:
        "Absolutely phenomenal work! The poster design not only exceeded our expectations but became the talk of the entire film. The attention to detail and creative vision is unmatched.",
      rating: 5,
      avatar: "/ashraf.png?height=60&width=60",
    },
    {
      name: "Pratheesh Kumar",
      role: "Event Manager",
      company: "Synexzia",
      content:
        "Professional, innovative, and delivered ahead of schedule. The poster design and promotional videos perfectly captured our brand essence and significantly boosted our event attendance.",
      rating: 5,
      avatar: "/pratheesh.JPG?height=60&width=60",
    },
    {
      name: "Carlin Akila",
      role: "Founder - Carlin's Aari paradise",
      company: "Carlin's Aari Paradise",
      content:
        "From concept to delivery, everything was handled with care and creativity. The final result was polished, eye-catching, and exactly what we needed.",
      rating: 5,
      avatar: "/Carlin.png?height=60&width=60",
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed", icon: "LaptopMinimalCheck" },
    { number: "15+", label: "Happy Clients", icon: "Star" },
    { number: "5+", label: "Years Experience", icon: "Zap" },
    { number: "98%", label: "Client Satisfaction", icon: "Palette" },
  ]

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6" }
    switch (iconName) {
      case "LaptopMinimalCheck":
        return <LaptopMinimalCheck {...iconProps} />
      case "Star":
        return <Star {...iconProps} />
      case "Zap":
        return <Zap {...iconProps} />
      case "ChartNoAxesCombined":
        return <ChartNoAxesCombined {...iconProps} />
      case "SplinePointer":
        return <SplinePointer {...iconProps} />
      default:
        return <ChartNoAxesCombined {...iconProps} />
    }
  }

  const renderSkillIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8" }
    switch (iconName) {
      case "Palette":
        return <Palette {...iconProps} />
      case "Zap":
        return <Clapperboard {...iconProps} />
      case "Sparkles":
        return <Sparkles {...iconProps} />
      case "Film":
        return <Film {...iconProps} />
      case "SplinePointer":
        return <SplinePointer {...iconProps} />
      default:
        return <Palette {...iconProps} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 relative overflow-x-hidden">
      <AnimatedBackground />

      {/* Modern Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/20 dark:border-gray-700/30">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Titu Jeshurun 
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
  <Link
    key={item}
    href={`#${item.toLowerCase() === "projects" ? "portfolio" : item.toLowerCase()}`}
    className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
  >
    {item}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
))}


            </div>
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Combined Version 9 + 18 */}
      <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium animate-slide-in-left stagger-1">
                  <Sparkles className="w-4 h-4 mr-2 animate-bounce-gentle" />
                  Available for new projects
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-medium animate-slide-in-left stagger-2">
                    Hello, I'm
                  </p>
                  {/* Version 9 Style Name - Clean and Professional */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-gray-900 dark:text-white leading-tight">
                    Titu Jeshurun B
                  </h1>
                  {/* Version 9 Style Subtitle with Gradient */}
                  <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Creative Multimedia Designer
                  </h2>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-slide-in-up stagger-5">
                  Transforming ideas into captivating visual narratives across multiple mediums. I specialize in
                  creating stunning multimedia designs that not only catch the eye but tell compelling stories that
                  resonate with your audience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up stagger-6">
                <Link href="#portfolio" scroll={true}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group hover-lift"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </Button>
                </Link>
                <Link href="/Titu Jeshurun resume.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600/20 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 backdrop-blur-sm hover-lift group"
                >
                  
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                  Download Resume
                </Button>
                </Link>
              </div>
              {/* Version 18 Stats with Version 9 Clean Styling */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 text-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center group hover-lift animate-fade-in-scale stagger-${index + 1}`}
                  >
                    <div className="flex justify-center mb-2 text-purple-600 group-hover:scale-110 transition-all duration-300">
                      {renderIcon(stat.icon)}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Version 18 Image Section with Enhanced Styling */}
            <div className="relative px-4 sm:px-6 md:px-0 lg:pl-8">
              <div className="relative z-10 group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  {/* Abstract Creative Background */}
                  <AbstractBackground />

                  {/* Your Image with Transparent Background */}
                  <div className="relative z-10 p-8 flex items-center justify-center min-h-[600px] group">
                    <div className="relative">
                      <Image
                        src="/me copy.png?height=500&width=400"
                        alt="Titu Jeshurun B - Creative Multimedia Designer"
                        width={400}
                        height={500}
                        className="relative z-10 drop-shadow-2xl transition-all duration-700 cursor-pointer hover:scale-105"
                        style={{
                          filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
                        }}
                      />
                      {/* Enhanced Glow effect behind the image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl scale-110 -z-10 animate-pulse-glow"></div>
                      {/* Additional floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-bounce-gentle opacity-70"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-float-reverse opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl -z-10 animate-glow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-float-reverse"></div>
              {/* Additional floating decorative elements */}
              <div className="absolute top-1/4 -left-4 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full animate-bounce-gentle opacity-50"></div>
              <div className="absolute bottom-1/3 -right-6 w-5 h-5 bg-gradient-to-br from-pink-400 to-red-400 rounded-full animate-float opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              My Expertise
            </div>
            <h2 className="text-5xl font-bold font-serif text-gray-900 dark:text-white mb-6">
              Mastering the
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Creative Suite
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Years of dedication to perfecting my craft with industry-leading tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <FloatingCard key={index} delay={index * 200} className="p-8 text-center group">
                <CardContent className="space-y-6">
                  <div className="flex justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    {renderSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0"
                    >
                      {skill.level}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{skill.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className="text-purple-600 font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-24 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Palette className="w-4 h-4 mr-2" />
              Featured Work
            </div>
            <h2 className="text-5xl font-bold font-serif text-gray-900 dark:text-white mb-6">
              Creative
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A curated selection of my most impactful poster designs and motion graphics across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <FloatingCard
                key={item.id}
                delay={index * 150}
                className="group overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
              >
                <div className="relative overflow-hidden group">
  {item.video ? (
    <video
      src={item.video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full max-w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
    />
  ) : (
    <Image
      src={item.image || "/placeholder.svg"}
      alt={item.title}
      width={400}
      height={500}
      className="w-full max-w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
    />
  )}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
    <Link href={`/all-projects#project-${item.id}`} className="block">
    <Button
      size="sm"
      className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
    >
      <ExternalLink className="w-4 h-4 mr-2" />
      View Project
    </Button>
    </Link>
  </div>
</div>

<CardContent className="p-6 space-y-4">
  <div className="flex items-center justify-between">
    <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
      {item.category}
    </Badge>
    <span className="text-xs text-gray-500 dark:text-gray-400">{item.year}</span>
  </div>
  <div>
    <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">
      {item.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{item.description}</p>
    <p className="text-xs text-purple-600 font-medium">Client: {item.client}</p>
  </div>
</CardContent>

              </FloatingCard>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/all-projects">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-600/20 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 backdrop-blur-sm group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  About Me
                </div>
                <h2 className="text-5xl font-bold font-serif text-gray-900 dark:text-white mb-6">
                  Passionate About
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Visual Storytelling
                  </span>
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  Hi, I'm Titu Jeshurun B, a passionate visual storyteller with over 5+ years of experience transforming
                  concepts into compelling poster designs and captivating video content. My journey began with a fascination for how visual elements
                  can evoke emotions and drive action.
                </p>
                <p>
                  Skilled in Photoshop, Illustrator, Lightroom, Premiere Pro & After Effects — combining static and motion design for powerful visual storytelling, I've mastered the art of combining typography, color theory,
                  and composition to create designs that don't just look beautiful—they communicate effectively and
                  leave lasting impressions.
                </p>
                <p>
                  Every project is an opportunity to push creative boundaries while solving real business challenges. I
                  believe great design is the perfect marriage of aesthetics and strategy.
                </p>
              </div>
              
            </div>
            <div className="relative">
              <FloatingCard className="p-8">
                <Image
                  src="/1000087193.jpg?height=600&width=500"
                  alt="Titu Jeshurun B at work"
                  width={500}
                  height={600}
                  className="rounded-2xl w-full"
                />
              </FloatingCard>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl"></div>
            </div>
            <div className="flex flex-wrap gap-4">
                {["Creative Direction", "Motion Graphics", "Brand Identity", "Print Design", "Digital Art"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Client Love
            </div>
            <h2 className="text-5xl font-bold font-serif text-gray-900 dark:text-white mb-6">
              What Clients
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FloatingCard key={index} delay={index * 200} className="p-8 text-center">
                <CardContent className="space-y-6">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-purple-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 animate-gradient"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Create
              <span className="block">Something Amazing?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Let's collaborate and bring your vision to life with stunning Multimedia designs that captivate and convert.
            </p>
          </div>

          {/* Contact Information and Social Media - Properly Aligned */}
          <div className="max-w-5xl mx-auto mb-16">
            {/* Contact Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  <FloatingCard delay={0} className="text-center p-8 glass border-white/20 text-white hover:scale-105 transition-all duration-300">
    <CardContent className="space-y-4">
      <div className="flex justify-center text-white/90 transition-colors">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
          <Mail className="w-5 h-5" />
        </div>
      </div>
      <h3 className="text-xl font-bold">Email</h3>
      <a
        href="mailto:tjprojects12@gmail.com"
        className="text-white/80 hover:text-white transition-colors"
      >
        tjprojects12@gmail.com
      </a>
    </CardContent>
  </FloatingCard>

  <a href="https://linkedin.com/in/titu-jeshurun" target="_blank" rel="noopener noreferrer" className="group">
    <FloatingCard delay={200} className="text-center p-8 glass border-white/20 text-white hover:scale-105 transition-all duration-300">
      <CardContent className="space-y-4">
        <div className="flex justify-center text-white/90 transition-colors">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <Linkedin className="w-5 h-5" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">LinkedIn</h3>
          <p className="text-white/80">Titu Jeshurun B</p>
        </div>
      </CardContent>
    </FloatingCard>
  </a>
  </div>


            {/* Social Media Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
  <a href="https://instagram.com/titu_jeshurun" target="_blank" rel="noopener noreferrer" className="group">
    <FloatingCard
      delay={300}
      className="text-center p-6 glass border-white/20 text-white hover:scale-105 transition-all duration-300"
    >
      <CardContent className="space-y-3">
        <div className="flex justify-center text-white/90 group-hover:text-white transition-colors">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Instagram className="w-5 h-5" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm">Instagram</h4>
          <p className="text-white/70 text-xs">@titu_jeshurun</p>
        </div>
      </CardContent>
    </FloatingCard>
  </a>

<FloatingCard
  delay={400}
  className="flex flex-col justify-center items-center text-center py-6 px-4 glass border-white/20 text-white hover:scale-105 transition-all duration-300"
>
  <CardContent className="space-y-3">
    <div className="flex justify-center text-white/90 group-hover:text-white transition-colors">
      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
        <MapPin className="w-5 h-5" />
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-sm">Location</h4>
      <p className="text-white/70 text-xs whitespace-nowrap overflow-hidden text-ellipsis">
        Chengalpattu, TamilNadu, India
      </p>
    </div>
  </CardContent>
</FloatingCard>



  <a href="https://github.com/TituJesh" target="_blank" rel="noopener noreferrer" className="group">
    <FloatingCard
      delay={500}
      className="text-center p-6 glass border-white/20 text-white hover:scale-105 transition-all duration-300"
    >
      <CardContent className="space-y-3">
        <div className="flex justify-center text-white/90 group-hover:text-white transition-colors">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Github className="w-5 h-5" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm">GitHub</h4>
          <p className="text-white/70 text-xs">TituJesh</p>
        </div>
      </CardContent>
    </FloatingCard>
  </a>
</div>

<div className="text-center mt-6">
  <Link href="/contact">
  <Button
    size="lg"
    className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
  >
    <span>Start Your Project</span>
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center space-y-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Titu Jeshurun B
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Creating visual stories that inspire, engage, and drive results. Let's make something extraordinary
              together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:space-x-8 text-gray-400">
              {["Portfolio", "About", "Services", "Contact"].map((item) => (
                <Link key={item} href="#" className="hover:text-white transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm">
              <p>© Titu Jeshurun B. Crafted with passion and precision.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
