"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Clock, Scissors, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Users, number: "10,000+", label: "Satisfied Clients" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Scissors, number: "50,000+", label: "Cuts Delivered" },
  { icon: Star, number: "5.0", label: "Google Rating" },
]

const features = [
  {
    icon: Award,
    title: "Master Craftsmen",
    description: "Our barbers are artists with years of training and passion for perfection",
  },
  {
    icon: Shield,
    title: "Premium Products",
    description: "We use only the finest grooming products and professional-grade tools",
  },
  {
    icon: Clock,
    title: "Time Honored Tradition",
    description: "Classic techniques passed down through generations of master barbers",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-4xl font-black text-amber-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-6"
              >
                <Star className="h-4 w-4 text-amber-400" />
                <span className="text-amber-200 text-sm font-medium">Our Story</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Crafting
                <span className="block text-amber-400">Legends</span>
                Since 2008
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                What started as a small neighborhood barbershop has evolved into São Paulo's premier grooming
                destination. We believe every man deserves to look and feel his absolute best.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Our master barbers combine time-honored techniques with modern innovation, creating an experience that's
                both nostalgic and cutting-edge. From classic cuts to contemporary styles, we're here to help you
                discover your signature look.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-bold px-8 py-6 text-lg rounded-full">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Barbershop interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-amber-400"
              >
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Master barber at work"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-6 text-black shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-black">15+</div>
                  <div className="text-sm font-bold">Years of</div>
                  <div className="text-sm font-bold">Excellence</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
