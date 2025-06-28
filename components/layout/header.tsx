"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Instagram, Calendar } from "lucide-react"
import { barberConfig } from "@/lib/config"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
                <span className="text-black font-black text-xl">IB</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-black text-xl tracking-wider">{barberConfig.name}</div>
              <div className="text-amber-400 text-xs font-medium tracking-widest">BARBERSHOP</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-amber-400 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:text-amber-400 hover:bg-amber-400/10"
            >
              <Link href={barberConfig.social.instagram} target="_blank">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              className="hidden md:flex bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold"
            >
              <Link href="#booking">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="hidden sm:flex border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
            >
              <Link href={`tel:${barberConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-amber-500/20">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-white hover:text-amber-400 font-medium text-lg transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <div className="pt-6 space-y-3">
                    <Button asChild className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black">
                      <Link href="#booking">Book Appointment</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-amber-400 text-amber-400 bg-transparent">
                      <Link href={`tel:${barberConfig.phone}`}>Call Now</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
