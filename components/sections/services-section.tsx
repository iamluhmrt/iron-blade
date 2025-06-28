"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { services } from "@/lib/config"
import { Scissors, User, Crown, Sparkles, Eye, ArrowRight, Star } from "lucide-react"

const iconMap = {
  Scissors,
  Razor: Scissors,
  User,
  Crown,
  Sparkles,
  Eye,
}

export function ServicesSection() {
  const featuredServices = services.filter((service) => service.featured)
  const regularServices = services.filter((service) => !service.featured)

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-amber-600" />
            <span className="text-amber-800 font-semibold">Our Services</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Premium Grooming
            <span className="block text-amber-600">Experience</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From classic cuts to modern styling, our master barbers deliver exceptional results using premium products
            and time-honored techniques.
          </p>
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Signature Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full -translate-y-16 translate-x-16"></div>

                    <CardHeader className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-black" />
                        </div>
                        <Badge className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-4 py-2">
                          {service.price}
                        </Badge>
                      </div>

                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{service.name}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-600 font-semibold">⏱️ {service.duration}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 group/btn"
                        >
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Regular Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors">
                          <IconComponent className="h-6 w-6 text-amber-600" />
                        </div>
                        <Badge variant="secondary" className="font-semibold">
                          {service.price}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">⏱️ {service.duration}</span>
                        <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference that premium grooming makes.
          </p>
          <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-bold px-10 py-6 text-lg rounded-full">
            Book Your Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
