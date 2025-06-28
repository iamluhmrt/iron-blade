"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Play, Award } from "lucide-react"
import { motion } from "framer-motion"
import { barberConfig } from "@/lib/config"

export function HeroSection() {
  const scrollToBooking = () => {
    const element = document.querySelector("#booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            filter: "brightness(0.3) contrast(1.2)",
          }}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-6 py-3 mb-8"
          >
            <Award className="h-5 w-5 text-amber-400" />
            <span className="text-amber-200 font-medium">Premium Barbershop Experience</span>
            <Award className="h-5 w-5 text-amber-400" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6"
          >
            <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
              {barberConfig.name}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl md:text-3xl font-light text-amber-200 mb-4 tracking-wide"
          >
            {barberConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {barberConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-bold px-10 py-6 text-lg rounded-full shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Cut
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-lg rounded-full font-semibold group bg-transparent"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">10K+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">5★</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2">15+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-amber-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
