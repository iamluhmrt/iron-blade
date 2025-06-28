"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { testimonials } from "@/lib/config"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <span className="text-amber-800 font-semibold">Testimonials</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            What Our Clients
            <span className="block text-amber-600">Say</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience at
            Iron Blade.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={index % 2 === 1 ? "md:mt-12" : ""}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 group hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-amber-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">"{testimonial.text}"</p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <Avatar className="mr-4 w-16 h-16 border-2 border-amber-200">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-lg">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-amber-600 font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">Verified Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-black text-amber-600 mb-2">5.0</div>
            <div className="text-gray-600 font-medium">Google Rating</div>
          </div>
          <div>
            <div className="text-4xl font-black text-amber-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-black text-amber-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl font-black text-amber-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
