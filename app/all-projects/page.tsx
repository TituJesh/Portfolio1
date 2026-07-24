"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { FloatingCard } from "@/components/floating-card"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, ArrowLeft, ArrowRight } from "lucide-react"
import { useSwipeable } from "react-swipeable"

const projects = [
  {
    id: 1,
    title: "Short Film Poster & Thumbnail (Meant To Be)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/MTB-fl-.png" },
      { type: "image", src: "/MTB thumbnail trailer....jpg" },
    ],
    year: "2021",
    client: "Chickums TV",
    description: "Double Exposure , Monochrome & Duotone poster design.",
  },
  {
    id: 2,
    title: "Event Poster (Paper Presentation)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/pp.png" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "engaging academic poster for a paper presentation event, blending realistic visuals with clean typography to ensure clarity and impact.",
  },
  {
    id: 3,
    title: "Promo Reel (Synexzia Event)",
    categories: ["Reels"],
    media: [
      { type: "video", src: "/WhatsApp Video 2025-06-18 at 19.50.45_96f2204d.mp4" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "Event promo reel for Synexzia.",
  },
  {
    id: 4,
    title: "Promo Reel",
    categories: ["Motion Graphics", "Posters","Reels"],
    media: [
      { type: "video", src: "/WhatsApp Video 2025-06-18 at 19.51.14_1b377776.mp4" },
      { type: "image", src: "/coming-soon.png" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "Motion Graphics promo and a poster for Synexzia",
  },
  {
    id: 5,
    title: "Elegant Logo for Dance Brand",
    categories: ["Logos"],
    media: [
      { type: "image", src: "/RAMEEZ-CHOREOGRAPHY-LOGO.png" },
    ],
    year: "2022",
    client: "Rameeza",
    description: "A premium 3D logo design created for Rameez Choreography.",
  },
    {
    id: 6,
    title: "Invitation poster",
    categories: ["posters","Invitations"],
    media: [
      { type: "image", src: "/invitation page final.jpg" },
     
    ],
    year: "2025",
    client: "Carlin's Aari Paradise",
    description: "Elegant & classic 25th wedding anniversary invitation cover poster.",
  },
    {
    id: 7,
    title: "Invitation Manipulation poster",
    categories: ["posters","Invitations"],
    media: [
      
      { type: "image", src: "/invitation portfolio.jpg" },
    ],
    year: "2025",
    client: "Carlin's Aari Paradise",
    description: "Elegant & classic 25th wedding anniversary invitation cover poster.",
  },
  // {
  //   id: 8,
  //   title: "Welcome Board Poster",
  //   categories: ["posters","Invitations"],
  //   media: [
  //     { type: "image", src: "/welcome board .jpg" },
  //   ],
  //   year: "2025",
  //   client: "Carlin's Aari Paradise",
  //   description: "Eye-catching welcome board poster with their fam memories for 25th wedding anniversary.",
  // },
  {
    id: 9,
    title: "Pilot Film Poster & Thumbnail (Singam Oonai Aatukutty)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/soa portfolio.jpg" },
      { type: "image", src: "/soa thumbnail final copy.jpg" },
    ],
    year: "2023",
    client: "Chickums TV",
    description: "Bold Tamil pilot film poster with gritty textures and manipulation poster which shows intense action-thriller vibe.",
  },
  {
    id: 10,
    title: "Motion Graphics logo & Intro",
    categories: ["Motion Graphics","Logos"],
    media: [
      { type: "video", src: "/WhatsApp Video 2025-06-18 at 19.55.41_667e7a5a.mp4" },
      { type: "image", src: "/dcu logo.png" },
    ],
    year: "2022",
    client: "DCU Productions",
    description: "A sleek and dynamic intro animation crafted in After Effects for DCU Productions.",
  },
  {
    id: 11,
    title: "Promotion Poster & Thumbnail (Singam Oonai Aatukutty)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/soa glimpse.jpg" },
      { type: "image", src: "/soa glimpse thumbnail.jpg" },
    ],
    year: "2023",
    client: "Chickums TV",
    description: "promotion poster with smudge painting and manipulation poster for SOA.",
  },
  {
    id: 12,
    title: "Short Film First Look Posters",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/kie-second-look.png" },
      { type: "image", src: "/K-I-E-fl.png" },
    ],
    year: "2023",
    client: "Chickums TV",
    description: "Elegant and classic posters designed for the short film kaadhal irandu ezhuthu with enhanced colours.",
  },
  {
    id: 13,
    title: "Event Poster (Online Gaming)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/online gaming poster .jpg" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "Immersive poster crafted for a competitive gaming event, integrating weapon props and lighting to reflect intense shooter gameplay themes.",
  },
  {
    id: 14,
    title: "Event Poster (Mission impossible)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/murder-mystery-final.png" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "Mystery event poster with noir aesthetics and surreal tunnel design, symbolizing suspense, mind games, and an unraveling hidden truth.",
  },
  {
    id: 15,
    title: "Music Event Poster (Makka Mishi)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/makka mishi poster .jpg" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "Vibrant poster designed for a 3-round music competition, blending energetic typography with audio-themed elements like headphones.",
  },
  {
    id: 16,
    title: "Event Poster (Short Film Fest)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/short film event poster copy.jpg" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "A quirky retro-style poster using vintage TV and bold color blocks to promote a student short film competition.",
  },
  {
    id: 17,
    title: "Name Reveal Poster (Synexzia)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/clg sympo poster .jpg" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "A name reveal elegant and modern poster for the Event Synexzia.",
  },
  {
    id: 18,
    title: "Logo for Synexzia",
    categories: ["Logos"],
    media: [
      { type: "image", src: "/synexzia logo.png" },
      { type: "image", src: "/logo b&w.jpg" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "A sleek 3D logo for SYNEZXIA with bold lines, deep shadows, and spaced serif text, conveying strength and elegance.",
  },
  {
    id: 19,
    title: "Manipulation & typography Short Film Poster",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/FL-of-KEJ-.png" },
    ],
    year: "2022",
    client: "Rahul",
    description: "A Manipulation & typography Short Film Poster (Kaadhal Ennum Jaadhi) for Rahul.",
  },
  //{
    //id: 20,
    //title: "A Journey of Joy – Birthday Collage",
    //categories: ["Posters"],
    //media: [
    //  { type: "image", src: "birthday-pic.png" },
    //],
    //year: "2024",
    //client: "Timo Jacob",
    //description: "A vibrant birthday collage celebrating cherished memories, growth, love, and joyful moments from childhood to present with heartfelt design.",
  //},
  {
    id: 21,
    title: "Promotion Posters of Glimpse reveal (Singam Oonai Aatukutty)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/soa-g-r-soon-.png" },
      { type: "image", src: "/soa-Glimpse-tommorow.png" },
    ],
    year: "2023",
    client: "Chickums TV",
    description: "Thriller promotion and motion graphics posters for SOA.",
  },
  {
    id: 22,
    title: "Short Film promotion Poster",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/KIE-fl.png" },
    ],
    year: "2023",
    client: "Chickums TV",
    description: "conceptual promotional poster designed for the short film kaadhal irandu ezhuthu.",
  },
  {
    id: 23,
    title: " Intercollege Technical Symposium Event Posters",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/main poster final 2.jpg" },
      { type: "image", src: "/main-poster-lanscape-with-media-partner.png" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "Modern, vibrant poster with bold typography and dynamic layout, effectively showcasing SYNEZXIA 2K25’s events, theme, and essential details.",
  },
  {
    id: 24,
    title: "Song promo poster",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/aa fl portfolio.jpg" },
      { type: "image", src: "/aa-2nd-l-hq.png" },
    ],
    year: "2024",
    client: "Ashraf",
    description: "A romantic poster with warm tones, vintage style, and emotional tension, visually expressing unspoken love through soft design and layout.",
  },
  {
    id: 25,
    title: "V2S Arts & Sports Academy – Promotional Poster",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/v2s poster portfolio.jpg" },
    ],
    year: "2025",
    client: "Arun",
    description: "A vibrant promotional poster for V2S Arts & Sports Academy, showcasing their diverse arts and sports programs with bold visuals & clear information.",
  },
  {
    id: 26,
    title: "Horror Thriller poster",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/pizhaipu-2-fl-final.png" },
    ],
    year: "2020",
    client: "Ashraf",
    description: "A horror thriller poster designed for the promotion of the short film pizhaipu.",
  },
  {
    id: 27,
    title: "Synexzia Event Poster (IPL Auction)",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/ipl auction poster final.jpg" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "A Retro Style Event Poster For the Symposium Event Synexzia.",
  },
  {
    id: 28,
    title: "Synexzia's Media Partner Poster",
    categories: ["Posters"],
    media: [
      { type: "image", src: "/media partner .jpg" },
    ],
    year: "2025",
    client: "Synexzia",
    description: "A vibrant, modern poster with bold typography and neon colors, highlighting a confident media partner For Synexzia Event.",
  },
]

