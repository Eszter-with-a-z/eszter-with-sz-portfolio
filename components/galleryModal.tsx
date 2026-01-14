"use client"

import Image from "next/image"
import { X } from "lucide-react"

interface GalleryModalProps {
  src: string
  alt?: string
  onClose: () => void
}

export default function GalleryModal({ src, alt, onClose }: GalleryModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose} // click outside closes
    >
      <div
        className="relative max-w-6xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-0 text-white hover:opacity-70"
          aria-label="Close gallery"
        >
          <X size={32} className="z-10 bg-accent rounded-2xl p-1"/>
        </button>

        <Image
          src={src}
          alt={alt ?? "Gallery image"}
          width={2000}
          height={1200}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  )
}
