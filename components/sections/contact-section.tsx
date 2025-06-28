"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Instagram, MapPin, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { barberConfig } from "@/lib/config"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: barberConfig.phone,
      action: `tel:${barberConfig.phone}`,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick and easy booking",
      value: "Message Us",
      action: barberConfig.social.whatsapp,
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us your questions",
      value: barberConfig.email,
      action: `mailto:${barberConfig.email}`,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow our latest work",
      value: "@ironbladebarbershop",
      action: barberConfig.social.instagram,
      color: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white">
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
            <Star className="h-5 w-5 text-amber-400" />
            <span className="text-amber-200 font-semibold">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">Let's Connect</h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your look? Get in touch with us through any of these channels. We're here to help you
            look your absolute best.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-800 border-gray-700 hover:border-amber-500/50 transition-all duration-500 group hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-r ${method.color} w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{method.title}</CardTitle>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="w-full bg-white text-black hover:bg-gray-100 font-semibold">
                    <Link href={method.action} target={method.action.startsWith("http") ? "_blank" : undefined}>
                      {method.value}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Location & Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Location */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MapPin className="mr-3 h-6 w-6 text-amber-400" />
                Visit Our Shop
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">Address</h4>
                <p className="text-gray-300 leading-relaxed">
                  {barberConfig.address.street}
                  <br />
                  {barberConfig.address.neighborhood}
                  <br />
                  {barberConfig.address.city}, {barberConfig.address.state}
                  <br />
                  CEP: {barberConfig.address.zipCode}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">What to Expect</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    Premium barbershop experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    Complimentary beverages
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    Free parking available
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    WiFi and entertainment
                  </li>
                </ul>
              </div>

              <Button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold">
                Get Directions
              </Button>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Clock className="mr-3 h-6 w-6 text-amber-400" />
                Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="font-medium text-white">Monday - Friday</span>
                  <span className="text-amber-400 font-semibold">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="font-medium text-white">Saturday</span>
                  <span className="text-amber-400 font-semibold">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-white">Sunday</span>
                  <span className="text-amber-400 font-semibold">10:00 AM - 5:00 PM</span>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-amber-400 mb-2">Walk-ins Welcome</h4>
                <p className="text-gray-300 text-sm">
                  While we recommend booking ahead, we always try to accommodate walk-in clients based on availability.
                </p>
              </div>

              <Button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
