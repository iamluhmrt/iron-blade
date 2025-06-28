"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Star, Scissors } from "lucide-react"
import { team } from "@/lib/config"

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-6 py-3 mb-6">
            <Scissors className="h-5 w-5 text-amber-400" />
            <span className="text-amber-200 font-semibold">Meet The Masters</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Our Expert
            <span className="block text-amber-400">Barbers</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the artists behind the magic. Our master barbers bring years of experience, passion, and dedication to
            every cut.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-amber-500/50 transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Social Link */}
                    <div className="absolute top-4 right-4">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-black/50 hover:bg-amber-500 text-white hover:text-black rounded-full backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {member.experience}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-amber-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-400 mb-4 leading-relaxed">{member.specialty}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">5.0 Rating</span>
                    </div>

                    {/* Instagram Handle */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{member.instagram}</span>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold"
                      >
                        Book with {member.name.split(" ")[0]}
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you a skilled barber looking to join a team of masters? We're always looking for talented professionals.
          </p>
          <Button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-bold px-8 py-6 text-lg rounded-full">
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
