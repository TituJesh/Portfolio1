"use client"

export function AbstractBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {/* Gradient Orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/60 to-pink-500/60 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 right-16 w-24 h-24 bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-16 left-20 w-28 h-28 bg-gradient-to-br from-pink-400/40 to-orange-500/40 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/50 to-blue-500/50 rounded-full blur-lg animate-bounce delay-500"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rotate-12 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-gradient-to-br from-orange-500/30 to-red-500/30 rotate-45 animate-spin-slow delay-1000"></div>

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path
          d="M50,200 Q200,50 350,200 T650,200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M100,150 Q250,300 400,150 T700,150"
          stroke="url(#gradient1)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse delay-500"
        />
      </svg>

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-blue-100/20 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"></div>
    </div>
  )
}
