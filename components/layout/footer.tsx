import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin, Scissors } from "lucide-react"
import { barberConfig } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Scissors className="h-6 w-6 text-black" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{barberConfig.name}</div>
                <div className="text-amber-400 text-xs font-medium">BARBERSHOP</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">{barberConfig.description}</p>
            <div className="flex space-x-4">
              <Link
                href={barberConfig.social.instagram}
                className="text-gray-400 hover:text-amber-400 transition-colors"
                target="_blank"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href={barberConfig.social.facebook}
                className="text-gray-400 hover:text-amber-400 transition-colors"
                target="_blank"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#services" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Our Services
              </Link>
              <Link href="#gallery" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Gallery
              </Link>
              <Link href="#team" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Meet The Team
              </Link>
              <Link href="#booking" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Book Appointment
              </Link>
              <Link href="#contact" className="block text-gray-400 hover:text-amber-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="space-y-4">
              <Link
                href={`tel:${barberConfig.phone}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>{barberConfig.phone}</span>
              </Link>
              <Link
                href={`mailto:${barberConfig.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{barberConfig.email}</span>
              </Link>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <div>{barberConfig.address.street}</div>
                  <div>{barberConfig.address.neighborhood}</div>
                  <div>
                    {barberConfig.address.city}, {barberConfig.address.state}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Hours</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9AM - 9PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>8AM - 7PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} {barberConfig.name}. All rights reserved. | Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
