"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Instagram } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Classic fade cut",
    category: "Cuts",
    likes: "2.4k",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Traditional wet shave",
    category: "Shave",
    likes: "1.8k",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=500&width=400",
    alt: "Modern pompadour",
    category: "Styling",
    likes: "3.1k",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Beard sculpting",
    category: "Beard",
    likes: "1.5k",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=700&width=400",
    alt: "Barbershop atmosphere",
    category: "Shop",
    likes: "4.2k",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Precision cut",
    category: "Cuts",
    likes: "2.7k",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=450&width=400",
    alt: "Hot towel treatment",
    category: "Treatment",
    likes: "1.9k",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=550&width=400",
    alt: "Master at work",
    category: "Behind Scenes",
    likes: "3.5k",
  },
]

const categories = ["All", "Cuts", "Shave", "Beard", "Styling", "Shop", "Treatment", "Behind Scenes"]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-6 py-3 mb-6">
            <Instagram className="h-5 w-5 text-amber-600" />
            <span className="text-amber-800 font-semibold">Gallery</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our Work
            <span className="block text-amber-600">Speaks</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Every cut tells a story. Browse through our portfolio of transformations and get inspired for your next
            visit.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-500 hover:to-orange-600"
                    : "border-amber-200 text-amber-700 hover:bg-amber-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group relative"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={Math.floor(Math.random() * 300) + 400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-amber-500 text-black font-semibold">{image.category}</Badge>
                    <div className="flex items-center gap-1 text-white">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{image.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-full"
          >
            <a href="https://instagram.com/ironbladebarbershop" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-3 h-6 w-6" />
              Follow @ironbladebarbershop
            </a>
          </Button>
        </motion.div>

        {/* Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <div className="relative aspect-square">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Gallery image"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
