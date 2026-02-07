"use client"

import { useRef, useState } from "react"
import { Play, Pause, Maximize2 } from "lucide-react"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hasStarted, setHasStarted] = useState(true)

  function togglePlay() {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
      setHasStarted(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  function handleFullscreen() {
    if (!videoRef.current) return
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  return (
    <section className="w-full px-6 sm:px-8 lg:px-12 py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground mb-3 text-center">
          See Pillaar in Action
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto leading-relaxed">
          Watch how Pillaar makes memorial design simple, transparent, and meaningful.
        </p>

        <div className="relative group border border-border bg-card overflow-hidden">
          <video
            ref={videoRef}
            src="/demo-video.mp4"
            className="w-full aspect-video object-cover"
            playsInline
            autoPlay
            loop
            muted
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Play/Pause overlay */}
          <button
            onClick={togglePlay}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              hasStarted && isPlaying
                ? "opacity-0 group-hover:opacity-100"
                : "opacity-100"
            }`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="flex h-16 w-16 items-center justify-center bg-foreground/90 text-background backdrop-blur-sm transition-transform hover:scale-110">
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-1" />
              )}
            </div>
          </button>

          {/* Fullscreen button */}
          {hasStarted && (
            <button
              onClick={handleFullscreen}
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-foreground/80 text-background opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
              aria-label="Fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