const categories = ["All", "Posters", "Reels", "Invitations", "Motion Graphics", "Logos"]

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const mediaContainerRef = useRef<HTMLDivElement | null>(null)

  const filtered = projects.filter(
    (project) =>
      (selectedCategory === "All" || project.categories.includes(selectedCategory)) &&
      project.title.toLowerCase().includes(search.toLowerCase())
  )

  const closeModal = () => {
    setActiveProject(null)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])
  
  useEffect(() => {
  const hash = window.location.hash
  if (hash) {
    const target = document.querySelector(hash)
    if (target) {
      target.classList.add("highlighted")
      setTimeout(() => {
        target.classList.remove("highlighted")
      }, 4500)
    }
  }
}, [])
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeProject && slideIndex < activeProject.media.length - 1)
        setSlideIndex(slideIndex + 1)
    },
    onSwipedRight: () => {
      if (slideIndex > 0) setSlideIndex(slideIndex - 1)
    },
    trackMouse: true,
  })



  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/20 dark:border-gray-700/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Titu Jeshurun B
          </div>
          <DarkModeToggle />
        </div>
      </header>

      {/* Filters */}
      <section className="pt-32 pb-8 px-6 max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">All Projects</h1>
          <p className="text-gray-500 dark:text-gray-300">Filter and explore my creative work</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
