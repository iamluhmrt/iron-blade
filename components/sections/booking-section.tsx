"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MessageCircle, Phone, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { services, team, barberConfig } from "@/lib/config"

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `🔥 IRON BLADE BOOKING REQUEST 🔥

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
✂️ Service: ${formData.service}
👨‍🦲 Preferred Barber: ${formData.barber || "Any available"}
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
${formData.message ? `📝 Notes: ${formData.message}` : ""}

Ready to look legendary! 💪`

    const whatsappUrl = `https://wa.me/${barberConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <Calendar className="h-5 w-5 text-amber-600" />
            <span className="text-amber-800 font-semibold">Book Now</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Ready to Look
            <span className="block text-amber-600">Legendary?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book your appointment today and experience the Iron Blade difference. Premium grooming awaits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-gray-900 to-black text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Your Appointment
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll confirm your booking via WhatsApp
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-2 border-gray-300 focus:border-amber-500"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-semibold">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2 border-gray-300 focus:border-amber-500"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service" className="text-gray-700 font-semibold">
                        Service *
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-amber-500">
                          <SelectValue placeholder="Choose your service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.id} value={service.name}>
                              {service.name} - {service.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="barber" className="text-gray-700 font-semibold">
                        Preferred Barber
                      </Label>
                      <Select
                        value={formData.barber}
                        onValueChange={(value) => setFormData({ ...formData, barber: value })}
                      >
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-amber-500">
                          <SelectValue placeholder="Any available" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any available</SelectItem>
                          {team.map((member) => (
                            <SelectItem key={member.id} value={member.name}>
                              {member.name} - {member.role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date" className="text-gray-700 font-semibold">
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="mt-2 border-gray-300 focus:border-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-gray-700 font-semibold">
                        Preferred Time *
                      </Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => setFormData({ ...formData, time: value })}
                      >
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-amber-500">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">02:00 PM</SelectItem>
                          <SelectItem value="15:00">03:00 PM</SelectItem>
                          <SelectItem value="16:00">04:00 PM</SelectItem>
                          <SelectItem value="17:00">05:00 PM</SelectItem>
                          <SelectItem value="18:00">06:00 PM</SelectItem>
                          <SelectItem value="19:00">07:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-semibold">
                      Special Requests
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 border-gray-300 focus:border-amber-500"
                      placeholder="Any special requests or notes..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-bold py-6 text-lg rounded-full"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Send Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick WhatsApp */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quick WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Need to book urgently? Send us a direct message on WhatsApp.</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  <Link href={barberConfig.social.whatsapp} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Call Direct */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Direct
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">Prefer to speak directly? Give us a call and we'll book you in.</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  <Link href={`tel:${barberConfig.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {barberConfig.phone}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hours & Location */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gray-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Hours & Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>8:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    Location
                  </h4>
                  <p className="text-sm text-gray-600">
                    {barberConfig.address.street}
                    <br />
                    {barberConfig.address.neighborhood}
                    <br />
                    {barberConfig.address.city}, {barberConfig.address.state}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