<section className="pb-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filtered.map((project) => (
    <div key={project.id} id={`project-${project.id}`}>
      <FloatingCard className="group overflow-hidden">
        <div
          onClick={() => {
            setActiveProject(project)
            setSlideIndex(0)
          }}
          className="relative cursor-pointer group"
        >
          {project.media[0].type === "image" ? (
            <Image
              src={project.media[0].src}
              alt={project.title}
              width={500}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
            />
          ) : (
            <video
              src={project.media[0].src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-72 object-cover rounded-lg"
            />
          )}
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-1">
              {project.categories.map((cat, idx) => (
                <Badge key={idx} variant="secondary">{cat}</Badge>
              ))}
            </div>
            <span className="text-sm text-gray-400">{project.year}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
          <p className="text-xs text-purple-600">Client: {project.client}</p>
        </CardContent>
      </FloatingCard>
    </div>
  ))}
</section>


      {/* Modal Preview */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            {...swipeHandlers}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Slide buttons */}
            {slideIndex > 0 && (
              <button
                onClick={() => setSlideIndex((prev) => prev - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            {slideIndex < activeProject.media.length - 1 && (
              <button
                onClick={() => setSlideIndex((prev) => prev + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

            {/* Media Viewer */}
            <div
              ref={mediaContainerRef}
              className="transition-transform duration-300 max-h-[85vh] flex items-center justify-center px-4"
            >
              {activeProject.media[slideIndex].type === "image" ? (
                <Image
                  src={activeProject.media[slideIndex].src}
                  alt={activeProject.title}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[85vh] rounded-lg"
                />
              ) : (
                <video
                  src={activeProject.media[slideIndex].src}
                  autoPlay
                  controls
                  className="w-full max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
